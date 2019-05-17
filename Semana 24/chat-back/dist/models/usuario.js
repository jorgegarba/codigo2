"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        default: "Juan"
    },
    apellido: {
        type: String,
        default: "Perez"
    },
    colores: {
        type: [
            {
                nombre: String
            }
        ],
    }
});
exports.Usuario = mongoose.model('usuarios', usuarioSchema);
