"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let playaSchema = new Schema({
    id: {
        type: String
    },
    nombre: {
        type: String
    }
}, {
    versionKey: false
});
exports.Playa = mongoose.model('Playas', playaSchema);
