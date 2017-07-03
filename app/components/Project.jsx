import React from 'react';
import Projects from 'app/actions/projects.js';

class Project extends React.Component {
    render() {
      return (
        <div>{this.props.project}</div>
      )
    }
}

export default Project;
