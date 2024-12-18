import React from 'react';
import '../App.css';


function Vid() {
  return (
    <div className="vid-page">
      <h1 style={{color:'white'}} >Video Tutorial</h1>
      <div className="video-container">
        <iframe
          width="500px"
          height="300px"
          src="https://www.youtube.com/embed/_VaOX6jRD3Y"  // Replace with actual video ID
          title="YouTube video tutorial"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>In this video tutorial, we explain how to analyze Instagram profiles effectively. Watch the video for a step-by-step guide.</p>
      
      </div>
    </div>
  );
}

export default Vid;
