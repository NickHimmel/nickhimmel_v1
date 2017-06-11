import React from 'react';

class Photography extends React.Component {
  render() {
    return (
      <div  className="projects">
        <h1 className="portfolio_title">nycthemeron</h1>
        <h2 className="portfolio_subtitle">Thesis for MPS in digital photography at SVA, 2008</h2>
        <p className="portfolio_description"><span className="bold">Nyc · the · me · ron:</span> Greek meaning 24 consecutive hours and is the composite of the words for night and day</p>
        <p className="portfolio_text">For my thesis I created composite images that featured places I have lived, memories I have of growing up in New York and bits of New York City history. I combined built models with landscapes I photographed and added textures. The models were built primarily from coffee stirrers and hot glue. The eight images span from morning to night.</p>
        <ul className="gallery">
          <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/001_Nick_Himmel_A_Corner_in_the_Past.jpg"/></li>
          <li><img className="images" src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/002_Nick_Himmel_El_And_Lucida.jpg"/></li>
        </ul>
      </div>
    )
  }
}

export default Photography;
