import React from 'react';

const Project = ({projectTitle, projectSubtitle, projectDescriptionBold, projectDescription, projectText}) => {
  return (
    <div>
      <h1 className="project_title">{projectTitle}</h1>
      <h2 className="project_subtitle">{projectSubtitle}</h2>
      <p className="project_description"><span className="bold">{projectDescriptionBold}</span>{projectDescription}</p>
      <p className="project_text">{projectText}</p>
    </div>
  )
}

export default Project;
