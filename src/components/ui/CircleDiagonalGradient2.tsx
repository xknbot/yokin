// components/CircleDiagonalGradient.js
import React from 'react';

const CircleDiagonalGradient2 = () => {
  return (
    <div className="h-4">
      <svg width="200" height="200" viewBox="0 0 200 200" className="w-1/2 h-auto">
        <defs>
          <linearGradient id="diagonalGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7a7a7a' }} /> {/* gray-50 */}
            <stop offset="100%" style={{ stopColor: '#313131' }} /> {/* gray-700 */}
          </linearGradient>
        </defs>
        <circle cx="10" cy="10" r="10" fill="url(#diagonalGradient2)" />
      </svg>
    </div>
  );
};

export default CircleDiagonalGradient2;