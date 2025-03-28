import { exec } from "node:child_process";
import path from 'path';
import fs from "fs";

import { CONSTANTS } from "../config/CONTANTS";
import { CAM_STREAMING } from "../model/database";
import { startClear } from './cleanVideoController';

type Props = {
  user: string,
  password: string,
  ip: string,
  path_cam_stream: string,
  folder_output: string
}

function startCameraStream({ ip, folder_output, password, path_cam_stream, user }: Props) {
  const url = `rtsp://${user}:${password}@${ip}:554/${path_cam_stream}`;
  const path_file_output = `./video/${folder_output}/index.m3u8`;

  const pathFolderCam = path.join(__dirname, '..', '..', 'video', folder_output);

  if (!fs.existsSync(pathFolderCam)) {
    fs.mkdirSync(pathFolderCam, { recursive: true });
  }

  const ffmpegStart = `ffmpeg -i "${url}" ${CONSTANTS.CODEC_STREAMING} ${path_file_output}`;
  
  exec(ffmpegStart, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao iniciar o streaming: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Erro no ffmpeg: ${stderr}`);
      return;
    }
    console.log(`Streaming iniciado com sucesso: ${stdout}`);
  });

  startClear({
    path: pathFolderCam,
    timer: 3000, seconds: 10
  });
}

CAM_STREAMING.forEach(startCameraStream);