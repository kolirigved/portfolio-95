// src/components/DesktopIcon.tsx
import React from 'react';
import styled from 'styled-components';
import { getIcon } from '../assets/icons'; // Import the map

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px; /* Reduced width slightly */
  margin: 12px;
  cursor: pointer;
  text-align: center;
  
  &:active {
    opacity: 0.7;
  }
`;

// CHANGED: This is now an img tag
const StyledImg = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
  image-rendering: pixelated; /* Keeps it crisp */
`;

const IconLabel = styled.span`
  color: white;
  text-shadow: 1px 1px 1px #000;
  font-size: 13px; /* Slightly smaller text */
  padding: 1px 2px;
  
  ${Wrapper}:focus & {
    border: 1px dotted white;
    background-color: #000080;
  }
`;

interface DesktopIconProps {
  label: string;
  iconName: string;
  onDoubleClick: () => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ label, iconName, onDoubleClick }) => {
  return (
    <Wrapper 
      tabIndex={0} 
      onDoubleClick={onDoubleClick}
    >
      {/* USE THE IMAGE HERE */}
      <StyledImg src={getIcon(iconName)} alt={label} draggable={false} />
      <IconLabel>{label}</IconLabel>
    </Wrapper>
  );
};