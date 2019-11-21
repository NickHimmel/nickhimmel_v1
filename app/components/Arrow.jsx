import React from 'react';

const Arrow = (props) => {
  const galleryId = props.id;
  const arrowClass = props.direction[0];
  const arrowDirection = props.direction[1];
  const arrowUnicode = props.direction[2];

  return (
    <div><a className={arrowClass} onClick={() => {props.onClick(arrowDirection, galleryId)}}>{arrowUnicode}</a></div>
  );
}

export default Arrow;
