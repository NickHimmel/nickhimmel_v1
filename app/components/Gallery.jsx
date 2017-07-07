import React from 'react';
import GalleryImage from 'GalleryImage.jsx';
import RightArrow from 'RightArrow.jsx';
import LeftArrow from 'LeftArrow.jsx';

class Gallery extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (direction) {
    let galleryDiv = document.getElementById('gallery');
    var scrollAmount = 0;
    var slideTimer = setInterval(function(){
      if (direction === 'right') {
        galleryDiv.scrollLeft += 10;
      }
      else {
        galleryDiv.scrollLeft -= 10;
      };
      scrollAmount += 10;
      if(scrollAmount >= 100){
          window.clearInterval(slideTimer);
      }
    },15);
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
        <ul id="gallery">
          {renderImages(images)}
        </ul>
        <div className="arrows">
          <RightArrow onClick={this.handleClick}/>
          <LeftArrow onClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default Gallery;
