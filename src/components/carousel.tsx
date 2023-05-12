import { useEffect, useState } from "react";
import CarouselBootstrap from "react-bootstrap/Carousel";
import getImages from "api/getImages";
import styled from "styled-components";
import Container from "./layout/container";

interface Props {
  className?: string;
}

interface Images {
  title: string;
  description: string;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  };
}

function Carousel(props: Props) {
  const [images, setImages] = useState<Images[] | undefined>([]);

  useEffect(() => {
    async function loadImages() {
      const urls = await getImages();
      setImages(urls);
    }
    loadImages();
  }, []);

  return (
    <Container className={props.className}>
      <CarouselBootstrap>
        {images &&
          images.map((img) => (
            <CarouselBootstrap.Item key={img.file.url}>
              <img className="d-block w-100 image" src={img.file.url} alt="" />
              <CarouselBootstrap.Caption>
                <h3>{img.title}</h3>
                <p>{img.description}</p>
              </CarouselBootstrap.Caption>
            </CarouselBootstrap.Item>
          ))}
      </CarouselBootstrap>
    </Container>
  );
}

export default styled(Carousel)`
  width: 90%;
  .carousel-control-next,
  .carousel-control-prev {
    border-radius: 50px;
    width: fit-content;
    height: fit-content;
    padding: 0.6rem;
    color: red;
    border: brown;
    border: groove;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .carousel-control-next {
    margin-right: 1rem;
  }

  .carousel-control-prev {
    margin-left: 1rem;
  }
`;
