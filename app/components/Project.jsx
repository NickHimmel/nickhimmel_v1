import React from 'react';
import Nav from 'Nav.jsx';
import Gallery from 'Gallery.jsx'
import Footer from 'Footer.jsx';
import Projects from 'app/actions/projects.js';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let projectsObject = this.props.params.project
    debugger
    console.log("Component Did Mount!")
  }
  render() {
    return (
      <div>
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default Project;
