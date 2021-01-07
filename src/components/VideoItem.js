import React from 'react';
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {  //here instead of the passing props, we pass video so that we don't have to write props.vide everytime.
    
    return(
        <div onClick={ (() => onVideoSelect(video)) } className="VideoItem item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}></img>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;   