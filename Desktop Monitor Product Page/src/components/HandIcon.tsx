export function HandIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hand-icon"
    >
      <defs>
        <filter id="handGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Hand palm */}
      <path
        d="M8 18C8 18 8 14 8 12C8 10.8954 8.89543 10 10 10C11.1046 10 12 10.8954 12 12V8C12 6.89543 12.8954 6 14 6C15.1046 6 16 6.89543 16 8V7C16 5.89543 16.8954 5 18 5C19.1046 5 20 5.89543 20 7V8C20 8 20 6.89543 20 6C20 4.89543 20.8954 4 22 4C23.1046 4 24 4.89543 24 6V16C24 16 24 20 24 22C24 25.3137 21.3137 28 18 28H16C12.6863 28 10 25.3137 10 22C10 22 8 20 8 18Z"
        fill="#39FF14"
        filter="url(#handGlow)"
      />
      
      {/* Stress waves */}
      <path
        d="M4 14C4 14 5 13 6 13"
        stroke="#39FF14"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M3 18C3 18 4.5 17 6 17"
        stroke="#39FF14"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M4 22C4 22 5 21 6 21"
        stroke="#39FF14"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
