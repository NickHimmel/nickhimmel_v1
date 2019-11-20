import React from 'react';
import Links from 'links.jsx';

const Project = ({projectTitle, projectSubtitle, projectDescriptionBold, projectDescription, projectLinks, projectText}) => {
  return (
    <div>
      <h1 className="project_title">{projectTitle}</h1>
      <h2 className="project_subtitle">{projectSubtitle}</h2>
      {projectLinks &&
        <Links links={projectLinks} />
      }
      <p className="project_description"><span className="bold">{projectDescriptionBold}</span>{projectDescription}</p>
      <p className="project_text">{projectText}</p>
    </div>
  )
}

export default Project;
