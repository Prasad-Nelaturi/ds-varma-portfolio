import React, { useRef, useState } from "react";
import YouTube from "react-youtube";
import { Volume2, VolumeX } from "lucide-react";

const Hero = () => {
  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const ribbonText =
    "✦ Creating Dream Spaces That Inspire ✦ Transforming Houses Into Homes ✦ Elegant & Timeless Designs ✦ Premium Interior Solutions ✦ ";

  const onReady = (event) => {
    playerRef.current = event.target;
    
    // Try to play with mute (required for autoplay in most browsers)
    event.target.mute();
    event.target.playVideo();
    setIsPlaying(true);
  };

  const onStateChange = (event) => {
    // If video ends, restart it for looping
    if (event.data === 0) {
      playerRef.current?.playVideo();
    }
  };

  const toggleMute = () => {
    if (!playerRef.current) return;

    if (isMuted) {
      playerRef.current.unMute();
    } else {
      playerRef.current.mute();
    }

    setIsMuted(!isMuted);
  };

  // Force play on user interaction if needed
  const handleVideoClick = () => {
    if (!playerRef.current) return;
    
    if (!isPlaying) {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      rel: 0,
      modestbranding: 1,
      loop: 1,
      playlist: "nGfSVq7JK1o",
      playsinline: 1,
      enablejsapi: 1,
    },
  };

  return (
    <section id="home" className="pt-[72px] bg-white flex justify-center">
      <div className="relative w-full max-w-7xl px-4">
        <div className="bg-black pt-3 px-1 rounded-t-2xl border border-neutral-700 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
          <div 
            className="relative aspect-video overflow-hidden rounded-2xl cursor-pointer"
            onClick={handleVideoClick}
          >
            <YouTube
              videoId="nGfSVq7JK1o"
              opts={opts}
              onReady={onReady}
              onStateChange={onStateChange}
              className="absolute inset-0 w-full h-full"
              iframeClassName="w-full h-full"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-black/80 transition"
            >
              {isMuted ? (
                <VolumeX className="text-white w-5 h-5" />
              ) : (
                <Volume2 className="text-white w-5 h-5" />
              )}
            </button>

            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVideoClick();
                  }}
                  className="bg-white/20 backdrop-blur-md p-5 rounded-full border border-white/40 hover:bg-white/30 transition"
                >
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-md border-t border-white/20 overflow-hidden py-2">
              <div className="flex whitespace-nowrap animate-scroll-ribbon">
                <span className="text-white text-sm md:text-base font-medium tracking-wide px-4">
                  {ribbonText.repeat(3)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-5 h-20 bg-gradient-to-b from-gray-400 to-gray-900 rounded-xl"></div>
          <div className="w-[40%] h-4 rounded-full bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 shadow-xl"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-ribbon {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }

        .animate-scroll-ribbon {
          animation: scroll-ribbon 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;