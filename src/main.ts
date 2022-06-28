import express, { Application, Request, Response } from 'express';
import { ErrorHandler, throwError } from './helpers/ErrorHandler.helper';
import * as dotenv from 'dotenv';
import cors from 'cors';
import api from './routes/';

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use('/api/v1', api);

app.get('/', (_: Request, res: Response) => {
  res.send('server up');
});

api.use('*', () => {
  throwError(404, 'Route does not exist');
});

app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log(`App listening at: ${PORT}`);
});
