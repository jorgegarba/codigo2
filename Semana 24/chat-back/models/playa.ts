let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let playaSchema = new Schema(
    {
        id: {
            type:String
        },
        nombre:{
            type:String
        }
    },
    {
        versionKey:false
    }
);

export let Playa = mongoose.model('Playas', playaSchema);
