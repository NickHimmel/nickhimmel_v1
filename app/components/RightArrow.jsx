import React from 'react';

const RightArrow = (props) => {
  const galleryId = props.id;

  return (
    <div><a className='right-arrow' onClick={() => {props.onClick('right', galleryId)}}>&rsaquo;</a></div>
  );
}

export default RightArrow;
