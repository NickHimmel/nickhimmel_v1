import React from 'react';

const Video = (props) => {

  return (
    <div>
      <video width="100%" controls onClick={() => {props.onClick()}}>
        <source src={props.video} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video;
