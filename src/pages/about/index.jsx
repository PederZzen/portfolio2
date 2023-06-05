import React from "react";
import profileImage from "../../data/media/espen.jpg";
import { Wrapper } from "./style";

const About = () => {
  return (
    <Wrapper className="maxWidth headerStyling">
      <h1>About</h1>
      <span>About</span>
      <div id="content">
        <div>
          Hi my name is Espen. I am a frontend developer from Norway. Hi my name
          is Espen. I am a frontend developer from Norway. Hi my name is Espen.
          I am a frontend developer from Norway. Hi my name is Espen. I am a
          frontend developer from Norway. Hi my name is Espen. I am a frontend
          developer from Norway. Hi my name is Espen. I am a frontend developer
          from Norway. Hi my name is Espen. I am a frontend developer from
          Norway. Hi my name is Espen. I am a frontend developer from Norway. Hi
          my name is Espen. I am a frontend developer from Norway. Hi my name is
          Espen. I am a frontend developer from Norway. Hi my name is Espen. I
          am a frontend developer from Norway.
        </div>
        <div id="media">
          <img src={profileImage} alt="A picture of Espen" />
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
