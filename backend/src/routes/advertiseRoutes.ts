import { AdvertiseController } from '../controller/advertiseController';
import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

const advertiseController = new AdvertiseController();

router.post(
  '/addAdvertise',
  async (req: Request, res: Response, next: NextFunction) => {
    const advertise = await advertiseController.addAdvertise({
      condition: req.body.condition,
      description: req.body.description,
      employeeSeeker: req.body.employeeSeeker,
      salary: req.body.salary,
      skills: req.body.skills,
      title: req.body.title
    });

    res.status(201).json({
      statusCode: 201,
      data: {
        id: advertise.id,
        condition: advertise.condition,
        description: advertise.description,
        employeeSeeker: advertise.employeeSeeker,
        salary: advertise.salary,
        skills: advertise.skills,
        title: advertise.title
      }
    });
  }
);

export const advertiseRouter = router;
