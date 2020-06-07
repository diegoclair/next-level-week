import express from "express";
import multer from 'multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import multerConfig from '../config/multer';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

//index for all registers and show for only one register
routes.post('/points', upload.single('image'), pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
