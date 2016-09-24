import React from 'react';

//used to be props {video} takes the video part of props and makes a new var
const VideoListItem = ({video, onVideoSelect}) => {
  // identiacal to saying const video = props.video & const onVide etc
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => {onVideoSelect(video)}} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};
export default VideoListItem;
