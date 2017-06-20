import React from 'react';

class Gallery extends React.Component {
  render() {
    let images = this.props.images;
    return (
      <div className="gallery-container">
        <ul className="gallery">
          {images}
        </ul>
        <div className="arrows">
        </div>
      </div>
    )
  }
}

export default Gallery;
