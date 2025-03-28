import { Request, Response } from 'express';

import fs from "fs";

const sendStream = async (req: Request, res: Response) => {
    try {
        const inputString = req.url;
        const parts = inputString.split('/');
        const arquive = parts[parts.length - 1];
        const cam = parts[2];

        var filePath = `./video/${cam}/` + arquive;

        // Verifica se o arquivo existe antes de tentar abri-lo
        if (!fs.existsSync(filePath)) {
            return res.status(404).send('Arquivo não encontrado');
        }

        // Define os cabeçalhos de conteúdo correto
        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
        res.setHeader('Access-Control-Allow-Origin', '*');
        
        // Lê o arquivo .m3u8 e envia para o cliente
        fs.createReadStream(filePath).pipe(res);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao abrir video." });
    }
}

export { sendStream };