import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  //THUNK((q)=>{return {videolist : q}})
  var options = {
    key: YOUTUBE_API_KEY,
    query: q
  };
  const callback = data => {
    const videos = data.items;
    const video = videos[0];  
    changeVideo(video);
    changeVideoList(videos);
  };
  searchYouTube(options, callback);
};

export default handleVideoSearch;
