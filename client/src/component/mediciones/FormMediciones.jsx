import { Formik } from "formik";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as Yup from "yup";
import { useMediciones } from "../../context/medicionContext";

function FormMediciones() {
    const { estanques, createMediciones } = useMediciones();
    const iniValues = {
        volumen: "",
        temperatura: "",
        api: "",
        estanque: "",
    };

    const validation = Yup.object({
        volumen: Yup.number().required("El volumen es requerido"),
        temperatura: Yup.number().required("la temperatura es requerida"),
        api: Yup.number().required("El API es requerida"),
        estanque: Yup.string().required("Seleccione un estanque"),
    });
    return (
        <Container className="dashboard mb-5 card-bg">
            <Row className="pt-2 pb-4 justify-content-md-center">
                <Col lg={6} md={12}>
                    <h3 className="mb-5">Ingresar mediciones</h3>
                    <Formik
                        initialValues={iniValues}
                        validationSchema={validation}
                        onSubmit={async (
                            values,
                            { setSubmitting, resetForm }
                        ) => {
                            setSubmitting(true);
                            await createMediciones(values);
                            //navigate("/estanques");
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
                                                Volumen
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="volumen"
                                                placeholder="Ingrese volumen, es requerido"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.volumen}
                                                className={`${
                                                    touched.volumen &&
                                                    errors.volumen
                                                        ? "error"
                                                        : null
                                                }`}
                                                isInvalid={!!errors.volumen}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.volumen}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Temperatura
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="temperatura"
                                                placeholder="Ingrese temperatura"
                                                onChange={handleChange}
                                                onBlur={(e) => handleBlur}
                                                value={values.temperatura}
                                                className={`${
                                                    touched.temperatura &&
                                                    errors.temperatura
                                                        ? "error"
                                                        : null
                                                }`}
                                                isInvalid={!!errors.temperatura}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.temperatura}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                API
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                name="api"
                                                placeholder="Ingrese api del estanque"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.api}
                                                isInvalid={!!errors.api}
                                                className={`${
                                                    touched.api && errors.api
                                                        ? "error"
                                                        : null
                                                }`}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.api}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-center">
                                    <Form.Group as={Col}>
                                        <InputGroup className="mb-4">
                                            <InputGroup.Text>
                                                Estanque
                                            </InputGroup.Text>

                                            <Form.Select
                                                name="estanque"
                                                value={values.estanque}
                                                isInvalid={!!errors.estanque}
                                                onChange={handleChange}
                                                className={`${
                                                    touched.estanque &&
                                                    errors.estanque
                                                        ? "error"
                                                        : null
                                                }`}
                                            >
                                                <option>
                                                    Seleccionar estanque
                                                </option>
                                                {estanques.map((estanque) => (
                                                    <option
                                                        key={estanque._id}
                                                        value={estanque._id}
                                                    >
                                                        {estanque.nombre}
                                                    </option>
                                                ))}
                                            </Form.Select>

                                            <Form.Control.Feedback type="invalid">
                                                {errors.estanque}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Form.Group className="d-flex justify-content-around">
                                    <Button
                                        className="btn btn-primary"
                                        type="submit"
                                    >
                                        Ingresar medición
                                    </Button>
                                </Form.Group>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
}

export default FormMediciones;
