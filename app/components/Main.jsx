import React from 'react';
import Nav from 'Nav.jsx';
import Project from 'Project.jsx'
import Footer from 'Footer.jsx';

class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      projectNumber: 0
    }
  };
  render() {
    let projectType = this.props.params.project;
    return (
      <div className="main">
        <Nav />
        <Project project={projectType} projectNumber={this.state.projectNumber}/>
        <Footer />
      </div>
    );
  }
}

export default Main;
