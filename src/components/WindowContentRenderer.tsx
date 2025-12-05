// src/components/WindowContentRenderer.tsx
import React from 'react';
import styled from 'styled-components';
import {fileSystem } from '../os/filesystem';
import type { Item } from '../os/filesystem';
import { DesktopIcon } from './DesktopIcon';
import { useOSStore } from '../os/store';
import { ScrollView } from 'react95';

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

const HtmlBuffer = styled.div`
  background: white;
  min-height: 100%;
  width: 100%;
  overflow: auto;
  color: #000;
`;

const ScrollableContainer = styled(ScrollView)`
  height: 100%;
  width: 100%;
  background: white;
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
        <ScrollableContainer>
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
        </ScrollableContainer>
      );

    case 'txt':
      return (
        <ScrollableContainer>
          <TextBuffer>{item.content}</TextBuffer>
        </ScrollableContainer>
      );

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

      case 'exe':
        return (
          <div style={{ height: '100%', width: '100%', background: 'white' }}>
            {item.src ? (
              <iframe
                title={item.title}
                src={item.src}
                style={{ border: 'none', width: '100%', height: '100%' }}
              />
            ) : (
              <HtmlBuffer dangerouslySetInnerHTML={{ __html: item.content || '<p>No content</p>' }} />
            )}
          </div>
        );
        
    case 'pdf':
      return (
        <div style={{ height: '100%', width: '100%', background: '#c0c0c0' }}>
          {item.src ? (
            <iframe
              title={item.title}
              src={item.src}
              style={{ border: 'none', width: '100%', height: '100%' }}
            />
          ) : (
            <div style={{ padding: 16 }}>No PDF source provided.</div>
          )}
        </div>
      );

    default:
      return <div>Unknown File Type</div>;
  }
};