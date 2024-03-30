const GiphyEmbed = ({isPlaying}) => {
    const iframeStyle = {
      position: 'relative',
      width: '382px',
      height: '480px',
    };
  
    const overlayStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '10',
      cursor: 'default', // Prevents showing the pointer cursor
    };
  
    return (
      <div style={iframeStyle}>
        <iframe
          src="https://giphy.com/embed/nMgoPDrnFbakhd7RxN"
          width="100%"
          height="100%"
          allowFullScreen
          style={{ position: 'absolute', left: '0', top: '0', opacity: isPlaying ? 1 : 0.5}}
        ></iframe>
        <div style={overlayStyle}></div>
      </div>
    );
  };
  
  export default GiphyEmbed;