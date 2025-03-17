import {io, Socket} from 'socket.io-client';
import Env from './env';

let socket: Socket;

const getSocket = () => {
    if(!socket) {
        socket = io(Env.BACKEND_URL, {
            autoConnect: false,
        });
    }
    return socket;
}

export  {getSocket};
// Compare this snippet from server/src/env.ts: