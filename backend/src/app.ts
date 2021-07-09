import * as express from 'express';
import { userRouter } from './routes/userRoutes';
import { advertiseRouter } from './routes/advertiseRoutes';

const app = express();

app.use(express.json({ limit: '10kb' }));

app.use(userRouter);
app.use(advertiseRouter);

export default app;
