import { connectDB, closeDB } from "../database/conexion.js";
import Estanque from "../models/Estanque.js";

/* export const todasMediciones = async (req, res) => res.send("Si hay algo"); */

export const insertarMediciones = async (req, res) => {
    try {
        const { volumen, temperatura, api } = req.body;

        const valores = { volumen, temperatura, api };
        console.log(valores);

        await connectDB();
        const result = await Estanque.findByIdAndUpdate(req.body.estanque, {
            $push: { mediciones: valores },
        });
        //const estanques = await Estanque.find();
        await closeDB();
        if (!result) {
            return res.status(404).send("No fue creado satisfactoriamente");
        }
        return res.status(201).json(result);
    } catch (error) {
        res.status(500).send({ message: "Problemas de conexion con bd" });
    }
};

/* export const eliminarMediciones = async (req, res) => res.send("Si hay algo");

export const actualizarMediciones = async (req, res) => res.send("Si hay algo");

export const oneMediciones = async (req, res) => res.send("Si hay algo"); */
