import React from 'react';
import Gallery from 'Gallery.jsx'
import Projects from 'app/actions/projects.js';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let projectsObject = this.props.params.project
    console.log("Component Did Mount!")
  }
  render() {
    return (
      <div>Test</div>
    );
  }
}

export default Project;
