import React from 'react';

class Code extends React.Component {
  render() {
    return (
      <div className="projects">
        <h1 className="portfolio_title">mypolitician</h1>
        <h2 className="portfolio_subtitle">Final project for Dev Bootcamp</h2>
        <p className="portfolio_description"><span className="bold">Technologies used:</span>Ruby on Rails, React, D3; <a className="portfolio_link" href="https://github.com/NickHimmel/myPolitician">Code on Github</a></p>
        <p className="portfolio_text">This app lets people click on a district on a dynamic map of New York State to find out who their local congressman is as well as who their state representatives are. It shows constituents which bills the lawmaker introduced, their vote history, and their Twitter stream, and provides links to their social media pages.iI built the map, utilizing the D3.js JavaScript library, and I designed and built the front end of the site using CSS and the Bootstrap framework.</p>
        <video width="100%" controls>
          <source src="https://s3.us-east-2.amazonaws.com/nickhimmel.com/mypolitician.mp4" type="video/mp4"e/>
        </video>
      </div>
    )
  }
}

export default Code;
