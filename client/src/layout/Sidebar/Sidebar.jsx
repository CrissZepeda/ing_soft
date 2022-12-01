import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from "cdbreact";

import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                overflow: "scroll initial",
            }}
        >
            <CDBSidebar textColor="#fff" backgroundColor="#282c34">
                <CDBSidebarHeader
                    style={{ textAlign: "center" }}
                    prefix={<i className="fa fa-bars fa-large"></i>}
                >
                    <NavLink
                        style={{ textDecoration: "none", color: "white" }}
                        exact="true"
                        to="/"
                    >
                        Dashboard
                    </NavLink>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact="true" to="/estanques">
                            <CDBSidebarMenuItem icon="columns">
                                Estanques
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact="true" to="/mediciones">
                            <CDBSidebarMenuItem icon="table">
                                Mediciones
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
}

export default Sidebar;
