import React from 'react';
import Projects from 'app/actions/projects.js';

const Project = (props) => {
  let projectObject = Projects[props.project][props.projectNumber];
  return (
    <div>{projectObject.projectTitle}</div>
  );
}

export default Project;
