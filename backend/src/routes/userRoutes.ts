import { signUp } from '../controller/userController';
import { NextFunction, Request, Response, Router } from 'express';
import { UserRole } from '../Model/userModel';

const router = Router();

router.post(
  '/signUp',
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await signUp({
      email: req.body.email,
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      role:
        req.body.role === UserRole.EmployeeSeeker
          ? UserRole.EmployeeSeeker
          : UserRole.JobSeeker
    });

    res.status(201).json({
      statusCode: 201,
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        username: user.username,
        role: user.role
      }
    });
  }
);

export const userRouter = router;
