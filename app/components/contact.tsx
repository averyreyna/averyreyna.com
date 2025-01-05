import React from 'react';

// Simple Arrow Icon component
const ArrowIcon = () => (
  <svg 
    width="12" 
    height="12" 
    viewBox="0 0 12 12" 
    fill="none" 
    className="text-neutral-600 dark:text-neutral-400"
  >
    <path 
      d="M2.5 9.5L9.5 2.5M9.5 2.5H2.5M9.5 2.5V9.5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const QuadrantDiagram = () => {
  const axisColor = "bg-neutral-600 dark:bg-neutral-400";
  const linkStyle = "text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all text-sm whitespace-nowrap flex items-center gap-2";
  
  return (
    <div className="relative mx-auto w-[320px] h-[240px] mb-8">
      {/* Axes */}
      <div className={`absolute top-[10%] bottom-[10%] left-1/2 w-[0.5px] ${axisColor}`} />
      <div className={`absolute left-[10%] right-[10%] top-1/2 h-[0.5px] ${axisColor}`} />
      
      {/* Axis Labels */}
      <div className={`absolute top-[8%] left-1/2 -translate-x-1/2 -translate-y-8 ${linkStyle}`}>
        Essential
      </div>
      <div className={`absolute bottom-[8%] left-1/2 -translate-x-1/2 translate-y-8 ${linkStyle}`}>
        Peripheral
      </div>
      <div className={`absolute left-[8%] top-1/2 -translate-y-1/2 -translate-x-8 ${linkStyle}`}>
        Personal
      </div>
      <div className={`absolute right-[8%] top-1/2 -translate-y-1/2 translate-x-8 ${linkStyle}`}>
        Professional
      </div>

      {/* Links */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Top Left Group */}
        <div className="absolute top-[20%] left-[25%] space-y-4">
          <div className={linkStyle}><ArrowIcon />Are.na</div>
          <div className={linkStyle}><ArrowIcon />VSCO</div>
        </div>

        {/* Github */}
        <div className="absolute top-[35%] left-[40%] -translate-x-1/2 -translate-y-1/2">
          <div className={linkStyle}><ArrowIcon />Github</div>
        </div>

        {/* Top Right */}
        <div className="absolute top-[15%] right-[25%]">
          {/* <div className={linkStyle}><ArrowIcon />Resume</div> */}
        </div>

        {/* Bottom Area */}
        <div className="absolute bottom-[35%] left-[30%]">
          <div className={linkStyle}><ArrowIcon />Spotify</div>
        </div>

        <div className="absolute bottom-[35%] right-[25%]">
          <div className={linkStyle}><ArrowIcon />LinkedIn</div>
        </div>

        <div className="absolute bottom-[15%] right-[25%]">
          <div className={linkStyle}><ArrowIcon />Full CV</div>
        </div>
      </div>
    </div>
  );
};

export default QuadrantDiagram;