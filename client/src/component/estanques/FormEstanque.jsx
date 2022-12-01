import { useEffect, useState } from "react";
import { Formik } from "formik";
import { useNavigate, useParams, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as Yup from "yup";
import { useMediciones } from "../../context/medicionContext";

function FormEstanque() {
    const { createEstanque, getEstanque, updateEstanque } = useMediciones();
    const navigate = useNavigate();
    const [iniValues, setIniValues] = useState({
        faena: "",
        nombre: "",
        capacidad: "",
    });
    const [titulo, setTitulo] = useState("Nueva Estanque");
    const [btnAtualizar, setBtnAtualizar] = useState();
    const [btnNuevo, setBtnNuevo] = useState("Crear nuevo");
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            setTitulo("Actualizar Estanque");
            setBtnAtualizar(
                <Link to="/estanques" className="btn btn-success text-white">
                    Nuevo Estanque
                </Link>
            );
            setBtnNuevo("Actualizar");
            (async () => {
                const res = await getEstanque(params.id);
                console.log(params.id);
                setIniValues(res);
            })();
        } else {
            setTitulo("Nuevo Estanque");
            setBtnNuevo("Crear nuevo");
            setBtnAtualizar();
            setIniValues({
                faena: "",
                nombre: "",
                capacidad: "",
            });
        }
    }, [params]);

    useEffect(() => {}, []);
    const validation = Yup.object({
        faena: Yup.string().required("La faena es requerido"),
        nombre: Yup.string().required("El nombre es requerido"),
        capacidad: Yup.number().required("La capacidad es requerida"),
    });
    return (
        <Container className="dashboard mb-5 card-bg">
            <Row className="pt-2 pb-4 justify-content-md-center">
                <Col lg={6} md={12}>
                    <h3 className="mb-5">{titulo}</h3>
                    <Formik
                        initialValues={iniValues}
                        validationSchema={validation}
                        onSubmit={async (
                            values,
                            { setSubmitting, resetForm }
                        ) => {
                            setSubmitting(true);
                            if (params.id) {
                                await updateEstanque(params.id, values);
                                navigate("/estanques");
                            } else {
                                await createEstanque(values);
                            }
                            resetForm();
                            setSubmitting(false);
                        }}
                        enableReinitialize={true}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <Form
                                onSubmit={handleSubmit}
                                className="align-items-center"
                            >
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Faena
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="faena"
                                                placeholder="Ingrese faena es requerido"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.faena}
                                                className={`${
                                                    touched.faena &&
                                                    errors.faena
                                                        ? "error"
                                                        : null
                                                }`}
                                                isInvalid={!!errors.faena}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.faena}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Nombre
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="nombre"
                                                placeholder="Ingrese nombre estanque"
                                                onChange={handleChange}
                                                onBlur={(e) => handleBlur}
                                                value={values.nombre}
                                                className={`${
                                                    touched.nombre &&
                                                    errors.nombre
                                                        ? "error"
                                                        : null
                                                }`}
                                                isInvalid={!!errors.nombre}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.nombre}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Capacidad
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="capacidad"
                                                placeholder="Ingrese capacidad del estanque"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.capacidad}
                                                isInvalid={!!errors.capacidad}
                                                className={`${
                                                    touched.capacidad &&
                                                    errors.capacidad
                                                        ? "error"
                                                        : null
                                                }`}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.capacidad}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Form.Group className="d-flex justify-content-around">
                                    <Button
                                        className="btn btn-primary"
                                        type="submit"
                                    >
                                        {btnNuevo}
                                    </Button>
                                    {btnAtualizar}
                                </Form.Group>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
}

export default FormEstanque;
