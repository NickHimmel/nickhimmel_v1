import React from 'react';

const GalleryImage = ({src, alt}) => {
  return (
    <li> <img className="images" src={src} alt={alt}/> </li>
  )
}

export default GalleryImage;
