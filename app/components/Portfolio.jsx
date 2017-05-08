import React from 'react';
import Nav from 'app/components/Nav.jsx'

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="portfolio">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Portfolio;
