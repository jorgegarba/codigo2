import {Response, Request} from 'express';
import {Playa} from '../models/playa';
export var controller_playa = {
    getAll: (req:Request, res:Response)=>{
        Playa.find((err:any,playas:any)=>{
            console.log(playas);
        });
    },
    create: (req:Request, res:Response)=>{
        //Creando objeto del modelo project administrado por Mongoose
        var objPlaya = new Playa();
        //creando un arreglo con los parametros recibidos por POSTMAN
        var params = req.body;
        objPlaya.nombre = params.nombre;
        objPlaya.id = params.id;
        
        objPlaya.save((err:any, playaCreada:any)=>{
            if(err){
                return res.status(500).send({error:"Error al guardar el Proyecto"});
            }
            if(!playaCreada){
                return res.status(404).send({error:"Error al guardar el Proyecto"});
            }
            return res.status(200).send({creado:playaCreada});
        });
    },
}