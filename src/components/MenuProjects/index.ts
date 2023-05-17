import styled from "styled-components";
import MenuProjects from "./component";
import { darkBlue, redColor, white } from "constants/styles";

export default styled(MenuProjects)`
  background-color: ${darkBlue};
  padding: 6rem 5rem 6rem 5rem;
  color: ${white};

  .menu {
    &-options {
      display: flex;
    }

    &-img svg {
      width: 24px;
      height: 24px;
      fill: ${redColor};
    }
  }
`;
