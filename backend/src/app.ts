import * as express from 'express';
import { userRouter } from './routes/user';

const app = express();

app.use(express.json({ limit: '10kb' }));

app.use(userRouter);

export default app;
