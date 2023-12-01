import { startClear } from './controller/cleanVideoController';
import { httpServer } from "./http";
import { exec } from "node:child_process";

import path from 'path';

const pathFolderCam1 = path.join(__dirname, '..', 'video', 'cam1');
const pathFolderCam2 = path.join(__dirname, '..', 'video', 'cam2');

import "./controller/mainController";

import dotenv from "dotenv";

dotenv.config();

//exec(`${process.env.CAM_1}`);
exec(`${process.env.CAM_2}`);

startClear({ path: pathFolderCam1, timer: 3000, seconds: 10 });
startClear({ path: pathFolderCam2, timer: 3000, seconds: 10 });

httpServer.listen(process.env.PORT_SERVER, () => console.log(`Server is running in: http://localhost:${process.env.PORT_SERVER}`));