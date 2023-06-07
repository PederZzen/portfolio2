import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, Wrapper } from "./style";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useWindowWidth from "../../../hooks/useWindowWidth";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const { windowWidth } = useWindowWidth();

  const toggleMenu = () => {
    setMobile(!mobile);
  };

  return (
    <Wrapper className="maxWidth">
      <div>
        <Link to="/">Espen Holm Pedersen</Link>
      </div>
      {windowWidth < 550 ? <MenuIcon icon={faBars} onClick={toggleMenu} /> : ""}
      {mobile || windowWidth > 550 ? (
        <div id="menu">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      ) : null}
    </Wrapper>
  );
};

export default Header;
