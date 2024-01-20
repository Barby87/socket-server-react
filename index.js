const Server = require('./models/server')
require('dotenv').config()

const server = new Server()

// Inicializar el servidor
server.execute()
