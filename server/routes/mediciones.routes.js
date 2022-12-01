import { Router } from "express";
import {
    //todasMediciones,
    insertarMediciones,
    //actualizarMediciones,
    //eliminarMediciones,
    //oneMediciones,
} from "../controllers/mediciones.controller.js";

const router = Router();

//router.get("/mediciones/:id", todasMediciones);
router.post("/mediciones", insertarMediciones);
/* router.put("/mediciones/:id", actualizarMediciones);
router.delete("/mediciones/:id", eliminarMediciones);
router.get("/medicion/:id", oneMediciones); */

export default router;
