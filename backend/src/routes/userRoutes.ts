import { UserController } from '../controller/userController';
import { NextFunction, Request, Response, Router } from 'express';
import { User, UserRole } from '../Model/userModel';
import { ae } from '../../utility/ae';

const router = Router();
const userController = new UserController();

router.post(
  '/signUp',
  ae(async (req: Request, res: Response, next: NextFunction) => {
    const userData: User = {
      email: req.body.email,
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      role:
        req.body.role === UserRole.EmployeeSeeker
          ? UserRole.EmployeeSeeker
          : UserRole.JobSeeker
    };

    if (userData.role === UserRole.JobSeeker) userData.skills = req.body.skills;

    const user = await userController.signUp(userData);

    res
      .status(201)
      .cookie('userId', user.id, { maxAge: 7_776_000_000 })
      .json({
        statusCode: 201,
        data: {
          id: user.id,
          email: user.email,
          name: user.name,
          username: user.username,
          role: user.role,
          skills: user.role === UserRole.JobSeeker ? user.skills : undefined
        }
      });
  })
);

router.post(
  '/signIn',
  ae(async (req: Request, res: Response, next: NextFunction) => {
    const user = await userController.signIn(
      req.body.username,
      req.body.password
    );

    if (user)
      res
        .status(200)
        .cookie('userId', user.id, { maxAge: 7_776_000_000 })
        .json({
          statusCode: 200,
          data: {
            id: user.id,
            email: user.email,
            name: user.name,
            username: user.username,
            role: user.role,
            skills: user.role === UserRole.JobSeeker ? user.skills : undefined
          }
        });
    else
      res.status(401).json({
        statusCode: 401,
        message: 'Invalid username or password!'
      });
  })
);

router.get(
  '/user',
  ae(async (req: Request, res: Response, next: NextFunction) => {
    const user = await userController.getUser(req.cookies.userId);

    if (user)
      res.status(200).json({
        statusCode: 200,
        data: {
          id: user.id,
          email: user.email,
          name: user.name,
          username: user.username,
          role: user.role,
          skills: user.role === UserRole.JobSeeker ? user.skills : undefined
        }
      });
    else
      res.status(401).json({
        statusCode: 401,
        message: 'Invalid userId!'
      });
  })
);

router.post(
  '/search',
  ae(async (req: Request, res: Response, next: NextFunction) => {
    const users = await userController.search(req.body.skills);

    res.status(200).json({
      statusCode: 200,
      data: users.map(user => ({
        id: user._id,
        email: user.email,
        name: user.name,
        username: user.username,
        skills: user.role === UserRole.JobSeeker ? user.skills : undefined
      }))
    });
  })
);

export const userRouter = router;
