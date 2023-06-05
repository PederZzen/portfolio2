import React from "react";
import { Wrapper } from "./style";

const Details = ({ project }) => {
  return (
    <Wrapper>
      <span>{project.type}</span>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <button className="button">Read more</button>
    </Wrapper>
  );
};

export default Details;
