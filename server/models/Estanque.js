import mongoose from "mongoose";

const estaqueSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    capacidad: {
        type: Number,
        required: true,
        trim: true,
        integer: true,
    },
    faena: {
        type: String,
        required: true,
        trim: true,
    },
    mediciones: [
        {
            _idMedicion: {
                type: mongoose.Schema.Types.ObjectId,
            },
            fecha: {
                type: Date,
                default: Date.now,
            },
            volumen: {
                type: mongoose.Decimal128,
                required: true,
                trim: true,
            },
            temperatura: {
                type: mongoose.Decimal128,
                required: true,
                trim: true,
            },
            api: {
                type: mongoose.Decimal128,
                required: true,
                trim: true,
            },
        },
    ],
});

export default mongoose.model("Estanque", estaqueSchema);
