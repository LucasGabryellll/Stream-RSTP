import io from "socket.io-client";

const socketio = io("http://localhost:5000", {
    transports: ['websocket']
});

export { socketio };