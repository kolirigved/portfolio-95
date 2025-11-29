// src/components/WindowFrame.tsx
import React from 'react';
import { Rnd } from 'react-rnd';
import { Window, WindowHeader, WindowContent, Button } from 'react95';
import styled from 'styled-components';
import { useOSStore } from '../os/store';

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CloseIcon = styled.span`
  display: inline-block;
  font-weight: bold;
  transform: translateY(-2px);
`;

interface WindowFrameProps {
  id: string;
  title: string;
  icon?: string;
  children: React.ReactNode;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({ id, title, icon, children }) => {
  // Connect to our kernel (store)
  const { windows, closeWindow, focusWindow, updateWindowPos } = useOSStore();
  
  // Find the current state of this specific window
  const windowState = windows.find((w) => w.id === id);

  if (!windowState) return null; // Should not happen if rendered correctly

  return (
    <Rnd
      // Logic: Position and Size
      size={{ width: windowState.width, height: windowState.height }}
      position={{ x: windowState.x, y: windowState.y }}
      
      // Logic: Dragging & Resizing
      onDragStop={(e, d) => {
        updateWindowPos(id, d.x, d.y);
        focusWindow(id); // Focusing on drag end feels natural
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        // You can add an updateWindowSize action to your store if you want persistence
        updateWindowPos(id, position.x, position.y);
        // updateWindowSize(id, ref.style.width, ref.style.height); // (Exercise for later)
      }}
      
      // Logic: Focus (Z-Index)
      onMouseDown={() => focusWindow(id)}
      style={{ zIndex: windowState.zIndex }}
      
      // Constraints
      minWidth={200}
      minHeight={150}
      bounds="parent" // Prevents dragging off-screen [cite: 46]
      dragHandleClassName="window-header" // Only drag when clicking the header
    >
      <Window style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }} className="window">
        <WindowHeader className="window-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'grab' }}>
          <HeaderTitle>
            {/* You can render an <img> tag here for the icon prop */}
            {title}
          </HeaderTitle>
          <Button onClick={() => closeWindow(id)} size="sm" square>
            <CloseIcon>×</CloseIcon>
          </Button>
        </WindowHeader>

        <WindowContent style={{ flex: 1, overflow: 'auto', padding: '0.25rem' }}>
          {children}
        </WindowContent>
      </Window>
    </Rnd>
  );
};