import { AppError } from '../../utility/appError';

const castErrorDB = err => {
  if (err.name === 'CastError')
    return new AppError(`can not cast ${err.stringValue} to ${err.kind}`, 400);
  return err;
};

const duplicateKeyErrorDB = err => {
  if (err.code === 11000) {
    const v = Object.values(err.keyValue)[0];
    return new AppError(`${v} is already exists`, 400);
  }

  return err;
};

const validationErrorDB = err => {
  if (err.name === 'ValidationError') {
    const why = {};
    for (const e in err.errors) {
      if (e in err.errors) why[e] = castErrorDB(err.errors[e]).message;
    }

    return new AppError(why, 400);
  }
  return err;
};

const requestParseError = err => {
  if (
    (err.status === 400 && err.type === 'entity.parse.failed') ||
    (err.status === 415 && err.type === 'encoding.unsupported') ||
    (err.status === 413 &&
      (err.type === 'entity.too.large' || err.type === 'parameters.too.many'))
  )
    return new AppError('Bad Request', 400);

  return err;
};

const determineError = err => {
  // copy error
  let error = { ...err };
  error.name = err.name;
  error.message = err.message;
  error.stack = err.stack;

  // DB error
  error = castErrorDB(error);
  error = duplicateKeyErrorDB(error);
  error = validationErrorDB(error);

  // body parser error
  error = requestParseError(error);

  // default value
  error.code = error.code || 500;
  error.status = error.status || 'error';

  // check unknown error
  if (!error.isOperational) console.log('what happen??\n', err);

  return error;
};

const sendErrProd = (error, res) => {
  // send response
  if (error.isOperational) {
    res.status(error.code).json({
      status: error.status,
      message: error.message
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'something went wrong'
    });
  }
};

export const errorHandler = (err, req, res, next) => {
  sendErrProd(determineError(err), res);
};
