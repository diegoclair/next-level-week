import express from "express";
import routes from './routes/routes'
import path from 'path'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors()); //its need no be before of app.use(routes)
app.use(routes);

//function to provide static files
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);