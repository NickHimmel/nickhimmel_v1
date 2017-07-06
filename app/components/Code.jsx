import React from 'react';
import Nav from 'app/components/Nav.jsx'
import Project from 'Project.jsx';
import Footer from 'app/components/Footer.jsx'
import Projects from 'app/actions/projects.js';

class Code extends React.Component {
  constructor (props) {
    super(props);
    this.state = Projects.code[0];
  }

  render() {
    let project = this.state;
    return (
      <div className="main">
        <Nav />
        <Project {...project}/>
        <Footer />
      </div>
    )
  }
}

export default Code;
