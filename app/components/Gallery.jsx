import React from 'react';
import GalleryImage from 'GalleryImage.jsx';
import RightArrow from 'RightArrow.jsx';
import LeftArrow from 'LeftArrow.jsx';

const Gallery = (props) => {
  const galleryId = "gallery-" + props.id;
  let images = props.images;
  let renderImages = (images) => {
    return images.map((image) => {
      return (
        <GalleryImage key={image.id} {...image}/>
      );
    });
  };
  return (
    <div className="gallery-container">
      <ul id={galleryId} className="gallery">
        {renderImages(images)}
      </ul>
      <div className="arrows">
        <RightArrow onClick={props.onClick} id={galleryId}/>
        <LeftArrow onClick={props.onClick} id={galleryId}/>
      </div>
    </div>
  )
}

export default Gallery;
