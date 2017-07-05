import React from 'react';
import Nav from 'Nav.jsx';
import Project from 'Project.jsx'
import Footer from 'Footer.jsx';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <Project/>
        <Footer />
      </div>
    );
  }
}

export default Main;
