import React from 'react';
import Nav from 'app/components/Nav.jsx';
import Footer from 'app/components/Footer.jsx';
import PhotoProjectOne from 'app/components/PhotoProjectOne.jsx';
import Gallery from 'app/components/Gallery.jsx'
import PhotoProjects from 'app/actions/photoProjects.js';

class Photography extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      projectTitle: PhotoProjects.projects[0].projectTitle,
      projectSubtitle: PhotoProjects.projects[0].projectSubtitle,
      projectDescriptionBold: PhotoProjects.projects[0].projectDescriptionBold,
      projectDescription: PhotoProjects.projects[0].projectDescription,
      projectText: PhotoProjects.projects[0].projectText,
      projectImages: PhotoProjects.projects[0].projectImages
    };
  }
  render() {
    let images = this.state.projectImages.map((images) => {return "<img className='images' src=" + images + "/>"});
    return (
      <div className="main">
        <Footer />
        <div  className="project">
          <h1 className="project_title">{this.state.projectTitle}</h1>
          <h2 className="project_subtitle">{this.state.projectSubtitle}</h2>
          <p className="project_description"><span className="bold">{this.state.projectDescriptionBold}</span>{this.state.projectDescription}</p>
          <p className="project_text">{this.state.projectText}</p>
          <Gallery />
        </div>
        <Nav />
      </div>
    )
  }
}

export default Photography;
