export function ToxicSlimeDrip() {
  return (
    <div className="absolute top-0 left-0 right-0 z-0 overflow-hidden h-32">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="slimeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#39FF14" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#2ecc11" stopOpacity="0.7"/>
          </linearGradient>
        </defs>
        
        {/* Toxic slime drip path */}
        <path
          d="M0,0 L0,30 Q60,45 120,30 T240,30 Q300,50 360,30 T480,30 Q540,55 600,30 T720,30 Q780,48 840,30 T960,30 Q1020,52 1080,30 T1200,30 Q1260,47 1320,30 L1440,30 L1440,0 Z"
          fill="url(#slimeGradient)"
          filter="url(#glow)"
          className="animate-pulse-slow"
        />
        
        {/* Additional drip details */}
        <ellipse cx="180" cy="35" rx="8" ry="15" fill="#39FF14" opacity="0.8" filter="url(#glow)"/>
        <ellipse cx="420" cy="38" rx="10" ry="18" fill="#39FF14" opacity="0.7" filter="url(#glow)"/>
        <ellipse cx="680" cy="36" rx="7" ry="14" fill="#39FF14" opacity="0.8" filter="url(#glow)"/>
        <ellipse cx="920" cy="37" rx="9" ry="16" fill="#39FF14" opacity="0.75" filter="url(#glow)"/>
        <ellipse cx="1180" cy="35" rx="8" ry="15" fill="#39FF14" opacity="0.8" filter="url(#glow)"/>
      </svg>
      
      {/* Additional glow layer */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#39FF14]/20 to-transparent blur-xl"></div>
    </div>
  );
}
