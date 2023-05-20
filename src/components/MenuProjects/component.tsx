import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import getProjects from "api/getProjects";
import Container from "components/layout/container";
import { dummyDescriptionProjects } from "constants/dummyData";
import { Projects, Props } from "./interfaces";
import Button from "components/button";

export default function MenuProjects(props: Props) {
  const [projects, setProjects] = useState<Projects>();

  useEffect(() => {
    async function loadInfoProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    loadInfoProjects();
  }, []);

  const description = projects?.description.content;

  const textDescription = description?.map((d) =>
    d.content.map((text) => <p key={text.value}>{text.value}</p>)
  );

  const buttonProjects = projects?.nameButtons
    ? projects?.nameButtons[0]
    : "VER PROYECTOS";
  const optionsImage = projects?.menuOptions.map((opt) => (
    <div className="menu" key={opt.fields.title}>
      <ReactSVG src={opt.fields.file.url} className="menu-img" />
      <p className="menu-title">{opt.fields.title}</p>
      <Button
        className="btn-navbar menu-btn-options"
        key={opt.fields.title}
        variant="outline-light"
      >
        <span className="btn-navbar-opt">{buttonProjects}</span>
      </Button>
    </div>
  ));

  return (
    <Container className={props.className}>
      <div className="section-projects" id={"action-2"}>
        {textDescription ? textDescription : dummyDescriptionProjects}
        <menu className="menu-options">{optionsImage}</menu>
      </div>
    </Container>
  );
}
