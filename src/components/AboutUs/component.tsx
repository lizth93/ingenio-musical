import { useEffect, useState } from "react";

import imgNosotros from "defaultImages/daniel-working.png";
import Container from "components/layout/container";
import getInfoAboutUs from "api/getAboutUs";
import Button from "components/button";

interface Props {
  className?: string;
}

interface About {
  nosotrosTitle: string;
  imagenNosotros: {
    fields: {
      title: string;
      file: { url: string; title: string };
    };
  };
  description: {
    content: Array<{
      content: Array<{
        value: string;
      }>;
    }>;
  };
}

function AboutUs(props: Props) {
  const [infoAbout, setInfoAbout] = useState<About>();

  useEffect(() => {
    async function loadInfoAboutUs() {
      const data = await getInfoAboutUs();
      setInfoAbout(data);
      console.log(data, "data luz ");
    }
    loadInfoAboutUs();
  }, []);

  const title = infoAbout?.nosotrosTitle
    ? infoAbout?.nosotrosTitle
    : "NOSOTROS";

  const firstLetter = title.substring(0, 1);
  const secondLetter = title.substring(1, 2);
  const restOfTitle = title.substring(2);

  const paragraph = infoAbout?.description.content[0].content[0].value
    ? infoAbout.description.content[0].content[0].value
    : "Ingenio Musical hace parte de la Industria creativa musical. Contamos con un estudio de grabación y post producción de audio.";

  const url = infoAbout?.imagenNosotros.fields.file.url
    ? infoAbout?.imagenNosotros.fields.file.url
    : imgNosotros;
  return (
    <Container className={props.className}>
      <div className="about-description" id="action-0">
        <section className="section-container">
          <h2 className="about-title">
            {firstLetter}
            <span style={{ color: "red" }}>{secondLetter}</span>
            {restOfTitle}
          </h2>
          <p className="about-paragraph">
            {paragraph}{" "}
            <a className="btn-link-more" href="#more">
              VER MÁS
            </a>
          </p>
        </section>
        <img className="about-img" src={url} alt={title} />
      </div>
    </Container>
  );
}

export default AboutUs;
