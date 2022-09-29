const  express = require('express')
const  cors    = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath   = "/api/usuarios"

        //middlewares 
        this.middlewares()

        // rutas de la app 
        this.routes();
    }

    middlewares() {
        //cors
        this.app.use(cors())
        // directorio publico 
        this.app.use(express.static('public'))

        //lectura y parseo del body
        this.app.use(express.json())
        
    }

    routes(){
        this.app.use('/api/users', require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor en ', this.port)
        }) }

    }
    
    
    module.exports =  Server
