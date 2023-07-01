import Container from "components/layout/container";
import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";
import getContact from "api/getContact";
import { ContactProps, getData } from "./getData";
import { ReactSVG } from "react-svg";

export interface Props {
  className?: string;
}

export default function Contact(props: Props) {
  const [contact, setContact] = useState<ContactProps>();
  useEffect(() => {
    async function loadInfoContact() {
      const data = await getContact();
      setContact(data);
    }
    loadInfoContact();
  }, []);

  const title = contact?.title ? contact?.title : "CONTACTO";
  const schedule = contact?.schedule
    ? contact?.schedule.fields.description
    : "Horario:7:00 a. m. a 9:00 p. m.";

  const firstLetter = title.substring(0, 1);
  const secondLetter = title.substring(1, 2);
  const restOfTitle = title.substring(2);

  const contactData = getData(contact);

  return (
    <Container className={props.className} id="section-2">
      <h2 className="contact-title">
        {firstLetter}
        <span style={{ color: "red" }}>{secondLetter}</span>
        {restOfTitle}
      </h2>
      <div className="contact-data">
        <div className="menu-schedule">
          {contact && (
            <div className="schedule">
              <ReactSVG
                src={contact.schedule.fields.file.url}
                className="menu-img-contact"
              />
              <p className="menu-title">{schedule}</p>
            </div>
          )}

          <ContactForm className="section-container" />
        </div>

        <div className="menu-info">{contactData}</div>
      </div>
    </Container>
  );
}
