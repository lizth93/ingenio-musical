import styled from "styled-components";
import AboutUs from "./component";
import { white } from "constants/styles";

export default styled(AboutUs)`
  color: ${white};
  padding: 6rem 0 6rem 0;
  width: 90%;

  .section-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
  }

  .about {
    &-description {
      display: flex;
      gap: 4rem;
      justify-content: center;
    }
    &-title {
      text-align: initial;
      font-weight: 800;
      font-size: 5rem;
    }

    &-paragraph {
      font-size: 2rem;
      text-align: initial;
    }
    &-img {
      width: 50%;
      border-radius: 4px;
    }
  }

  .btn-link-more {
    color: #945dff;
    padding-left: 3rem;
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #a97dff;
    }
  }
`;
