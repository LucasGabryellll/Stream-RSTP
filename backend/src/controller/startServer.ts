import path from 'path';
import dotenv from 'dotenv';

import { clearAllFilesInDirectory } from "../functions/clearAllFilesInStreaming";
import { httpServer } from "../http";

dotenv.config();

const videoDirectoryPath = path.join(__dirname, '..', '..', 'video');

export async function startServer() {
  try {
      await clearAllFilesInDirectory(videoDirectoryPath);
      console.log('Arquivos antigos removidos da pasta de vídeo.');
     
      httpServer.listen(process.env.PORT_SERVER, () => {
          console.log(`Server is running: http://localhost:${process.env.PORT_SERVER}`);
      });
  } catch (error) {
      console.error('Erro ao limpar arquivos ao iniciar o servidor:', error);
  }
}