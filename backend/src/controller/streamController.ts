import { Request, Response } from 'express';

import fs from "fs";

const sendStream = async (req: Request, res: Response) => {
    try {
        const inputString = req.url;
        const parts = inputString.split('/'); // Divide a string usando '/' como delimitador
        const arquive = parts[parts.length - 1]; // Pega o último elemento do array
        const cam = parts[2]; // Pega a pasta da camera

        var filePath = `./video/${cam}/` + arquive;

        fs.readFile(filePath, (error, data) => {
            res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
            if (error) {
                if (error.code == 'ENOENT') {
                    res.end("Error")
                }

                else {
                    res.writeHead(500);
                    res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
                    res.end();
                }
            }

            else {
                res.end(data, 'utf8');
            }
        });

    } catch (error) {
        return res.status(500).json({ message: "Erro ao abrir video." });
    }
}

export { sendStream };