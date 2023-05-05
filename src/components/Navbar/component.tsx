import { ClassName } from "Interfaces";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import getBasicInformation from "api/getBasicInformation";

function Navbar(props: ClassName) {
  const [basicInfo, setBasicInfo] = useState<any>([]);
  const [dropdown, setDropdown] = useState<string>("NOSOTROS");

  useEffect(() => {
    async function loadInfo() {
      const basicInfo = await getBasicInformation();
      setBasicInfo(basicInfo);
    }
    loadInfo();
  }, []);

  useEffect(() => {
    if (basicInfo && basicInfo.navbarOptions) {
      const dropdownOpt = basicInfo.navbarOptions[0]
        ? basicInfo?.navbarOptions[0]
        : "NOSOTROS";

      setDropdown(dropdownOpt);
    }
  }, [basicInfo]);

  const defaultNavbarOpt = ["NOSOTROS", "SERVICIOS", "CONTACTO"];
  const defaultDropdown = ["Misión/Vision", "Fotografía y Video", "Proyectos"];

  return (
    <NavbarBootstrap className={props.className} expand="lg">
      <Container className="container-navbar">
        <NavbarBootstrap.Brand href="#home">
          <svg
            className="logo-icon"
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
          </svg>
          {basicInfo?.companyName
            ? basicInfo?.companyName
            : "FUNDACIÓN ARTÍSTICA INGENIO MUSICAL LUZ"}
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
                title={dropdown}
                id="basic-nav-dropdown"
                menuVariant="dark"
              >
                {basicInfo &&
                  basicInfo.dropdownOptions &&
                  basicInfo.dropdownOptions.map((opt: string, i: number) => {
                    return (
                      <NavDropdown.Item key={i} href={`#action/3.${i + 1}`}>
                        {opt}
                      </NavDropdown.Item>
                    );
                  })}

                {!basicInfo &&
                  defaultDropdown.map((opt: string, i: number) => {
                    return (
                      <NavDropdown.Item key={i} href={`#action/3.${i + 1}`}>
                        {opt}
                      </NavDropdown.Item>
                    );
                  })}
              </NavDropdown>
            </Button>
            {basicInfo &&
              basicInfo.navbarOptions &&
              basicInfo.navbarOptions.map((opt: string, i: number) => {
                return i === 0 ? null : (
                  <Button
                    className="btn-navbar"
                    key={i}
                    variant="outline-light"
                  >
                    {opt}
                  </Button>
                );
              })}

            {!basicInfo &&
              defaultNavbarOpt.map((opt: string, i: number) => {
                return i === 0 ? null : (
                  <Button
                    key={i}
                    className="btn-navbar"
                    variant="outline-light"
                  >
                    {opt}
                  </Button>
                );
              })}
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export default Navbar;
