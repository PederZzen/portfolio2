import React from "react";
import { projects } from "../../../../data";
import Project from "../../../../components/project";

const RecentWork = () => {
  return (
    <div>
      <h2>Recent work</h2>
      {projects.map((project, idx) => {
        return <Project idx={idx} project={project} />;
      })}
    </div>
  );
};

export default RecentWork;
