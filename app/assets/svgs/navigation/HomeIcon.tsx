import React from 'react';

interface HomeIconProps {
  color: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 9.15789L12 2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 9.15789L12 2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 19V7.36841" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M19 19V7.36841" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M5 19H19" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default HomeIcon;
