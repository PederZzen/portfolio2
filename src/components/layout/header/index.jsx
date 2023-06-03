import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./style";

const Header = () => {
  return (
    <Wrapper className="maxWidth">
      <div>
        <Link to="/">Espen Holm Pedersen</Link>
      </div>
      <div id="menu">
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </Wrapper>
  );
};

export default Header;
