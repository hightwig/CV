import { RequestHandler } from 'express';

export const ae = (fn): RequestHandler => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
