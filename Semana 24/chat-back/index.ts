import Server from './clases/server';
import { router_playa } from './routes/playa';
var mongoose = require('mongoose');
let servidor = new Server();



servidor.app.use('/', router_playa);

mongoose.connect('mongodb://localhost:27017/playitas')
    .then(() => {
        console.log("Conexión a la base de gatos establecida con éxito...!");
        servidor.start();
    }).catch((err: any) => {
        console.log(err);
    });
