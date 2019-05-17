import express from 'express';
import {router_usuario} from './../routes/usuario';
export default class Server{
    public app:express.Application;
    public puerto:any;
    constructor(){
        this.app = express();
        this.puerto = process.env.PORT || 3700;

        this.asignarRutas();
    }
    asignarRutas(){

        var bodyParser = require('body-parser');
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        this.app.get('/',(req,res)=>{
            res.send(`
                <h1>Bienvenido</h1>
                <hr/>
                <h4>Lista de Rutas</h4>
            `);
        });
        this.app.use('/',router_usuario);
    }

    start(){
        this.app.listen(this.puerto,()=>{
            console.log("Servidor corriendo exitosamente en el puerto "
                        + this.puerto);
        });
    }
}