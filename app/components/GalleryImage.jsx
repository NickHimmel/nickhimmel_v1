import React from 'react';

class Gallery extends React.Component {
  render() {
    let {src, alt} = this.props;
    return (
      <li> <img className="images" src={src} alt={alt}/> </li>
    )
  }
}

export default Gallery;
