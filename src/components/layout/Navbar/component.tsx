import { ClassName } from "Interfaces";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

function Navbar(props: ClassName) {
  return (
    <NavbarBootstrap className={props.className} expand="lg">
      <Container className="container-navbar">
        <NavbarBootstrap.Brand href="#home">
          <svg
            className="logo-icon"
            clipRule="evenodd"
            fillRule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
          </svg>
          FUNDACIÓN ARTÍSTICA INGENIO MUSICAL
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <svg
              className="home-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z" />
            </svg>
            <Button className="btn-navbar" variant="outline-light">
              <NavDropdown
                title="NOSOTROS"
                id="basic-nav-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Historia</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Misión/Vision
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Fotogragía y Video
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Proyectos
                </NavDropdown.Item>
              </NavDropdown>
            </Button>

            <Button className="btn-navbar" variant="outline-light">
              SERVICIOS
            </Button>
            <Button className="btn-navbar" variant="outline-light">
              CONTACTO
            </Button>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export default Navbar;
