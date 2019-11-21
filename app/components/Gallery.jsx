import React from 'react';
import GalleryImage from 'GalleryImage.jsx';
import Arrow from 'Arrow.jsx';

const Gallery = (props) => {
  const galleryId = "gallery-" + props.id;
  const galleryType = "gallery " + props.type;
  const rightArrow = ["right-arrow", "right", "\u203A"];
  const leftArrow = ["left-arrow", "left", "\u2039"];
  const images = props.images;
  const renderImages = (images) => {
    return images.map((image) => {
      return (
        <GalleryImage key={image.id} {...image}/>
      );
    });
  };
  return (
    <div className="gallery-container">
      <ul id={galleryId} className={galleryType}>
        {renderImages(images)}
      </ul>
      <div className="arrows">
        <Arrow onClick={props.onClick} id={galleryId} direction={rightArrow}/>
        <Arrow onClick={props.onClick} id={galleryId} direction={leftArrow}/>
      </div>
    </div>
  )
}

export default Gallery;
