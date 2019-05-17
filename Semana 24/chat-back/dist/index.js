"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./clases/server"));
const playa_1 = require("./routes/playa");
var mongoose = require('mongoose');
let servidor = new server_1.default();
servidor.app.use('/', playa_1.router_playa);
mongoose.connect('mongodb://localhost:27017/playitas')
    .then(() => {
    console.log("Conexión a la base de gatos establecida con éxito...!");
    servidor.start();
}).catch((err) => {
    console.log(err);
});
