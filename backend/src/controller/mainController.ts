import fs from "fs"; // Importe a biblioteca 'fs' corretamente
import { io } from "../socketio";
import path from "path";

const filePath = path.join(__dirname, '..', '..', 'video', 'index.m3u8');

io.on('connection', (socket) => {
    console.log(`Cliente conectado: ${socket.id}`);

    const sendM3U8 = () => {
        // Leia o arquivo M3U8 do sistema de arquivos (corrigido 'fs.readFile')
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            // Envie o conteúdo do arquivo M3U8 para o cliente

            socket.emit('m3u8Content', data);
        });
    };

    // Inicie o envio do arquivo M3U8 quando o cliente se conectar
    sendM3U8();

    socket.on('disconnect', () => {
        console.log(`Cliente desconectado: ${socket.id}`);
    });
});