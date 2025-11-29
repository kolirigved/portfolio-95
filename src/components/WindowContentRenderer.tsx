// src/components/WindowContentRenderer.tsx
import React from 'react';
import styled from 'styled-components';
import {fileSystem } from '../os/filesystem';
import type { Item } from '../os/filesystem';
import { DesktopIcon } from './DesktopIcon';
import { useOSStore } from '../os/store';

const FolderGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100%;
  align-content: flex-start;
  background: white; /* Folders typically have white backgrounds */
  padding: 10px;
  gap: 10px;
`;

const TextBuffer = styled.div`
  background: white;
  padding: 10px;
  min-height: 100%;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  white-space: pre-wrap; /* Preserves newlines in your text files */
  user-select: text; /* Allow users to copy your text */
`;

interface Props {
  item: Item;
}

export const WindowContentRenderer: React.FC<Props> = ({ item }) => {
  const { openWindow } = useOSStore();

  if (!item) return <div>Error: Item not found</div>;

  switch (item.type) {
    case 'folder':
      // 1. Get the IDs of the files inside this folder
      const childIds = item.children || [];
      
      if (childIds.length === 0) {
        return <div style={{ padding: 20 }}>This folder is empty.</div>;
      }

      return (
        <FolderGrid>
          {childIds.map((childId) => {
            const childItem = fileSystem[childId];
            if (!childItem) return null; // Safety check

            return (
              <DesktopIcon
                key={childId}
                label={childItem.title}
                iconName={childItem.icon}
                // Double clicking an icon inside a window opens that new item
                onDoubleClick={() => openWindow(childId)}
              />
            );
          })}
        </FolderGrid>
      );

    case 'txt':
      return <TextBuffer>{item.content}</TextBuffer>;

    case 'image':
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', background: '#808080' }}>
            <img 
                src={item.src} 
                alt={item.title} 
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
            />
        </div>
      );

    default:
      return <div>Unknown File Type</div>;
  }
};