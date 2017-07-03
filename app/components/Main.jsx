import React from 'react';
import Nav from 'Nav.jsx';
import Project from 'Project.jsx'
import Footer from 'Footer.jsx';


const Main = (props) => {
    return (
      <div className="main">
        <Nav />
        <Project project={props.params.project}/>
        <Footer />
      </div>
    );
}

export default Main;
