import React from 'react';

export default function SquareIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
      <rect x="7" y="7" width="10" height="10" rx="2" fill="#14100E" />
    </svg>
  );
}
