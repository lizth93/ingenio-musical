import { ReactNode } from "react";
import AccordionBootstrap from "react-bootstrap/Accordion";

interface Props {
  children: ReactNode;
  title: string;
  className?: string;
  eventKey: string;
}
export default function Accordion(props: Props) {
  return (
    <AccordionBootstrap className={props.className} defaultActiveKey="0">
      <AccordionBootstrap.Item eventKey={props.eventKey}>
        <AccordionBootstrap.Header>{props.title}</AccordionBootstrap.Header>
        <AccordionBootstrap.Body>{props.children}</AccordionBootstrap.Body>
      </AccordionBootstrap.Item>
    </AccordionBootstrap>
  );
}
