import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMediciones } from "../../context/medicionContext";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Moment from "react-moment";

function ListaMediciones() {
    const { getMediciones, getDetalle } = useMediciones();
    const [oneEstanque, setOneEstanque] = useState([]);
    const [allMediciones, setAllMediciones] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            (async () => {
                const result = await getMediciones(params.id);
                setOneEstanque(result);
                const res = await getDetalle(params.id);
                setAllMediciones(res);
                //const res = await getEstanque(params.id);
                //setMediciones(res);
            })();
        }
    }, []);

    console.log(oneEstanque);
    console.log(allMediciones);

    return (
        <Container>
            <Row col={12}>
                <Alert
                    key="info"
                    variant="info"
                    className="d-flex justify-content-around "
                >
                    <h3>
                        {oneEstanque.faena} {oneEstanque.nombre}{" "}
                        {oneEstanque.capacidad}
                    </h3>
                    <Button
                        className="btn btn-primary text-white"
                        onClick={() => navigate(`/mediciones/`)}
                    >
                        Crear nueva medición
                    </Button>
                </Alert>
                {/* <Table
                    responsive
                    bordered
                    className="table mt-3 mb-5 text-center"
                >
                    <tbody>
                        <tr key={oneEstanque._id}>
                            <td>
                                <h3>{oneEstanque.faena}</h3>
                            </td>
                            <td>
                                <h3>{oneEstanque.nombre}</h3>
                            </td>
                            <td>
                                <h3>{oneEstanque.capacidad}</h3>
                            </td>
                            <td>
                                <h3></h3>
                            </td>
                        </tr>
                    </tbody>
                </Table> */}
            </Row>
            {allMediciones.length > 0 ? (
                <Row>
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Volumen</th>
                                <th>Temperatura</th>
                                <th>API</th>
                            </tr>
                        </thead>

                        <tbody>
                            {allMediciones.map((elemento, index) => (
                                <tr key={elemento._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <Moment format="DD/MM/YYYY">
                                            {elemento.fecha}
                                        </Moment>
                                    </td>
                                    <td>
                                        <Moment format="HH:MM:SS">
                                            {elemento.fecha}
                                        </Moment>
                                    </td>
                                    <td>{elemento.volumen.$numberDecimal}</td>
                                    <td>
                                        {elemento.temperatura.$numberDecimal}
                                    </td>
                                    <td>{elemento.api.$numberDecimal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            ) : (
                <Alert key="danger" variant="danger">
                    No existen registros de mediciones
                </Alert>
            )}
        </Container>
    );
}

export default ListaMediciones;
