// Permite tener control de cada uno de los clientes que se vayan conectando
class Sockets {

    constructor ( io ) {
        
        this.io = io

        this.socketEvents()

        // clientes = {

        // }
    }

    socketEvents() {
        // Socket del lado del servidor, on connection
        this.io.on('connection', (socket) => { 
            // socket.on('mensaje-cliente', (data)=> {
            //     console.log(data)
            // })

            // Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', (data) => {
                console.log("data client: ", data);
                // Emitir mensaje a todos los clientes
                // io.emit le manda un mensaje global a todas las personas que esten conectadas a este namespace
                this.io.emit('mensaje-from-server', data)
            })
        });

    }
}

module.exports = Sockets