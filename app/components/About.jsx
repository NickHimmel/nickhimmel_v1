import React from 'react';
import Nav from 'Nav.jsx';
import Footer from 'Footer.jsx';

const About = () => {
  return (
    <div className="main">
      <Nav />
      <div className="project">
        <div className="small_about_image"></div>
        <div className="about_text">
          <h2 className="about">About</h2>
          <h1 className="project_title about_title">web developer committed to making quality stuff</h1>
          <p>I’m a lifelong New Yorker — I was born in Fort Greene. My art centers on my memories of the city and its history.</p>
          <p>At the Daily News, I led a team of imaging specialists and half a million New Yorkers saw my work every day. We broke news under some very tense deadlines, and we didn’t let quality slip. The stories I worked on included investigative pieces that ended up changing people’s lives for the better.</p>
          <p className="long_column">That’s what I want to keep doing as a front-end developer: I want to make quality work that informs people and empowers them to take matters into their own hands. That’s why I went to Dev Bootcamp and became a web developer. It’s why I made sure to learn D3, the data visualization library.</p>
          <p>We should talk! </p>
        </div>
        <img className="about_image" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/Drawing_by_Julia_Himmel.jpg" alt="Drawing of Nick Himmel by Julia Himmel" />
      </div>

      <Footer />
    </div>
  )
}

export default About;
