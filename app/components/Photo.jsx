import React from 'react';
import Nav from 'Nav.jsx';
import Project from 'Project.jsx';
import Gallery from 'Gallery.jsx'
import Footer from 'Footer.jsx';
import Projects from 'app/models/projects.js';

class Photo extends React.Component {
  constructor () {
    super();
    this.state = Projects.photo[0]
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (direction) {
    let galleryDiv = document.getElementById('gallery');
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
    let project = this.state;
    return (
      <div className="main">
        <Nav />
        <div className="project">
          <Project {...project}/>
          <Gallery images={this.state.projectImages} onClick={this.handleClick}/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Photo;
