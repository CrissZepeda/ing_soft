import { connectDB, closeDB } from "../database/conexion.js";
import Estanque from "../models/Estanque.js";

export const todosEstanques = async (req, res) => {
    try {
        await connectDB();
        const estanques = await Estanque.find();
        await closeDB();
        return estanques
            ? res.status(200).json(estanques)
            : res.status(200).send("No existen registros");
    } catch (error) {
        res.status(500).send({ message: "Problemas de conexion con bd" });
    }
};

export const insertarEstanques = async (req, res) => {
    try {
        const { nombre, capacidad, faena } = req.body;

        const estanque = new Estanque({ nombre, capacidad, faena });

        await connectDB();
        const result = await estanque.save();
        //const estanques = await Estanque.find();
        console.log(result);
        await closeDB();
        /* if (!result) {
            return res.status(404).send("No fue creado satisfactoriamente");
        } */
        return res.status(201).json(result);
        //return res.json(estanques);
    } catch (error) {
        res.status(500).send({ message: "Problemas de conexion con bd" });
    }
};

export const eliminarEstanques = async (req, res) => {
    try {
        await connectDB();
        const result = await Estanque.findByIdAndDelete(req.params.id);
        await closeDB();
        if (!result) {
            return res.status(404).send("Registro no encontrado");
        }
        res.status(204).send("Eliminado correctamente");
    } catch (error) {
        res.status(500).send({ message: "Problemas no actualizo" });
    }
};

export const actualizarEstanques = async (req, res) => {
    try {
        await connectDB();

        const result = await Estanque.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        await closeDB();
        if (!result) {
            return res.status(404).send("Registro no encontrado");
        }
        res.status(201).json(req.body);
    } catch (error) {
        res.status(500).send({ message: "Problemas no actualizo" });
    }
};

export const oneEstanques = async (req, res) => {
    try {
        const { id } = req.params;
        await connectDB();
        const estanques = await Estanque.findById(id);
        await closeDB();

        return estanques
            ? res.status(200).json(estanques)
            : res.send("No existen registros");
    } catch (error) {
        res.status(500).send({ message: "Problemas de conexion con bd" });
    }
};
