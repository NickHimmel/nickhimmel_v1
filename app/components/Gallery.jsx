import React from 'react';

class Gallery extends React.Component {
  render() {
    let {link} = this.props;
    return (
          <li> <img className="images" src={link}/> </li>
    )
  }
}

export default Gallery;
