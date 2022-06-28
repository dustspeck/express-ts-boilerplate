import express from 'express';
import cookieParser from 'cookie-parser';
import { throwError } from '../helpers/ErrorHandler.helper';
import sampleRouter from './sample.route';

const api = express();
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(cookieParser());

api.use('/', sampleRouter);

api.use('*', () => {
  throwError(404, 'Route does not exist');
});

export default api;
