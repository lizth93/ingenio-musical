import { useEffect, useState } from "react";
import CarouselBootstrap from "react-bootstrap/Carousel";
import getImages from "api/getImages";
import styled from "styled-components";

interface Props {
  className?: string;
}
function Carousel(props: Props) {
  const [images, setImages] = useState<any>([]);

  useEffect(() => {
    async function loadImages() {
      const urls = await getImages();
      setImages(urls);
    }
    loadImages();
  }, []);

  return (
    <CarouselBootstrap className={props.className}>
      {images.map((url: string) => (
        <CarouselBootstrap.Item key={url}>
          <img className="d-block w-100 image" src={url} alt="" />
          <CarouselBootstrap.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CarouselBootstrap.Caption>
        </CarouselBootstrap.Item>
      ))}
    </CarouselBootstrap>
  );
}

export default styled(Carousel)`
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
