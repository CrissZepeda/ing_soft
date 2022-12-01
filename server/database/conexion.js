import mongoose from "mongoose";
import config from "../config.js";

export const connectDB = async () => {
    try {
        const pool = await mongoose.connect(config.db_mongo);
        console.log("Conectado correctamente");
        return pool;
    } catch (error) {
        console.log(error);
    }
};

export const closeDB = async (pool) => {
    try {
        await mongoose.disconnect();
        //console.log("BD desconectado");
    } catch (error) {
        console.log(error);
    }
};
