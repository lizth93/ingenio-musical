import styled from "styled-components";
import Navbar from "./component";
import { redColor } from "constants/styles";

export default styled(Navbar)`
  .container-navbar {
    align-items: center;
  }
  .navbar-brand {
    color: #fff;
    display: flex;
  }
  .logo-icon {
    width: 30px;
    height: 30px;
    fill: ${redColor};
    margin-right: 10px;
  }
  .home-icon {
    fill: ${redColor};
    width: 35px;
    height: 35px;
  }

  #basic-nav-dropdown {
    color: #fff;
    padding: 5px;

    &:hover {
      color: #fff;
    }
  }
  .btn-outline-light {
    --bs-btn-padding-y: 0;
    border-radius: 30px;
  }

  .navbar-nav {
    gap: 1rem;
  }

  .btn {
    &:active {
      background-color: ${redColor};
    }

    &:hover {
      color: #fff;
      background-color: ${redColor};
      border-color: var(--bs-btn-hover-border-color);
    }
  }

  .dropdown-menu-dark {
    --bs-dropdown-color: #dee2e6;
    --bs-dropdown-bg: rgb(8, 8, 18);
  }
`;
