import {Router} from 'express';
import {controller_usuario} from '../controllers/usuario';

export var router_usuario = Router();
router_usuario.get('/usuarios',controller_usuario.getAll);
router_usuario.post('/usuarios/crear',controller_usuario.create);
router_usuario.get('/usuarios/buscar',controller_usuario.buscar);