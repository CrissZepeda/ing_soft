import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useMediciones } from "../context/medicionContext";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {
    BsPencilSquare,
    BsFillTrashFill,
    BsFillFileEarmarkTextFill,
} from "react-icons/bs";

function Inicio() {
    const { estanques, deleteEstanque, getMediciones } = useMediciones();
    const navigate = useNavigate();

    const eliminarEstanque = (id) => {
        toast((t) => (
            <div>
                <Alert variant="info">
                    <span className="fw-bold">
                        ¿Esta seguro que desea eliminar?
                    </span>
                </Alert>
                <div className="d-flex justify-content-around">
                    <button
                        className="btn btn-primary"
                        onClick={() => toast.dismiss(t.id)}
                    >
                        Cancelar
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            deleteEstanque(id);
                            toast.dismiss(t.id);
                            toast.success("¡Eliminado con exito!", {
                                className: "foo-bar",
                            });
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        ));
    };

    if (!estanques) {
        return (
            <Alert key="danger" variant="danger">
                No existen registros
            </Alert>
        );
    }
    return (
        <Container className="dashboard mb-5">
            <Table responsive hover className="table mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>FAENA</th>
                        <th>NOMBRE</th>
                        <th>CAPACIDAD</th>
                        <th></th>
                    </tr>
                </thead>
                {estanques.map((estanque, index) => (
                    <tbody key={estanque._id}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{estanque.faena}</td>
                            <td>{estanque.nombre}</td>
                            <td>{estanque.capacidad}</td>

                            <td className="d-flex justify-content-around">
                                <Button
                                    className="btn btn-primary text-white"
                                    variant="contained"
                                    color="warning"
                                    onClick={() => {
                                        getMediciones(estanque._id);
                                        navigate(`/mediciones/${estanque._id}`);
                                    }}
                                >
                                    <BsFillFileEarmarkTextFill />
                                </Button>
                                <Button
                                    className="btn btn-warning text-white"
                                    variant="contained"
                                    color="warning"
                                    onClick={() =>
                                        navigate(`/estanques/${estanque._id}`)
                                    }
                                >
                                    <BsPencilSquare />
                                </Button>
                                <Button
                                    className="btn btn-danger text-white"
                                    variant="contained"
                                    color="error"
                                    onClick={() =>
                                        eliminarEstanque(estanque._id)
                                    }
                                >
                                    <BsFillTrashFill />
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </Container>
    );
}

export default Inicio;
