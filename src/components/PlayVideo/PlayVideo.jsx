import React, { useEffect, useState } from 'react';
import './PlayVideo.css';

import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';


import { API_KEY, value_converter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {
  const { videoId } =useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    try {
      const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
      const res = await fetch(videoDetails_url);
      const data = await res.json();
      setApiData(data.items[0]);
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

  const fetchChannelData = async (channelId) => {
    try {
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;
      const res = await fetch(channelData_url);
      const data = await res.json();
      setChannelData(data.items[0]);
    } catch (error) {
      console.error('Error fetching channel data:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
      const res = await fetch(comment_url);
      const data = await res.json();
      setCommentData(data.items);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData) {
      fetchChannelData(apiData.snippet.channelId);
      fetchComments();
    }
  }, [apiData]);

  return (
    <div className='play-video'>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here..."}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "16k"} Views &bull; 
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "some time ago"}
        </p>

        <div>
          <span><img src={like} alt="like" />{apiData ? value_converter(apiData.statistics.likeCount) : 155}</span>
          <span><img src={dislike} alt="dislike" /> </span>
          <span><img src={share} alt="share" />share</span>
          <span><img src={save} alt="save" />save</span>
        </div>
      </div>
      <hr />
      <div className='publisher'>
        <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="publisher" />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ''}</p>
          <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : 120} subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData && apiData.snippet && apiData.snippet.description 
            ? apiData.snippet.description.slice(0, 250) 
            : "Some description"}
        </p>

        <hr />
        <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 0} comments</h4>
        {commentData.map((item, index) => (
          <div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user profile" />
            <div>
              <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>a day ago</span></h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className="comment-action">
                <img src={like} alt='like' />
                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt="dislike" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayVideo;
