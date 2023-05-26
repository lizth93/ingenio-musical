import { ReactSVG } from "react-svg";
import Button from "components/button";
import { Data } from "../interfaces";

export const getImages = (data: Data | undefined, buttonName: string) => {
  const optionsImage = data?.menuOptions.map((opt) => (
    <div className="menu" key={opt.fields.title}>
      <ReactSVG src={opt.fields.file.url} className="menu-img" />
      <p className="menu-title">{opt.fields.title}</p>
      <Button
        className="btn-navbar menu-btn-options"
        key={opt.fields.title}
        variant="outline-light"
      >
        <span className="btn-navbar-opt">{buttonName}</span>
      </Button>
    </div>
  ));

  return optionsImage;
};
