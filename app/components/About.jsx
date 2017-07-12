import React from 'react';
import Nav from 'Nav.jsx';
import Footer from 'Footer.jsx';

const About = () => {
  return (
    <div className="main">
      <Nav />
      <div className="project about_container">
        <div className="small_about_image"></div>
        <div className="about_text">
          <h2 className="about">About</h2>
          <h1 className="project_title about_title">web developer committed to making quality stuff</h1>
          <p>Ad quistibea venihillest, sit dus eos aut voluptam net od es denis prae digendisim nest, cone cus nihic tem re, tem. Arcimagnimi, soluptate dolupta tiossi si utaspisi nat quatio od quatur. Quias audandu ciurempelia dollicide sitat. Gitat occuptatiur. Ora si quiandi orrorrum ea plautem intibus cone nus apiet moluptis sini o c tem iunt, sequi bera de volorem etur, quis nem laciendisto es experepro doluptistia nobit ute id modisit omnihil inihicabo.</p>
        </div>
        <img className="about_image" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/Drawing_by_Julia_Himmel.jpg" alt="Drawing of Nick Himmel by Julia Himmel" />
      </div>

      <Footer />
    </div>
  )
}

export default About;
