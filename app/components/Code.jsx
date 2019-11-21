import React from 'react';
import Nav from 'app/components/Nav.jsx'
import Projects from 'Projects.jsx';
import Footer from 'app/components/Footer.jsx'
import ProjectsList from 'app/models/projects.js';

class Code extends React.Component {
  constructor (props) {
    super(props);
    this.state = ProjectsList;
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.handleGalleryClick = this.handleGalleryClick.bind(this);
  }

  handleVideoClick (id) {
    let projectVideo = document.getElementById(id);
    if (projectVideo.paused) {
      projectVideo.play();
    } else {
      projectVideo.pause();
    }
  }

  handleGalleryClick (direction, id) {
    let galleryDiv = document.getElementById(id);
    var scrollAmount = 0;
    var slideTimer = setInterval(function(){
      if (direction === 'right') {
        galleryDiv.scrollLeft += 10;
      }
      else {
        galleryDiv.scrollLeft -= 10;
      };
      scrollAmount += 10;
      if(scrollAmount >= 100){
          window.clearInterval(slideTimer);
      }
    },15);
  }

  render() {
    return (
      <div className="main">
        <Nav />
        <Projects projects={this.state.code} onVideoClick={this.handleVideoClick} onGalleryClick={this.handleGalleryClick}/>
        <Footer />
      </div>
    )
  }
}

export default Code;
