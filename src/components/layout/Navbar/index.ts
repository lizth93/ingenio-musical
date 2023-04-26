import styled from "styled-components";
import Navbar from "./component";

export default styled(Navbar)`
  .navbar-brand {
    color: #fff;
  }

  #basic-nav-dropdown {
    color: #fff;

    &:hover {
      color: var(--bs-btn-hover-color);
    }
  }
  .btn-outline-light {
    --bs-btn-padding-y: 0;
    border-radius: 30px;
  }

  .navbar-nav {
    gap: 1rem;
  }
`;
