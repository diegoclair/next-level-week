import express from "express";
import multer from 'multer';
import {celebrate, Joi} from 'celebrate'

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import multerConfig from '../config/multer';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

//index for all registers and show for only one register
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', 
  upload.single('image'), 
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required(),
    })
  }, {
    abortEarly: false, //without this, when it found a first error it return, with this abortEarly, it validate all fields and return all errors
  }),
  pointsController.create
  );

export default routes;
