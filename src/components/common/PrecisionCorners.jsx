import React from 'react';

/**
 * PrecisionCorners:
 * Renders elegant, straight, architectural hairline crosshairs (+) and precision
 * border accents on container corners to give that bespoke, Swiss-craftsman feel.
 */
export default function PrecisionCorners({ color = 'text-amber-500/40', className = '' }) {
  return (
    <>
      {/* Top Left */}
      <span className={`absolute -top-1.5 -left-1.5 text-xs font-mono font-light select-none pointer-events-none ${color} ${className}`}>
        +
      </span>
      {/* Top Right */}
      <span className={`absolute -top-1.5 -right-1.5 text-xs font-mono font-light select-none pointer-events-none ${color} ${className}`}>
        +
      </span>
      {/* Bottom Left */}
      <span className={`absolute -bottom-1.5 -left-1.5 text-xs font-mono font-light select-none pointer-events-none ${color} ${className}`}>
        +
      </span>
      {/* Bottom Right */}
      <span className={`absolute -bottom-1.5 -right-1.5 text-xs font-mono font-light select-none pointer-events-none ${color} ${className}`}>
        +
      </span>
    </>
  );
}
