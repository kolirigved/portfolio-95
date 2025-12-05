// src/components/Taskbar.tsx
import { useState } from 'react';
import { AppBar, Toolbar, Button, MenuList, MenuListItem, Separator } from 'react95';
import styled from 'styled-components';
import { useOSStore } from '../os/store';
import { Clock } from './Clock';
import { getIcon } from '../assets/icons'; // Import the icon helper
import { fileSystem } from '../os/filesystem'; // Import filesystem to look up icons

const Wrapper = styled.div`
  position: relative;
  z-index: 10000;
`;

const StartMenuWrapper = styled.div`
  position: absolute;
  bottom: 45px; /* Sits just above the Start Button */
  left: 0;
  z-index: 10001;
`;

export const Taskbar = () => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  
  // Connect to Store
  const { windows, activeWindowId, focusWindow, minimizeWindow } = useOSStore();

  const handleTaskClick = (id: string) => {
    // 1. Find the window object to check its status
    const win = windows.find((w) => w.id === id);
    if (!win) return;

    // 2. Logic:
    // If it is currently active AND visible (not minimized), then minimize it.
    if (activeWindowId === id && !win.isMinimized) {
      minimizeWindow(id);
    } else {
      // In all other cases (minimized OR in background), bring it to front.
      // NOTE: This relies on the fix we made to focusWindow() to set isMinimized: false
      focusWindow(id);
    }
  };

  return (
    <Wrapper>
      {/* 1. The Start Menu (Conditional Render) */}
      {startMenuOpen && (
        <StartMenuWrapper>
          <MenuList onClick={() => setStartMenuOpen(false)}>
            <MenuListItem>
              <span role="img" aria-label="programs"></span> Programs
            </MenuListItem>
            <MenuListItem>
              <span role="img" aria-label="settings"></span> Settings
            </MenuListItem>
            <Separator />
            <MenuListItem disabled>
              <span role="img" aria-label="shutdown"></span> Shut Down...
            </MenuListItem>
          </MenuList>
        </StartMenuWrapper>
      )}

      {/* 2. The Main Bar */}
      <AppBar style={{ position: 'relative' , top: 0, height: '40px' }}>
        <Toolbar style={{ justifyContent: 'space-between', padding: '0 4px', minHeight: '100%' }}>
          
          {/* Left Side: Start Button & Window List */}
          <div style={{ display: 'flex', gap: '4px' }}>
            <Button 
              onClick={() => setStartMenuOpen(!startMenuOpen)}
              active={startMenuOpen}
              style={{ fontWeight: 'bold' }}
            >
              <img 
                src="https://win98icons.alexmeub.com/icons/png/windows-0.png" 
                alt="logo" 
                style={{ height: '20px', marginRight: 4 }} 
              />
              Start
            </Button>

            {/* Render a button for every open window */}
            {windows.map((win) => {
              const item = fileSystem[win.id];
              const iconSrc = item ? getIcon(item.icon) : getIcon('unknown');

              return (
                <Button
                  key={win.id}
                  active={activeWindowId === win.id && !win.isMinimized}
                  onClick={() => handleTaskClick(win.id)}
                  style={{ 
                    fontWeight: activeWindowId === win.id ? 'bold' : 'normal', 
                    minWidth: '140px', // Wider to fit icon + text
                    display: 'flex', 
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    padding: '0 4px'
                  }}
                >
                  <img 
                    src={iconSrc} 
                    alt="icon" 
                    style={{ height: '18px', marginRight: '6px' }} 
                  />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item ? item.title : win.id}
                  </span>
                </Button>
              );
            })}
          </div>

          {/* Right Side: System Tray */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
             {/* The "inset" div gives that sunken tray look */}
            <div style={{ borderLeft: '1px solid white', borderTop: '1px solid white', borderRight: '1px solid #808080', borderBottom: '1px solid #808080', padding: '2px', display: 'flex', alignItems: 'center' }}>
                <img 
                  src="https://win98icons.alexmeub.com/icons/png/loudspeaker_rays-0.png" 
                  alt="sound" 
                  style={{ height: '18px', marginRight: '4px' }}
                />
                <Clock />
            </div>
          </div>

        </Toolbar>
      </AppBar>
    </Wrapper>
  );
};