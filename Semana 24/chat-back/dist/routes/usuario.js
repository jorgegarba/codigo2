"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
exports.router_usuario = express_1.Router();
exports.router_usuario.get('/usuarios', usuario_1.controller_usuario.getAll);
exports.router_usuario.post('/usuarios/crear', usuario_1.controller_usuario.create);
exports.router_usuario.get('/usuarios/buscar', usuario_1.controller_usuario.buscar);
