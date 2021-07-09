import * as express from 'express';
import * as cors from 'cors';
import { userRouter } from './routes/userRoutes';
import { advertiseRouter } from './routes/advertiseRoutes';
import { errorHandler } from './controller/errorController';

const app = express();

app.use(cors());
app.use(express.json({ limit: '10kb' }));

app.use(userRouter);
app.use(advertiseRouter);

app.use(errorHandler);

export default app;
