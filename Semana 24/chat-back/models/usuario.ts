var mongoose = require('mongoose');
var usuarioSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            default: "Juan"
        },
        apellido: {
            type: String,
            default: "Perez"
        },
        colores:{
            type: [
                { 
                    nombre: String
                }
            ],
        }
    }
);

export var Usuario = mongoose.model('usuarios', usuarioSchema);
