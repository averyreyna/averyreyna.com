"use client";

import React, { useState, useEffect } from 'react';

const MusicalKeyDisplay = () => {
  const [background, setBackground] = useState('');
  const [keyInfo, setKeyInfo] = useState({
    key: 'C Major',
    energy: 0.75,
    tempo: 120
  });
  const [animationValues, setAnimationValues] = useState({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
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

  // Add fluid animation effect
  useEffect(() => {
    let animationFrameId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / 1000; // Convert to seconds
      
      // Create multiple flowing animations with different frequencies
      const x1 = Math.sin(progress / 8) * 100;
      const y1 = Math.cos(progress / 12) * 100;
      const x2 = Math.sin(progress / 10 + Math.PI) * 100;
      const y2 = Math.cos(progress / 15 + Math.PI/4) * 100;

      setAnimationValues({ x1, y1, x2, y2 });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
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
      
      // Create a more complex gradient using radial-gradient and multiple color stops
      const gradient = `
        radial-gradient(
          circle at ${50 + animationValues.x1/2}% ${50 + animationValues.y1/2}%, 
          ${color1} 0%, 
          ${color1} ${energyFactor * 0.3}%, 
          color-mix(in srgb, ${color1} 70%, ${color2} 30%) ${energyFactor * 0.6}%,
          color-mix(in srgb, ${color1} 30%, ${color2} 70%) ${energyFactor * 0.9}%,
          ${color2} ${energyFactor + 10}%
        ),
        radial-gradient(
          circle at ${50 + animationValues.x2/2}% ${50 + animationValues.y2/2}%, 
          ${color2} 0%,
          transparent 60%
        )
      `;
      
      setBackground(gradient);
    };

    updateBackground();
  }, [keyInfo, animationValues]);

  const timeOfDay = getTimeOfDay();

  return (
    <div 
      className="h-full w-full rounded-md flex p-4 justify-end items-end overflow-hidden"
      style={{ 
        background,
        transition: 'background 0.1s ease-in-out',
        backgroundBlendMode: 'soft-light'
      }}
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