import { ClassName } from "Interfaces";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

function Navbar(props: ClassName) {
  return (
    <NavbarBootstrap className={props.className} bg="dark" expand="lg">
      <Container className="container-navbar">
        <NavbarBootstrap.Brand href="#home">
          Fundación Artistica Ingenio Musical
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Button variant="outline-light">
              <NavDropdown title="Nosotros" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Nosotros</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Button>

            <Button variant="outline-light">Servicios</Button>
            <Button variant="outline-light">Contacto</Button>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export default Navbar;
