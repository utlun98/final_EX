import React from 'react';
import loadingGif from "../../assets/waiting.gif"

const LoadingPage = ()  => {
  return (
    <img 
      src={loadingGif}
      alt="wait until the page loads"
      className="loadinggif"
     />
  );
}

export default LoadingPage; 