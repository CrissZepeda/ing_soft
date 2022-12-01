import { Router } from "express";
import {
    todosEstanques,
    insertarEstanques,
    actualizarEstanques,
    eliminarEstanques,
    oneEstanques,
} from "../controllers/estanques.controller.js";

const router = Router();

router.get("/estanques", todosEstanques);
router.post("/estanques", insertarEstanques);
router.put("/estanques/:id", actualizarEstanques);
router.delete("/estanques/:id", eliminarEstanques);
router.get("/estanques/:id", oneEstanques);

export default router;
