import { black, redColor, white } from "constants/styles";
import { ReactNode } from "react";
import AccordionBootstrap from "react-bootstrap/Accordion";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  title: string;
  className?: string;
  eventKey: string;
}
function Accordion(props: Props) {
  return (
    <AccordionBootstrap className={props.className} defaultActiveKey="0">
      <AccordionBootstrap.Item eventKey={props.eventKey}>
        <AccordionBootstrap.Header>{props.title}</AccordionBootstrap.Header>
        <AccordionBootstrap.Body>{props.children}</AccordionBootstrap.Body>
      </AccordionBootstrap.Item>
    </AccordionBootstrap>
  );
}

export default styled(Accordion)`
  .accordion-button {
    color: ${redColor};

    font-weight: 500;
    background-color: ${black};
  }
  .accordion-item {
    background-color: ${black};
    color: ${white};
    text-align: left;
    border: none;
    font-size: 21px;
  }
`;
