import styled from "styled-components";
import Contact from "./component";
import { black, darkBlue, redColor, white } from "constants/styles";

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

  .menu {
    display: flex;
    gap: 2rem;

    &-title {
      text-align: left;
      font-size: 1.8rem;
    }

    &-img-contact {
      fill: ${redColor};
      height: auto;
    }

    &-schedule {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
    }
    &-info {
      padding: 1.5rem;
      background-color: ${black};
      border-radius: 15px;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  .section-container {
    padding: 1.5rem;
    background-color: ${black};
    border-radius: 15px;
  }

  .contact-data {
    display: flex;
    gap: 2rem;
    justify-content: center;
  }
  .schedule {
    gap: 2rem;
    padding: 1.5rem;
    display: flex;
    border-radius: 15px;
    background-color: ${black};
  }

  .menu-img-contact svg {
    width: 60px;
    height: 60px;
  }
  .form-control {
    font-size: 1.6rem;
    background: black;
    color: white;
  }
  textarea.form-control {
    font-size: 1.6rem;
    background-color: #181a1b;
  }

  .menu-btn-options {
    border-radius: 50px;
  }
  .btn-contact-opt {
    font-size: 1.5rem;
  }
`;
