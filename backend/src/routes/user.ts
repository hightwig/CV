import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json(req.body);
});
export const userRouter = router;
