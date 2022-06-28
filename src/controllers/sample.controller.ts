import { RequestHandler } from 'express';
import { throwError } from '../helpers/ErrorHandler.helper';
import { asyncWrap } from '../middlewares/async.middleware';

export const sampleController: RequestHandler<any> = asyncWrap(
  async (_req, res, _next) => {
    try {
      res.status(200).json({ response: 'sample' });
    } catch (error) {
      console.error(error);
      throwError(400, 'Some error occurred.');
    }
  },
);
