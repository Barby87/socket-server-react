// Servidor de express
const express = require('express')
// Servidor de sockets
const http = require('http')
const socketio = require('socket.io')
const path = require('path');
const Sockets = require('./sockets');

// Inicializar servidor express
class Server {
    constructor() {
        // Propiedades del server
        this.app = express();
        this.port = process.env.PORT;

        // http server
        this.server = http.createServer( this.app )

        // Configuraciones de sockets
        // Config de socket server
        this.io = socketio( this.server, {/* Configuraciones */} );
    }

    // Creando métodos
    middlewares () {
        // Desplegar el directorio público
        this.app.use(express.static( path.resolve( __dirname, '../public')))
    }

    configurarSockets() {
        new Sockets( this.io )
    }

    execute () {
        // Inicializar middlewares
        this.middlewares()

        this.configurarSockets()

        // Inicializar Server
        this.server.listen(this.port, ()=> {
            console.log('Server corriendo en server:', this.port )
        });
    } 
}

// Exportar servidor
module.exports = Server