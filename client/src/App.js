import { NavLink } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Sidebar from "./layout/Sidebar/Sidebar";
import Contenido from "./layout/contenido/Contenido";

const App = () => {
    return (
        <Row className="App">
            <div className="dashboard d-flex">
                <div>
                    <Sidebar />
                </div>
                <div
                    style={{
                        flex: "1 1 auto",
                        display: "flex",
                        flexFlow: "column",
                        height: "100vh",
                        overflowY: "hidden",
                        marginTop: "25px",
                        marginLeft: "25px",
                    }}
                >
                    <div style={{ height: "100%" }}>
                        <div
                            style={{
                                height: "calc(100% - 64px)",
                                overflowY: "auto",
                            }}
                        >
                            <div className="card-section col-md-12">
                                <Contenido />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Row>
    );
};

export default App;
