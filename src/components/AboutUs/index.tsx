import { useEffect, useState } from "react";
import styled from "styled-components";

import Container from "components/layout/container";
import getInfoAboutUs from "api/getAboutUs";

interface Props {
  className?: string;
}

interface About {
  imagenNosotros: {
    fields: {
      title: string;
      file: string;
    };
  };
  nosotrosSection: {
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

  return (
    <Container className={props.className}>
      <p className="red">{infoAbout?.imagenNosotros.fields.title}dasdasd</p>
      <p className="red">
        {infoAbout?.nosotrosSection.content[0].content[0].value}
      </p>
    </Container>
  );
}

export default styled(AboutUs)`
  color: red;
`;
