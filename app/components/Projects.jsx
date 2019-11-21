import React from 'react';
import Project from 'Project.jsx';
import Video from 'Video.jsx';
import Gallery from 'Gallery.jsx';

const Projects = (props) => {
  const projects = props.projects;
  const projectList = projects.map((project) =>
    <li key={project.id} className="project-list-item">
      <Project {...project}/>
      {project.projectVideo &&
        <Video video={project.projectVideo} onClick={props.onVideoClick} id={project.id}/>
      }
      {project.projectImages &&
        <Gallery images={project.projectImages} onClick={props.onGalleryClick} id={project.id} type="gallery-code"/>
      }
    </li>
  );
  return (
    <div className="project">
      <ul>
        {projectList}
      </ul>
    </div>
  )
}

export default Projects;
