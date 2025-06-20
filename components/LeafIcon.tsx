
import React from 'react';

interface LeafIconProps {
  className?: string;
}

export const LeafIcon: React.FC<LeafIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M17.61,3.47A8.48,8.48,0,0,0,10.5,2.63,1,1,0,0,0,9.5,3.5a1,1,0,0,0,.89.95,6.53,6.53,0,0,1,5.53.75,6.6,6.6,0,0,1,3.29,3.29,6.53,6.53,0,0,1,.75,5.53,1,1,0,0,0,.95.89,1,1,0,0,0,.87-1.05,8.48,8.48,0,0,0-.85-7.11A8.37,8.37,0,0,0,17.61,3.47Z"/>
    <path d="M12.29,8.23A3.49,3.49,0,0,0,9,10.54V11A8.52,8.52,0,0,0,2.63,13.5,8.37,8.37,0,0,0,3.47,17.61a8.48,8.48,0,0,0,7.11.85,1,1,0,0,0,1.05-.87,1,1,0,0,0-.89-.95,6.53,6.53,0,0,1-5.53-.75,6.6,6.6,0,0,1-3.29-3.29,6.53,6.53,0,0,1-.75-5.53,1,1,0,0,0-.95-.89A1,1,0,0,0,2,9.5a8.52,8.52,0,0,0,2.28,6.22,8.37,8.37,0,0,0,6.22,2.28H11a3.49,3.49,0,0,0,2.31-3.35V14A8.52,8.52,0,0,0,13.5,2.63,8.37,8.37,0,0,0,9.39,3.47,8.48,8.48,0,0,0,8.54,10.58,1,1,0,0,0,9.5,11.45a1,1,0,0,0,.89-.95A6.53,6.53,0,0,1,11.14,5,6.6,6.6,0,0,1,14.43,8.29,6.53,6.53,0,0,1,15.18,13.82a1,1,0,0,0,.95.89,1,1,0,0,0,.87-1.05A8.48,8.48,0,0,0,12.29,8.23Z"/>
  </svg>
);
