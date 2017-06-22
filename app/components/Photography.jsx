import React from 'react';
import Nav from 'app/components/Nav.jsx';
import Footer from 'app/components/Footer.jsx';
import PhotoProjectOne from 'app/components/PhotoProjectOne.jsx';
import Gallery from 'app/components/Gallery.jsx'
import Projects from 'app/actions/projects.js';

class Photography extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      projectTitle: Projects.photoProjects[0].projectTitle,
      projectSubtitle: Projects.photoProjects[0].projectSubtitle,
      projectDescriptionBold: Projects.photoProjects[0].projectDescriptionBold,
      projectDescription: Projects.photoProjects[0].projectDescription,
      projectText: Projects.photoProjects[0].projectText,
      projectImages: Projects.photoProjects[0].projectImages
    };
  }
  render() {
    let images = this.state.projectImages.map((images) => {return <li> <img className="images" src={images}/> </li>});
    return (
      <div className="main">
        <Footer />
        <div  className="project">
          <h1 className="project_title">{this.state.projectTitle}</h1>
          <h2 className="project_subtitle">{this.state.projectSubtitle}</h2>
          <p className="project_description"><span className="bold">{this.state.projectDescriptionBold}</span>{this.state.projectDescription}</p>
          <p className="project_text">{this.state.projectText}</p>
          <Gallery images={images}/>
        </div>
        <Nav />
      </div>
    )
  }
}

export default Photography;
