import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/', (_req, res, _next) => {
  res.json({ response: 'sample' });
});

export default router;
