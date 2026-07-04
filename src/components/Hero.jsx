import React, { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const ribbonText =
    "✦ Creating Dream Spaces That Inspire ✦ Transforming Houses Into Homes ✦ Elegant & Timeless Designs ✦ Premium Interior Solutions ✦ ";

  return (
    <section
      id="home"
      className="bg-white pt-[72px] relative overflow-hidden bg-black"
    >
      {/* Monitor Section */}
      <div className="relative flex justify-center">
        <div className="relative">
          {/* Monitor Frame */}
          <div className="w-full bg-neutral-900 pt-3 border border-neutral-700 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
            {/* Screen */}
            <div className="relative overflow-hidden rounded-2xl">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/awards.mov" type="video/mp4" />
              </video>

              {/* Sound Toggle Button */}
              <button
                onClick={toggleMute}
                className="absolute top-2 right-2 z-20 bg-black/60 backdrop-blur-md p-2 md:p-3 rounded-full border border-white/20 hover:bg-black/80 transition-all duration-300 hover:scale-110"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>

              {/* Gradient for better readability */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

              {/* Scrolling Ribbon Inside Screen */}
              <div className="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-md border-t border-white/20 overflow-hidden py-2">
                <div className="flex whitespace-nowrap animate-scroll-ribbon">
                  <span className="text-white text-sm md:text-base font-medium tracking-wide px-4">
                    {ribbonText.repeat(3)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stand */}
          <div className="flex flex-col items-center">
            <div className="w-5 h-16 md:h-20 bg-gradient-to-b from-gray-400 to-gray-900 rounded-xl"></div>
            <div className="w-[40%] h-4 rounded-full bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 shadow-xl"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
       @keyframes scroll-ribbon {
  0% {
    transform: translateX(0%);
  }
  100% {
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
