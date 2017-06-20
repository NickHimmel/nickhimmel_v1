import React from 'react';

class Gallery extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Gallery;
