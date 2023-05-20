import styled from "styled-components";
import MoreAboutUs from "./component";
import { white } from "constants/styles";

export default styled(MoreAboutUs)`
  color: ${white};
  padding: 0rem 5rem 6rem 5rem;
  line-height: 2.5rem;
  font-size: 1.8rem;
  font-weight: 400;
  width: 100%;
  text-align: left;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  .accordion-section {
    padding: 6rem 5rem 6rem 5rem;
  }
  .accordion {
    &-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      justify-content: center;
    }
    &-button {
      font-weight: 400;
      font-size: 1.5rem;
    }
    &-body {
      font-weight: 400;
    }
  }
`;
