"use client";
import React, { useState, useEffect } from 'react';
import GiphyEmbed from './GiphyEmbed';
import SpotifyPlayer from './SpotifyPlayer';

// Extend the Window interface to include onSpotifyIframeApiReady
declare global {
  interface Window {
    onSpotifyIframeApiReady?: (IFrameAPI: any) => void;
  }
}

const PlaylistOptions = [
  {
    title: "meme songs to summon shrek",
    uri: "spotify:playlist:4rIQwRmbTQDTmNKSdJ1p3n",
  },
  {
    title: "songs for when I meet an alien",
    uri: "spotify:playlist:6WhAmtLSWL3ul0ZScfJ0ol",
  },
  {
    title: "POV: You're Walking Through Ohio",
    uri: "spotify:playlist:4gsTjzpg24K5FCF3Zoj5qD",
  },
  {
    title: "Owen Wilson walking through an art museum",
    uri: "spotify:playlist:7kXuctBmh1eg94ShIVLbSz",
  },
  {
    title: "potential lost phone locations",
    uri: "spotify:playlist:4EGJiGTAO6zswqVBeAZ0QD",
  },
  {
    title: "POV: Gordon Ramsay just walked into your restaurant",
    uri: "spotify:playlist:2RcxRfiaaewqEwJxOLwFjD",
  },
];

const styles = {
  playlistContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100px',
    overflow: 'auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#5B3758',
  },
  playlistItem: {
    cursor: 'pointer',
    padding: '10px',
    margin: '5px 0',
    backgroundColor: '#F9627D',
    borderRadius: '5px',
    transition: 'transform 0.3s ease',
  },
  activePlaylistItem: {
    // transform: 'scale(1.05)',
    backgroundColor: '#C65B7C',
  },
  playContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  outerContainer: {
    background: '#83B692',
    padding: '20px',
    borderRadius: '20px',
    gap: '20px',
    height: "600px",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: '100%',
  },
};
const DJIcon = ({name}:{name:string}) => {
  return (
    <div className="rounded-full text-4xl w-40 h-40 bg-pink absolute -bottom-5 -right-2 z-20 text-center flex font-medium justify-center items-center">
          {name} 
      </div>
  )
}

interface SpotifyEmbedController {
  loadUri: (uri: string) => void;
}


const Spotify = ({isDisabled, DJName}:{isDisabled:boolean, DJName:string}) => {
  const [activeIndex, setActiveIndex] = useState(0); // Tracks the active playlist index
  const [iframeAPI, setIframeAPI] = useState<SpotifyEmbedController | null>(null); // Stores the IFrame API once loaded
  const [isPlaying, setIsPlaying] = useState(true);  
  
  const handlePlaylistClick = (index: number) => {
    setActiveIndex(index);
    // Dynamically update the Spotify iframe source using the EmbedController
    if (iframeAPI) {
      iframeAPI.loadUri(PlaylistOptions[index].uri);
    }
  };
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://open.spotify.com/embed/iframe-api/v1";
    script.async = true;

    script.onload = () => {
      window.onSpotifyIframeApiReady = (IFrameAPI) => {
        const element = document.getElementById('embed-iframe');
        const options = {
          width: '100%',
          height: '400px',
          uri: PlaylistOptions[0].uri, // Set initial playlist URI
        };

        IFrameAPI.createController(element, options, (EmbedController:any) => {
          setIframeAPI(EmbedController); // Store the EmbedController for later use
        });
      };
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
    <style>
        {`
          @keyframes rotateDisk {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    <div style={styles.outerContainer}>
      <div style={styles.playContainer}>
        {!isDisabled &&         
        <div style={styles.playlistContainer}>
        {PlaylistOptions.map((playlist, index) => (
            <div
              key={playlist.uri}
              style={{
                ...styles.playlistItem,
                ...(index === activeIndex ? styles.activePlaylistItem : {}),
              }}
              onClick={() => handlePlaylistClick(index)}
            >
              {playlist.title}
            </div>
          ))}
          </div>
          }
        
        <SpotifyPlayer PlaylistOptions={PlaylistOptions} activeIndex={activeIndex} isDisabled={isDisabled} setIsPlaying={setIsPlaying} />
      </div>
      <div className="relative">
        {DJName && <DJIcon name={DJName}/>}
        <GiphyEmbed isPlaying={isPlaying}/>
      </div>
    </div>
    </>
  );
};

export default Spotify;