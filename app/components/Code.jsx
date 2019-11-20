import React from 'react';
import Nav from 'app/components/Nav.jsx'
import Projects from 'Projects.jsx';
import Footer from 'app/components/Footer.jsx'
import ProjectsList from 'app/models/projects.js';

class Code extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    let projectVideo = document.getElementById('projectVideo');
    if (projectVideo.paused) {
      projectVideo.play();
    } else {
      projectVideo.pause();
    }
  }

  render() {
    let project = this.state;
    return (
      <div className="main">
        <Nav />
        <Projects projects={ProjectsList.code} onClick={this.handleClick}/>
        <Footer />
      </div>
    )
  }
}

export default Code;
