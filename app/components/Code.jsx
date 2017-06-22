import React from 'react';
import Nav from 'app/components/Nav.jsx'
import Footer from 'app/components/Footer.jsx'
import Projects from 'app/actions/projects.js';

class Code extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      projectTitle: Projects.code[0].projectTitle,
      projectSubtitle: Projects.code[0].projectSubtitle,
      projectDescriptionBold: Projects.code[0].projectDescriptionBold,
      projectDescription: Projects.code[0].projectDescription,
      projectLink: Projects.code[0].projectLink,
      projectText: Projects.code[0].projectText,
      projectImages: Projects.code[0].projectImages
    };
  }
  render() {
    return (
      <div className="main">
        <Nav />
        <div className="project">
          <h1 className="project_title">{this.state.projectTitle}</h1>
          <h2 className="project_subtitle">{this.state.projectSubtitle}</h2>
          <p className="project_description"><span className="bold">{this.state.projectDescriptionBold}</span>{this.state.projectDescription}<a className="portfolio_link" href={this.state.projectLink}>Code on Github</a></p>
          <p className="project_text">{this.state.projectText}</p>
          <video width="100%" controls>
            <source src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/mypolitician.mp4" type="video/mp4"/>
          </video>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Code;
