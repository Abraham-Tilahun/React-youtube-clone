import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter} from '../../data';
import moment from 'moment';

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    const response = await fetch(videoListUrl);
    const result = await response.json();
    setData(result.items);  // Correct state update
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="card" key={index}>
          <img src={item.snippet.thumbnails.medium.url} alt={`thumbnail${index + 1}`} />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{value_converter(item.statistics.viewCount)} &bull;  {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
