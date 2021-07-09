import { UserController } from '../controller/userController';
import { NextFunction, Request, Response, Router } from 'express';
import { UserRole } from '../Model/userModel';

const router = Router();
const userController = new UserController();

router.post(
  '/signUp',
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await userController.signUp({
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

router.post(
  '/signIn',
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await userController.signIn(
      req.body.username,
      req.body.password
    );

    if (user)
      res.status(200).json({
        statusCode: 200,
        data: {
          id: user.id,
          email: user.email,
          name: user.name,
          username: user.username,
          role: user.role
        }
      });
    else
      res.status(401).json({
        statusCode: 401,
        message: 'Invalid username or password!'
      });
  }
);

export const userRouter = router;
