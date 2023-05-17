import { ReactSVG } from "react-svg";
import getProjects from "api/getProjects";
import Container from "components/layout/container";
import { dummyDescriptionProjects } from "constants/dummyData";
import { useEffect, useState } from "react";
import { Projects, Props } from "./interfaces";

export default function MenuProjects(props: Props) {
  const [projects, setProjects] = useState<Projects>();

  useEffect(() => {
    async function loadInfoProjects() {
      const data = await getProjects();
      setProjects(data);
      console.log(data, "projects");
    }
    loadInfoProjects();
  }, []);

  const description = projects?.description.content;

  const textDescription = description?.map((d) =>
    d.content.map((text) => <p key={text.value}>{text.value}</p>)
  );

  const optionsImage = projects?.menuOptions.map((opt) => (
    <div className="menu-options" key={opt.fields.title}>
      <ReactSVG src={opt.fields.file.url} className="menu-img" />
      <p>{opt.fields.title}</p>
    </div>
  ));

  console.log(description, "hola");
  return (
    <Container className={props.className}>
      {textDescription ? textDescription : dummyDescriptionProjects}
      {optionsImage}
    </Container>
  );
}
