import axios from "axios";

export const getEstanquesRequest = async () => await axios.get("/estanques");

export const getEstanqueByIdRequest = async (id) =>
    await axios.get("/estanques/" + id);

export const createEstanqueRequest = async (estanque) =>
    await axios.post("/estanques", estanque);

export const updateEstanqueRequest = async (id, estanque) =>
    await axios.put("/estanques/" + id, estanque);

export const deleteEstanqueRequest = async (id) =>
    await axios.delete("/estanques/" + id);

export const crearMedicionRequest = async (estanque) =>
    await axios.post("/mediciones", estanque);
