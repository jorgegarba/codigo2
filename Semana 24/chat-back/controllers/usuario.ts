import {Response, Request} from 'express';
import {Usuario} from './../models/usuario';

export var controller_usuario= {
    getAll: (req:Request, res:Response)=>{
        
    },
    create:(req:Request, res:Response)=>{
        var objUsuario = new Usuario();
        console.log(objUsuario);
        console.log(req.body);
        objUsuario.nombre = req.body.nombre;
        objUsuario.apellido = req.body.apellido;
        objUsuario.colores = [{nombre:"Azul"},{nombre:"Verde"}];
        objUsuario.save((error:any,usuario:any)=>{
            if(error){
                res.status(500).json({message:"error"});
            }
            res.status(201).json({usuario:usuario});
        });
    },
    buscar:(req:Request, res:Response)=>{
        Usuario.findOne({'apellido':'Garnica'},'nombre',(error:any,response:any)=>{
            res.json(response);
        });
    }
}