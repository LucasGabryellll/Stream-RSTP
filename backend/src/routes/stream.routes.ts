import { Router } from 'express';
import { sendStream } from '../controller/streamController';

const streamRouter = Router();

streamRouter.get('/stream/:cam/:url', sendStream);

export { streamRouter };