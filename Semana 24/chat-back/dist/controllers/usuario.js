"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./../models/usuario");
exports.controller_usuario = {
    getAll: (req, res) => {
    },
    create: (req, res) => {
        var objUsuario = new usuario_1.Usuario();
        console.log(objUsuario);
        console.log(req.body);
        objUsuario.nombre = req.body.nombre;
        objUsuario.apellido = req.body.apellido;
        objUsuario.colores = [{ nombre: "Azul" }, { nombre: "Verde" }];
        objUsuario.save((error, usuario) => {
            if (error) {
                res.status(500).json({ message: "error" });
            }
            res.status(201).json({ usuario: usuario });
        });
    },
    buscar: (req, res) => {
        usuario_1.Usuario.findOne({ 'apellido': 'Garnica' }, 'nombre', (error, response) => {
            res.json(response);
        });
    }
};
