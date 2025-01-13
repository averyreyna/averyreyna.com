"use client";

import React, { useState, useEffect } from 'react';

const MusicalKeyDisplay = () => {
  const [background, setBackground] = useState('');
  const [keyInfo, setKeyInfo] = useState({
    key: 'C Major',
    energy: 0.75,
    tempo: 120
  });

  useEffect(() => {
    const updateBackground = () => {
      // Adjust colors based on musical key
      // Using similar logic to WeatherHub's weather-based colors
      let color1, color2;
      
      // Example mapping of keys to colors (you can adjust this based on preference)
      switch (keyInfo.key.split(' ')[0]) {
        case 'C':
          color1 = 'yellow';
          color2 = 'lightblue';
          break;
        case 'G':
          color1 = 'lightgreen';
          color2 = 'darkblue';
          break;
        case 'D':
          color1 = 'orange';
          color2 = 'purple';
          break;
        case 'A':
          color1 = 'pink';
          color2 = 'darkred';
          break;
        default:
          color1 = 'lightblue';
          color2 = 'darkblue';
      }

      // Modify gradient intensity based on energy (similar to their temperature logic)
      const energyFactor = Math.max(0, Math.min(100, keyInfo.energy * 100));

      // Create gradient matching their style
      const gradient = `linear-gradient(${color1} 50%, ${color2} 100%)`;
      setBackground(gradient);
    };

    updateBackground();
  }, [keyInfo]);

  return (
    <div 
      className="h-full w-full rounded-md flex p-4 justify-end items-end"
      style={{ background }}
    >
      <div 
        className="text-mono bg-opacity-50 p-4 px-4 rounded-md bg-white 
        bg-blend-overlay w-auto h-12 flex items-center justify-center"
      >
        <div className="text-sm text-gray-900">
          Your current key is {keyInfo.key} at {keyInfo.tempo} BPM. Gradient generated with these values.
        </div>
      </div>
    </div>
  );
};

export default MusicalKeyDisplay;