import styled from "styled-components";
import MoreAboutUs from "./component";
import { white } from "constants/styles";

export default styled(MoreAboutUs)`
  color: ${white};
  padding: 6rem 5rem 6rem 5rem;
  font-size: 1.2rem;
  width: 100%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  .accordion-container {
    display: grid;
    gap: 2rem;
    justify-content: center;
    display: flex;
  }
`;
