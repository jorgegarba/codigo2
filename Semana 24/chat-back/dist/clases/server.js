"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = require("./../routes/usuario");
class Server {
    constructor() {
        this.app = express_1.default();
        this.puerto = process.env.PORT || 3700;
        this.asignarRutas();
    }
    asignarRutas() {
        var bodyParser = require('body-parser');
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.get('/', (req, res) => {
            res.send(`
                <h1>Bienvenido</h1>
                <hr/>
                <h4>Lista de Rutas</h4>
            `);
        });
        this.app.use('/', usuario_1.router_usuario);
    }
    start() {
        this.app.listen(this.puerto, () => {
            console.log("Servidor corriendo exitosamente en el puerto "
                + this.puerto);
        });
    }
}
exports.default = Server;
