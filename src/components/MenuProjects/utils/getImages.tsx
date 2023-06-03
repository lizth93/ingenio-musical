import { ReactSVG } from "react-svg";
import Button from "components/button";
import { Data } from "../interfaces";

export const getImages = (data: Data | undefined, buttonName: string) => {
  const optionsImage = data?.menuOptions.map((opt) => (
    <div className="menu" key={opt.fields.title}>
      <ReactSVG
        src={opt.fields.file.url}
        className="menu-img menu-img-contact"
      />
      <p className="menu-title">{opt.fields.title}</p>
      <Button
        className=" menu-btn-options menu-contact-btn"
        key={opt.fields.title}
        variant="outline-light"
      >
        <span className="btn-contact-opt">{buttonName}</span>
      </Button>
    </div>
  ));

  return optionsImage;
};
