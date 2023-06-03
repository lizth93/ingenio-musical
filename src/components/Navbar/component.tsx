import { ClassName } from "Interfaces";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import getBasicInformation from "api/getBasicInformation";

function Navbar(
  props: ClassName & { onSetActiveIndex: (index: number) => void }
) {
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
  const defaultDropdown = ["Misión/Visions", "Fotografía y Video", "Proyectos"];

  const navBarDropdownOptions = basicInfo.dropdownOptions
    ? basicInfo.dropdownOptions
    : defaultDropdown;

  const navBarMenuOptions = basicInfo.navbarOptions
    ? basicInfo.navbarOptions
    : defaultNavbarOpt;

  const handleActiveIndex = (index: number, opt: string) => {
    if (opt.toLowerCase() === "proyectos") {
      props.onSetActiveIndex(0);
    } else {
      props.onSetActiveIndex(index);
    }
  };

  return (
    <NavbarBootstrap
      className={props.className}
      expand="lg"
      style={{ position: "fixed", width: "100%", zIndex: 999 }}
    >
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
                {navBarDropdownOptions.map((opt: string, i: number) => {
                  return (
                    <NavDropdown.Item
                      key={i}
                      href={
                        opt.toLowerCase() === "proyectos"
                          ? "#carousel-menu"
                          : `#action-${i}`
                      }
                      onClick={() => handleActiveIndex(i, opt)}
                    >
                      {opt}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Button>
            {navBarMenuOptions.map((opt: string, i: number) => {
              return i === 0 ? null : (
                <Button
                  className="btn-navbar"
                  key={i}
                  variant="outline-light"
                  href={`${
                    opt.toLowerCase() === "servicios"
                      ? "#carousel-menu"
                      : `#section-${i}`
                  }`}
                  onClick={() => handleActiveIndex(i, opt)}
                >
                  <span className="btn-navbar-opt">{opt}</span>
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
