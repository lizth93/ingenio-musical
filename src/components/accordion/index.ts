import styled from "styled-components";
import AccordionBootstrap from "./component";
import { black, redColor, white } from "constants/styles";

export default styled(AccordionBootstrap)`
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
