import React from 'react';
import VideoListEntry from './VideoListEntry.js';
import configureStore from '../store/store.js';
// console.log(configureStore.getState());
var VideoList = ({ videos, handleVideoListEntryTitleClick }) => (
  <div className="video-list">
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
