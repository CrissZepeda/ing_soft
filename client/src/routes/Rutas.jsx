import { useRoutes } from "react-router-dom";
import Inicio from "../page/Inicio";
import Estanque from "../page/Estanque";
import Mediciones from "../page/Mediciones";
import ListaMediciones from "../component/mediciones/ListaMediciones";

const ruta = [
    {
        path: "/",
        element: <Inicio />,
    },
    {
        path: "/estanques",
        element: <Estanque />,
    },
    {
        path: "/estanques/:id",
        element: <Estanque />,
    },
    {
        path: "/mediciones",
        element: <Mediciones />,
    },
    {
        path: "/mediciones/:id",
        element: <ListaMediciones />,
    },
    {
        path: "*",
        element: <Inicio />,
    },
];

function Rutas() {
    const element = useRoutes(ruta);
    return <div>{element}</div>;
}

export default Rutas;
