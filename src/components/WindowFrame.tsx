import React from 'react';
import { Rnd } from 'react-rnd';
import { Window, WindowHeader, WindowContent, Button, Panel } from 'react95';
import styled from 'styled-components';
import { useOSStore } from '../os/store';
import { getIcon } from '../assets/icons';

// Styled Components for Layout
const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
`;

const MenuBar = styled.div`
  display: flex;
  gap: 12px;
  padding: 4px 8px;
  font-size: 14px;
  border-bottom: 1px solid #808080;
  margin-bottom: 2px;
`;

const MenuItem = styled.span`
  cursor: pointer;
  text-decoration: underline; /* The classic mnemonic style */
  &:hover {
    color: white;
    background: #000080;
  }
`;

const StatusBar = styled(Panel)`
  padding: 4px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-top: 1px solid #dfdfdf;
  margin-top: 2px;
`;

interface WindowFrameProps {
  id: string;
  title: string;
  icon?: string;
  children: React.ReactNode;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({ id, title, icon, children }) => {
  const { 
    windows, 
    closeWindow, 
    focusWindow, 
    minimizeWindow, 
    toggleMaximize, 
    updateWindowPos 
  } = useOSStore();
  
  const windowState = windows.find((w) => w.id === id);
  if (!windowState) return null;

  // Handle Visibility (Hidden if minimized)
  if (windowState.isMinimized) {
    return <div style={{ display: 'none' }} />;
  }

  // Handle Maximize Logic
  const isMaximized = windowState.isMaximized;
  
  // If maximized, we override position/size to fill the 'Desktop' area
  // (We assume roughly 40px for taskbar at bottom)
  const position = isMaximized ? { x: 0, y: 0 } : { x: windowState.x, y: windowState.y };
  const size = isMaximized ? { width: '100%', height: 'calc(100vh - 40px)' } : { width: windowState.width, height: windowState.height };

  return (
    <Rnd
      size={size}
      position={position}
      // Disable dragging/resizing if maximized
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      
      onDragStop={(e, d) => {
        if (!isMaximized) updateWindowPos(id, d.x, d.y);
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        if (!isMaximized) updateWindowPos(id, position.x, position.y);
      }}
      onMouseDown={() => focusWindow(id)}
      style={{ zIndex: windowState.zIndex }}
      minWidth={250}
      minHeight={150}
      bounds="parent"
      dragHandleClassName="window-header" 
    >
      <Window style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }} className="window">
        
        {/* 1. TITLE BAR */}
        <WindowHeader 
          className="window-header" 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            height: '28px', 
            padding: '0 4px' 
          }}
        >
          <HeaderTitle>
             <img src={getIcon(icon || 'unknown')} alt="" style={{ width: '16px', height: '16px' }} />
             {title}
          </HeaderTitle>
          
          <div style={{ display: 'flex', gap: '2px' }}>
            {/* Minimize Button */}
            <Button onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }} size="sm" square style={{
                width: '20px',
                height: '20px'
            }} >
              <span style={{ fontWeight: 'bold', transform: 'translateY(-4px)' }}>_</span>
            </Button>
            
            {/* Maximize Button */}
            <Button onClick={() => toggleMaximize(id)} size="sm" square style={{
                width: '20px',
                height: '20px'
            }} >
              <span style={{ fontWeight: 'bold' }}>{isMaximized ? '❐' : '□'}</span>
            </Button>
            
            {/* Close Button */}
            <Button onClick={() => closeWindow(id)} size="sm" square style={{ marginLeft: '2px', width: '20px', height: '20px' }}>
              <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>×</span>
            </Button>
          </div>
        </WindowHeader>

        {/* 2. MENU BAR (File, Edit, View) */}
        <MenuBar style={{ height: '24px', padding: '0 4px' }}>
            <MenuItem><u>F</u>ile</MenuItem>
            <MenuItem><u>E</u>dit</MenuItem>
            <MenuItem><u>V</u>iew</MenuItem>
            <MenuItem><u>H</u>elp</MenuItem>
        </MenuBar>

        {/* 3. CONTENT AREA */}
        <WindowContent style={{ flex: 1, overflow: 'auto', padding: '0' }}>
            {/* We wrap children in a div with proper padding/bg for the inner content feel */}
           <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              {children}
           </div>
        </WindowContent>

      </Window>
    </Rnd>
  );
};