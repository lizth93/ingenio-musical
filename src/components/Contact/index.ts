import styled from "styled-components";
import Contact from "./component";
import { darkBlue, redColor, white } from "constants/styles";

export default styled(Contact)`
  padding: 0rem 5rem 6rem 5rem;
  color: ${white};
  width: 100%;
  font-size: 1.8rem;
  background-color: ${darkBlue};

  .contact-title {
    padding: 6rem 5rem 6rem 5rem;
    display: flex;

    justify-content: center;
    text-align: initial;
    font-weight: 800;
    font-size: 5rem;
  }
  .menu-img-contact {
    width: 150px;
    height: 150px;
    fill: ${redColor};
  }
`;
