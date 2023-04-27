import { useEffect, useState } from "react";
import CarouselBootstrap from "react-bootstrap/Carousel";
import getImages from "api/getImages";

function Carousel() {
  const [images, setImages] = useState<any>([]);

  useEffect(() => {
    async function loadImages() {
      const urls = await getImages();
      setImages(urls);
    }
    loadImages();
  }, []);

  return (
    <CarouselBootstrap>
      {images.map((url: string) => (
        <CarouselBootstrap.Item key={url}>
          <img className="d-block w-100" src={url} alt="" />
          <CarouselBootstrap.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CarouselBootstrap.Caption>
        </CarouselBootstrap.Item>
      ))}
    </CarouselBootstrap>
  );
}

export default Carousel;
