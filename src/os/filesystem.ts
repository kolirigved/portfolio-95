// src/os/filesystem.ts

export type FileType = 'folder' | 'txt' | 'image' | 'exe';

export interface Item {
  id: string;
  icon: string; // We'll map these string IDs to real icons later
  title: string;
  type: FileType;
  content?: string; // For text files
  src?: string;     // For images
  children?: string[]; // For folders (list of child IDs)
}

// A flat structure is often easier to manage by ID than a deep nested tree
export const fileSystem: Record<string, Item> = {
  'desktop': {
    id: 'desktop',
    title: 'Desktop',
    type: 'folder',
    icon: 'computer',
    children: ['my_computer', 'recycle_bin', 'about_me', 'projects']
  },
  'my_computer': {
    id: 'my_computer',
    title: 'My Computer',
    type: 'folder',
    icon: 'computer',
    children: ['c_drive']
  },
  'about_me': {
    id: 'about_me',
    title: 'About Me.txt',
    type: 'txt',
    icon: 'notepad',
    content: "Hi, I'm a developer building a Windows 95 portfolio..."
  },
  'projects': {
    id: 'projects',
    title: 'My Projects',
    type: 'folder',
    icon: 'folder_open',
    children: ['project_1', 'project_2']
  },
  // Add more files here...
};