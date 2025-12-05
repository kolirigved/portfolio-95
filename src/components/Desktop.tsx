// src/components/Desktop.tsx
import styled from 'styled-components';
import { useOSStore } from '../os/store';
import { fileSystem } from '../os/filesystem'; 
import { WindowFrame } from './WindowFrame';
import { DesktopIcon } from './DesktopIcon';
// Import the new renderer
import { WindowContentRenderer } from './WindowContentRenderer'; 

const DesktopContainer = styled.main`
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 10px;
  height: calc(100vh - 40px);
  min-height: 0;
  width: 100%;
`;

export const Desktop = () => {
  const { windows, openWindow } = useOSStore();

  const desktopItems = fileSystem['desktop'].children || [];

  return (
    <DesktopContainer>
      {/* Layer 1: Desktop Icons */}
      {desktopItems.map((id) => {
        const item = fileSystem[id];
        if (!item) return null;

        return (
          <DesktopIcon 
            key={id}
            label={item.title} 
            iconName={item.icon}
            onDoubleClick={() => openWindow(id)} 
          />
        );
      })}

      {/* Layer 2: Windows */}
      {windows.map((win) => {
        const item = fileSystem[win.id];

        // Safety check in case a window is open for a deleted file
        if (!item) return null;

        return (
          <WindowFrame
            key={win.id}
            id={win.id}
            title={item.title}
            icon={item.icon}
          >
            {/* The new renderer handles folders, text, images, etc. */}
            <WindowContentRenderer item={item} />
          </WindowFrame>
        );
      })}
    </DesktopContainer>
  );
};