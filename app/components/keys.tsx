"use client";

import React, { useState, useEffect } from 'react';

const MusicalKeyDisplay = () => {
  const [background, setBackground] = useState('');
  const [keyInfo, setKeyInfo] = useState({
    key: 'C Major',
    energy: 0.75,
    tempo: 120
  });

  const timeBasedKeys = {
    morning: [
      { key: 'C Major', energy: 0.8 },
      { key: 'G Major', energy: 0.85 },
      { key: 'D Major', energy: 0.9 }
    ],
    afternoon: [
      { key: 'A Major', energy: 0.95 },
      { key: 'E Major', energy: 0.9 },
      { key: 'B Major', energy: 0.85 }
    ],
    evening: [
      { key: 'F Major', energy: 0.7 },
      { key: 'Bb Major', energy: 0.65 },
      { key: 'Eb Major', energy: 0.6 }
    ],
    night: [
      { key: 'D Minor', energy: 0.5 },
      { key: 'A Minor', energy: 0.45 },
      { key: 'E Minor', energy: 0.4 }
    ]
  };

  const tempoRanges = {
    morning: { min: 100, max: 120 },
    afternoon: { min: 120, max: 140 },
    evening: { min: 90, max: 110 },
    night: { min: 70, max: 90 }
  };

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 17) return 'afternoon';
    if (hour >= 17 && hour < 22) return 'evening';
    return 'night';
  };

  const getRandomKey = (timeOfDay) => {
    const keys = timeBasedKeys[timeOfDay];
    return keys[Math.floor(Math.random() * keys.length)];
  };

  const getRandomTempo = (timeOfDay) => {
    const { min, max } = tempoRanges[timeOfDay];
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const updateKeyAndTempo = () => {
      const timeOfDay = getTimeOfDay();
      const newKey = getRandomKey(timeOfDay);
      const newTempo = getRandomTempo(timeOfDay);
      
      setKeyInfo({
        key: newKey.key,
        energy: newKey.energy,
        tempo: newTempo
      });
    };

    updateKeyAndTempo();

    const interval = setInterval(updateKeyAndTempo, 3600000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateBackground = () => {
      let color1, color2;
      
      const rootNote = keyInfo.key.split(' ')[0];
      
      switch (rootNote) {
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
        case 'E':
          color1 = '#90EE90';
          color2 = '#4B0082';
          break;
        case 'B':
          color1 = '#ADD8E6';
          color2 = '#800080';
          break;
        case 'F':
          color1 = '#FFA07A';
          color2 = '#8B4513';
          break;
        case 'Eb':
          color1 = '#DDA0DD';
          color2 = '#2F4F4F';
          break;
        default:
          color1 = 'lightblue';
          color2 = 'darkblue';
      }

      const energyFactor = Math.max(0, Math.min(100, keyInfo.energy * 100));
      const gradient = `linear-gradient(45deg, 
        ${color1} 0%, 
        ${color1} ${energyFactor * 0.3}%, 
        color-mix(in srgb, ${color1} 70%, ${color2} 30%) ${energyFactor * 0.6}%, 
        color-mix(in srgb, ${color1} 30%, ${color2} 70%) ${energyFactor * 0.9}%, 
        ${color2} ${energyFactor + 10}%, 
        ${color2} 100%)`;
      setBackground(gradient);
    };

    updateBackground();
  }, [keyInfo]);

  const timeOfDay = getTimeOfDay();

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
          The current key is {keyInfo.key} at {keyInfo.tempo} BPM. Gradient generated with these values.
        </div>
      </div>
    </div>
  );
};

export default MusicalKeyDisplay;