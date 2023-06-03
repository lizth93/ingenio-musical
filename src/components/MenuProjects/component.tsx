import { useEffect, useState } from "react";
import getProjects from "api/getProjects";
import Container from "components/layout/container";
import { dummyDescriptionProjects } from "constants/dummyData";
import { Data } from "./interfaces";
import Carousel from "react-bootstrap/Carousel";
import getServices from "api/getServices";
import { getImages } from "./utils/getImages";
import { getButtonName } from "./utils/getButtonName";
import { getDescriptionContent } from "./utils/getDescription";

export interface Props {
  className?: string;
  activeIndex: number;
  onSetActiveIndex: (index: number) => void;
}

export default function MenuProjects(props: Props) {
  const [projects, setProjects] = useState<Data>();
  const [services, setServices] = useState<Data>();

  useEffect(() => {
    async function loadInfoProjects() {
      const dataProjects = await getProjects();
      setProjects(dataProjects);

      const dataServices = await getServices();
      setServices(dataServices);
    }
    loadInfoProjects();
  }, []);

  const textDescriptionProjects = getDescriptionContent(
    projects?.description.content
  );
  const textDescriptionServices = getDescriptionContent(
    services?.description.content
  );

  const buttonProjects = getButtonName(projects?.nameButtons, "VER PROYECTOS");
  const buttonServices = getButtonName(services?.nameButtons, "VER MAS");

  const imagesProjects = getImages(projects, buttonProjects);
  const imagesServices = getImages(services, buttonServices);

  const numItems = document.querySelectorAll(
    ".carousel-menu .carousel-item"
  ).length;

  const activatedIndex =
    props.activeIndex >= numItems ? numItems - 1 : props.activeIndex;

  const handleActiveIndex = (index: number) => {
    props.onSetActiveIndex(index);
  };

  return (
    <Container className={props.className} id={"carousel-menu"}>
      <Carousel
        fade
        className="carousel-menu"
        interval={null}
        activeIndex={activatedIndex}
        onSelect={handleActiveIndex}
      >
        <Carousel.Item>
          <div className="section-projects">
            <h2>{projects?.titleOptional ? projects?.titleOptional : ""}</h2>
            {textDescriptionProjects
              ? textDescriptionProjects
              : dummyDescriptionProjects}
            <menu className="menu-options">{imagesProjects}</menu>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="section-projects">
            <h2>{services?.titleOptional ? services?.titleOptional : ""}</h2>
            {textDescriptionServices ? textDescriptionServices : ""}
            <menu className="menu-options">{imagesServices}</menu>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
