import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface Props {
  className: string;
}
function ContactForm(props: Props) {
  return (
    <Form className={props.className}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="name" placeholder="ESCRIBE TU NOMBRE " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="celular" placeholder="CELULAR " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="EMAIL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="COMPARTE TU MENSAJE"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default ContactForm;
