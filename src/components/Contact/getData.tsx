import { ReactSVG } from "react-svg";

export interface ContactInfo {
  fields: {
    description: string;
    file: { url: string };
  };
}
export interface ContactProps {
  title: string;
  contactInfo: ContactInfo[];
}

export const getData = (data: ContactProps | undefined) => {
  const optionsImage = data?.contactInfo.map((opt) => (
    <div className="menu" key={opt.fields.description}>
      <ReactSVG src={opt.fields.file.url} className="menu-img-contact" />
      <p className="menu-title">{opt.fields.description}</p>
    </div>
  ));

  return optionsImage;
};
