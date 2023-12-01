import { Router, Request, Response } from "express";

import { streamRouter } from './stream.routes';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    
    res.status(200).json({
        running: true,
        message: "Server is Running",
        version: '1.0.0',
    });
})

routes.use(streamRouter);

export { routes };