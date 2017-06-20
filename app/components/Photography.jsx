import React from 'react';
import Nav from 'app/components/Nav.jsx'
import Footer from 'app/components/Footer.jsx'
import PhotoProjectOne from 'app/components/PhotoProjectOne.jsx';

class Photography extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      project_title: "nycthemeron",
    }
  }
  render() {
    return (
      <div className="main">
        <Footer />
        <div  className="project">
          <h1 className="project_title">{this.state.project_title}</h1>
          <h2 className="project_subtitle">Thesis for MPS in digital photography at SVA, 2008</h2>
          <p className="project_description"><span className="bold">Nyc · the · me · ron:</span> Greek meaning 24 consecutive hours and is the composite of the words for night and day</p>
          <p className="project_text">For my thesis I created composite images that featured places I have lived, memories I have of growing up in New York and bits of New York City history. I combined built models with landscapes I photographed and added textures. The models were built primarily from coffee stirrers and hot glue. The eight images span from morning to night.</p>
          <div className="gallery-container">
            <ul className="gallery">
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/001_Nick_Himmel_A_Corner_in_the_Past.jpg"/></li>
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/002_Nick_Himmel_El_And_Lucida.jpg"/></li>
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/003_Nick_Himmel_A_Museum_Of_Curiosities.jpg"/></li>
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/004_Nick_Himmel_The_Cyclone.jpg"/></li>
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/005_Nick_Himmel_Day_Of_The_Sharks.jpg"/></li>
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/006_Nick_Himmel_Empire_Service_Metal.jpg"/></li>
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/007_Nick_Himmel_While_You_Were_Gone.jpg"/></li>
              <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/008_Nick_Himmel_A_Dream_Of_A_House.jpg"/></li>
            </ul>
            <div className="arrows">
            </div>
          </div>
        </div>
        <Nav />
      </div>
    )
  }
}

export default Photography;
