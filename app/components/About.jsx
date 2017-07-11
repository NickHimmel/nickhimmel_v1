import React from 'react';
import Nav from 'Nav.jsx';
import Footer from 'Footer.jsx';

const About = () => {
  return (
    <div className="main">
      <Nav />
      <div className="project">
        <h1 className="project_title">web developer committed to making quality stuff</h1>
        <p>I am a web developer with a particular interest in data visualization and map-based interfaces, and a passion for creating beautiful things that help and inform people. My experience includes working with Ruby on Rails, React, and D3.js. I recently completed Dev Bootcamp, an intensive web development program in New York City, where I acquired advanced skills in HTML, CSS, JavaScript, Ruby, Ruby on Rails, and React. Before that, I earned a master's degree in digital photography from SVA. In both programs, I benefited from an emphasis on learning adaptability in a frequently changing digital landscape.</p>
        <img src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/Drawing_by_Julia_Himmel.jpg" alt="Drawing of Nick Himmel by Julia Himmel" />
      </div>

      <Footer />
    </div>
  )
}

export default About;
