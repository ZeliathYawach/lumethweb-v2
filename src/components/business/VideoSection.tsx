import React, { useState } from 'react';
import { Play } from 'lucide-react';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'NRaNxnM5Nn8';
  
  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="mb-24">
      <h3 className="text-2xl font-semibold text-center mb-12 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
        See Lumeth Helm in Action
      </h3>
      <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-xl bg-black/50">
        {!isPlaying ? (
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer group"
            onClick={handlePlayClick}
          >
            {/* Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Video thumbnail"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity"
            />
            
            {/* Play button */}
            <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-amber-400/90 group-hover:bg-amber-400 transition-colors">
              <Play className="w-8 h-8 text-white fill-current" />
            </div>
            
            {/* Hover text */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Watch Demo Video
              </p>
            </div>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="Lumeth Helm Demo"
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      
      {/* Video description */}
      <div className="mt-6 text-center">
        <p className="text-gray-300">
          Watch how Lumeth Helm helps beauty businesses streamline their operations and grow their customer base.
        </p>
      </div>
    </section>
  );
}