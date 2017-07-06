import React from 'react';
import Nav from 'Nav.jsx';
import Project from 'Project.jsx';
import Gallery from 'Gallery.jsx'
import Footer from 'Footer.jsx';
import Projects from 'app/actions/projects.js';

class Photo extends React.Component {
  constructor () {
    super();
    this.state = Projects.photo[0]
  }

  render() {
    let project = this.state;
    return (
      <div className="main">
        <Footer />
        <Project {...project}/>
        <Nav />
      </div>
    )
  }
}

export default Photo;
