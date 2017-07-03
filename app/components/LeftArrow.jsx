import React from 'react';

const LeftArrow = (props) => {
  return (
    <div><a className='left-arrow' onClick={() => {props.onClick('left')}}>&lsaquo;</a></div>
  );
}

export default LeftArrow;
