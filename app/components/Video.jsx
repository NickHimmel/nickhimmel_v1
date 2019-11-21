import React from 'react';

const Video = (props) => {
  const videoId = "project-video-" + props.id;

  return (
    <div>
      <video id={videoId} className="project-video" width="100%" controls onClick={(videoId) => {props.onClick()}}>
        <source src={props.video} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video;
