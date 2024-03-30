import React, { useState } from 'react';

const SpotifyPlayer = ({ PlaylistOptions, activeIndex, isDisabled }:{PlaylistOptions:any, activeIndex:number, isDisabled:boolean}) => {
  const overlayStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Whitened overlay
    zIndex: 10,
    opacity: 0.8,
    borderRadius: '10px',
    display: isDisabled ? 'block' : 'none', // Only show overlay if isInactive
  };

  return (
    <div style={{ position: 'relative', width: '100%'}}>
      <iframe
        id="embed-iframe"
        src={`https://open.spotify.com/embed/playlist/${PlaylistOptions[activeIndex].uri.split(':').pop()}`}
        allow="encrypted-media"
      ></iframe>
      {isDisabled && <div style={overlayStyle}></div>}
    </div>
  );
};

export default SpotifyPlayer;
