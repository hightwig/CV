import { AdvertiseController } from '../controller/advertiseController';
import { NextFunction, Request, Response, Router } from 'express';
import { Advertise } from 'Model/advertiseModel';

const router = Router();

const advertiseController = new AdvertiseController();

router.post(
  '/searchAdvertise',
  async (req: Request, res: Response, next: NextFunction) => {
    const ads = await advertiseController.searchAdvertise(req.body.skills);

    res.status(200).json({
      statusCode: 200,
      data: ads.map(ad => ({
        id: ad.id,
        condition: ad.condition,
        description: ad.description,
        employeeSeeker: ad.employeeSeeker,
        salary: ad.salary,
        skills: ad.skills,
        title: ad.title,
        createdAt: ad.createdAt,
        updatedAt: ad.updatedAt
      }))
    });
  }
);

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
        title: advertise.title,
        createdAt: advertise.createdAt,
        updatedAt: advertise.updatedAt
      }
    });
  }
);

router.patch(
  '/updateAdvertise/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const newAdvertise: Partial<Advertise> = {};
    if (req.body.condition) newAdvertise.condition = req.body.condition;
    if (req.body.description) newAdvertise.description = req.body.description;
    if (req.body.salary) newAdvertise.salary = req.body.salary;
    if (req.body.skills) newAdvertise.skills = req.body.skills;
    if (req.body.title) newAdvertise.title = req.body.title;

    const advertise = await advertiseController.editAdvertise(
      req.params.id,
      newAdvertise
    );

    res.status(200).json({
      statusCode: 200,
      data: {
        id: advertise.id,
        condition: advertise.condition,
        description: advertise.description,
        employeeSeeker: advertise.employeeSeeker,
        salary: advertise.salary,
        skills: advertise.skills,
        title: advertise.title,
        createdAt: advertise.createdAt,
        updatedAt: advertise.updatedAt
      }
    });
  }
);

router.delete(
  '/deleteAdvertise/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    await advertiseController.removeAdvertise(req.params.id);

    res.status(202).json({
      statusCode: 202
    });
  }
);

export const advertiseRouter = router;
