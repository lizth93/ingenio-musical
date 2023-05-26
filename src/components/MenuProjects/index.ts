import styled from "styled-components";
import MenuProjects from "./component";
import { darkBlue, redColor, white } from "constants/styles";

export default styled(MenuProjects)`
  padding: 0rem 5rem 6rem 5rem;
  color: ${white};
  line-height: 2.5rem;
  font-size: 1.8rem;
  text-align: left;
  min-height: 800px;

  .section-projects {
    background-color: ${darkBlue};
    padding: 6rem 5rem 6rem 5rem;
    min-height: 700px;
  }
  .menu {
    align-items: center;
    text-align: center;
    display: grid;
    grid-template-rows: 1.5fr 1fr;
    &-options {
      gap: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: self-end;
    }

    &-img svg {
      width: 150px;
      height: 150px;
      fill: ${redColor};
    }

    &-title {
      margin: 0;
    }

    &-btn-options {
      width: fit-content;
      justify-self: center;
      border-radius: 30px;
      background-color: #4300a7;
      &:hover {
        background-color: #410086;
        color: ${white};
      }
    }
  }
`;
