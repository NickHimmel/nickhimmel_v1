import React from 'react';
import Nav from 'app/components/Nav.jsx'
import Footer from 'app/components/Footer.jsx'
import PhotoProjectOne from 'app/components/PhotoProjectOne.jsx';

class Photography extends React.Component {
  render() {
    return (
      <div className="Main">
        <Footer />
        <PhotoProjectOne />
        <Nav />
      </div>
    )
  }
}

export default Photography;
