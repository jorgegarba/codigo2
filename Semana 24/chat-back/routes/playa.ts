import {Router} from 'express';
import {controller_playa} from '../controllers/playa';

export var router_playa = Router();

router_playa.get('/playa',controller_playa.getAll);
router_playa.post('/playa/crear',controller_playa.create);