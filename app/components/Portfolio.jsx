import React from 'react';
import Nav from 'app/components/Nav.jsx'
import Footer from 'app/components/Footer.jsx'

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="portfolio">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Portfolio;
