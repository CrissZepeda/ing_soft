import { useState, createContext, useContext, useEffect } from "react";
import {
    getEstanquesRequest,
    createEstanqueRequest,
    updateEstanqueRequest,
    deleteEstanqueRequest,
    getEstanqueByIdRequest,
    crearMedicionRequest,
} from "../api/api.estanques";

const contextMedicion = createContext();

export const useMediciones = () => {
    const context = useContext(contextMedicion);
    return context;
};

export const MedicionProvider = ({ children }) => {
    const [estanques, setEstanques] = useState([]);

    const getEstanques = async () => {
        const result = await getEstanquesRequest();
        setEstanques(result.data);
    };

    const getEstanque = async (id) => {
        const result = await getEstanqueByIdRequest(id);
        return result.data;
    };

    const createEstanque = async (estanque) => {
        const res = await createEstanqueRequest(estanque);
        console.log(res.data);
        setEstanques([...estanques, res.data]);
    };

    const deleteEstanque = async (id) => {
        await deleteEstanqueRequest(id);
        setEstanques(estanques.filter((estanque) => estanque._id !== id));
    };

    const updateEstanque = async (id, estanque) => {
        await updateEstanqueRequest(id, estanque);
        const result = await getEstanquesRequest();
        setEstanques(result.data);
    };

    const getMediciones = async (id) => {
        const result = await getEstanqueByIdRequest(id);
        return result.data;
        //setDetalles(mediciones.filter((med) => med.mediciones));
        //setDetalles(mediciones.map((med) => med.mediciones));
    };

    const getDetalle = async (id) => {
        const result = await getEstanqueByIdRequest(id);
        return result.data.mediciones;
        /* const allMediciones = mediciones.map((med) => med.mediciones);
        console.log(allMediciones[0]);
        const datos = allMediciones[0].map((med) => med);
        console.log(datos);
        setDetalles(datos); */
    };

    const createMediciones = async (estanque) => {
        await crearMedicionRequest(estanque);
        const result = await getEstanquesRequest();
        setEstanques(result.data);
    };

    useEffect(() => {
        getEstanques();
    }, []);

    return (
        <contextMedicion.Provider
            value={{
                estanques,
                getEstanques,
                getEstanque,
                createEstanque,
                deleteEstanque,
                updateEstanque,
                getMediciones,
                createMediciones,
                getDetalle,
            }}
        >
            {children}
        </contextMedicion.Provider>
    );
};
