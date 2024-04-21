import express from "express";
import morgan from "morgan";
import Router from "./routes/sensor.routes.js";
import { config } from "dotenv";
import http from "http";
import { Server as SocketIo } from "socket.io";
import cors from "cors"; 

config();

const app=express();
const server = http.createServer(app); // Definir el servidor HTTP aquí
const io = new SocketIo(server); // Utilizar el servidor HTTP para crear la instancia de SocketIo


// Configura el evento de conexión
io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');

     // Maneja eventos específicos
    socket.on('disconnect', () => {
        console.log('Un cliente se ha desconectado');
    });
});

//SETTINGS
app.set('view engine', 'ejs');
//MIDLEWARES
app.use(express.json());
app.use(cors()); 
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use('/', Router);

export  {io}; 
export default app;
