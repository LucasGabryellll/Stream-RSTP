import fs from 'fs';
import path from 'path';

export async function clearAllFilesInDirectory(directoryPath: string) {
  try {
      
      const files = await fs.promises.readdir(directoryPath);

      const filePaths = files.map(file => path.join(directoryPath, file))
          .filter(filePath => fs.statSync(filePath).isFile());

      if (filePaths.length > 1) {
         
          await Promise.all(
              filePaths.map(filePath => fs.promises.unlink(filePath))
          );
          console.log(`${filePaths.length} arquivos removidos com sucesso.`);
      } 
  } catch (error) {
      console.error('Erro ao limpar todos os arquivos da pasta:', error);
  }
}