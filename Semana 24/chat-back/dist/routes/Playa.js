"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playa_1 = require("../controllers/playa");
exports.router_playa = express_1.Router();
exports.router_playa.get('/playa', playa_1.controller_playa.getAll);
exports.router_playa.post('/playa/crear', playa_1.controller_playa.create);
