import React from 'react';

interface IstravaLogoProps {
  inverted?: boolean;
}

export const IstravaLogo: React.FC<IstravaLogoProps> = ({ inverted = false }) => {
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="3"
          y="3"
          width="26"
          height="26"
          rx="7"
          fill={inverted ? '#FFFFFF' : '#2563EB'}
        />
        <rect
          x="8.5"
          y="8.5"
          width="15"
          height="15"
          rx="3.5"
          transform="rotate(-8 16 16)"
          stroke={inverted ? '#2563EB' : '#FFFFFF'}
          strokeWidth="2.2"
        />
        <rect
          x="19.5"
          y="7"
          width="5.5"
          height="5.5"
          rx="1.5"
          transform="rotate(12 22.25 9.75)"
          fill="#F97316"
        />
        <path
          d="M12.5 16.2L15 18.7L20 13.7"
          stroke={inverted ? '#2563EB' : '#FFFFFF'}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`font-display text-xl font-bold tracking-tight ${
          inverted ? 'text-white' : 'text-[#111827]'
        }`}
      >
        Istrava
      </span>
    </span>
  );
};
