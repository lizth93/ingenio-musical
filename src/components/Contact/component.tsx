import Container from "components/layout/container";
import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";
import getContact from "api/getContact";
import { ContactProps, getData } from "./getData";

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

  console.log(contact, "contact ");

  const title = contact?.title ? contact?.title : "CONTACTO";

  const firstLetter = title.substring(0, 1);
  const secondLetter = title.substring(1, 2);
  const restOfTitle = title.substring(2);

  const contactData = getData(contact);

  return (
    <Container className={props.className}>
      <h2 className="contact-title">
        {firstLetter}
        <span style={{ color: "red" }}>{secondLetter}</span>
        {restOfTitle}
      </h2>
      <div>
        <ContactForm className="section-container" />

        <div>{contactData}</div>
      </div>
    </Container>
  );
}
