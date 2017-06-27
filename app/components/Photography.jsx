import React from 'react';
import Nav from 'Nav.jsx';
import Footer from 'Footer.jsx';
import PhotoProjectOne from 'PhotoProjectOne.jsx';
import Gallery from 'Gallery.jsx'
import Projects from 'app/actions/projects.js';

class Photography extends React.Component {
  constructor () {
    super();
    this.state = {
      projectTitle: Projects.photo[0].projectTitle,
      projectSubtitle: Projects.photo[0].projectSubtitle,
      projectDescriptionBold: Projects.photo[0].projectDescriptionBold,
      projectDescription: Projects.photo[0].projectDescription,
      projectText: Projects.photo[0].projectText,
      projectImages: Projects.photo[0].projectImages
    };
  }
  render() {
    return (
      <div className="main">
        <Footer />
        <div  className="project">
          <h1 className="project_title">{this.state.projectTitle}</h1>
          <h2 className="project_subtitle">{this.state.projectSubtitle}</h2>
          <p className="project_description"><span className="bold">{this.state.projectDescriptionBold}</span>{this.state.projectDescription}</p>
          <p className="project_text">{this.state.projectText}</p>
          <Gallery images={this.state.projectImages}/>
        </div>
        <Nav />
      </div>
    )
  }
}

export default Photography;
