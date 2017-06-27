import React from 'react';
import GalleryImage from 'GalleryImage.jsx';
import RightArrow from 'RightArrow.jsx';
import LeftArrow from 'LeftArrow.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let images = this.props.images;
    let renderImages = (images) => {
      return images.map((image) => {
        return (
          <GalleryImage key={image.id} {...image}/>
        );
      });
    };
    return (
      <div className="gallery-container">
        <ul className="gallery">
          {renderImages(images)}
        </ul>
        <div className="arrows">
          <RightArrow />
          <LeftArrow />
        </div>
      </div>
    )
  }
}

export default Gallery;
