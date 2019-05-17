"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playa_1 = require("../models/playa");
exports.controller_playa = {
    getAll: (req, res) => {
        playa_1.Playa.find((err, playas) => {
            console.log(playas);
        });
    },
    create: (req, res) => {
        //Creando objeto del modelo project administrado por Mongoose
        var objPlaya = new playa_1.Playa();
        //creando un arreglo con los parametros recibidos por POSTMAN
        var params = req.body;
        objPlaya.nombre = params.nombre;
        objPlaya.id = params.id;
        objPlaya.save((err, playaCreada) => {
            if (err) {
                return res.status(500).send({ error: "Error al guardar el Proyecto" });
            }
            if (!playaCreada) {
                return res.status(404).send({ error: "Error al guardar el Proyecto" });
            }
            return res.status(200).send({ creado: playaCreada });
        });
    },
};
