import React from 'react';
import Nav from 'app/components/Nav.jsx';
import Footer from 'app/components/Footer.jsx';
import PhotoProjectOne from 'app/components/PhotoProjectOne.jsx';
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
          <h1>{images}</h1>
          <h1 className="project_title">{this.state.projectTitle}</h1>
          <h2 className="project_subtitle">{this.state.projectSubtitle}</h2>
          <p className="project_description"><span className="bold">{this.state.projectDescriptionBold}</span>{this.state.projectDescription}</p>
          <p className="project_text">{this.state.projectText}</p>
          <div className="gallery-container">
            <ul className="gallery">
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/001_Nick_Himmel_A_Corner_in_the_Past.jpg"/></li>
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/002_Nick_Himmel_El_And_Lucida.jpg"/></li>
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/003_Nick_Himmel_A_Museum_Of_Curiosities.jpg"/></li>
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/004_Nick_Himmel_The_Cyclone.jpg"/></li>
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/005_Nick_Himmel_Day_Of_The_Sharks.jpg"/></li>
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/006_Nick_Himmel_Empire_Service_Metal.jpg"/></li>
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/007_Nick_Himmel_While_You_Were_Gone.jpg"/></li>
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/008_Nick_Himmel_A_Dream_Of_A_House.jpg"/></li>
            </ul>
            <div className="arrows">
            </div>
          </div>
        </div>
        <Nav />
      </div>
    )
  }
}

export default Photography;
