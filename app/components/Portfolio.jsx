import React from 'react';
import Nav from 'app/components/Nav.jsx'

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default Portfolio;
