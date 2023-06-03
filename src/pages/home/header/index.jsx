import React from "react";
import computerImage from "./media/computer.svg";
import { Wrapper } from "./style";

const Header = () => {
  return (
    <Wrapper>
      <div className="copy">
        <h1>
          Hi, i'm <span>Espen</span>
          <br />
          Frontend Developer
        </h1>
      </div>
      <div>
        <img src={computerImage} alt="Image of a computer" />
      </div>
    </Wrapper>
  );
};

export default Header;
