import React from 'react';

const LeftArrow = (props) => {
  const galleryId = props.id;

  return (
    <div><a className='left-arrow' onClick={() => {props.onClick('left', galleryId)}}>&lsaquo;</a></div>
  );
}

export default LeftArrow;
