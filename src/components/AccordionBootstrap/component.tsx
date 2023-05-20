import { ReactNode } from "react";
import { Accordion } from "react-bootstrap";

interface Props {
  children: ReactNode;
  title: string;
  className?: string;
  eventKey: string;
}
export default function AccordionBootstrap(props: Props) {
  return (
    <Accordion className={props.className} defaultActiveKey="0">
      <Accordion.Item eventKey={props.eventKey}>
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>{props.children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
