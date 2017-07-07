import React from 'react';
import Nav from 'app/components/Nav.jsx'
import Project from 'Project.jsx';
import Video from 'Video.jsx';
import Footer from 'app/components/Footer.jsx'
import Projects from 'app/actions/projects.js';

class Code extends React.Component {
  constructor (props) {
    super(props);
    this.state = Projects.code[0];
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
        <div className="project">
          <Project {...project}/>
          <Video video={this.state.projectVideo} onClick={this.handleClick}/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Code;
