import express from "express";
import routes from './routes/routes'
import path from 'path'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors())

//function to provide static files
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);