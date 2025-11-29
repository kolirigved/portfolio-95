// src/os/filesystem.ts

export type FileType = 'folder' | 'txt' | 'image' | 'exe';

export interface Item {
  id: string;
  icon: string;
  title: string;
  type: FileType;
  content?: string;
  src?: string;
  children?: string[];
}

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
    children: ['c_drive'] // Make sure c_drive is listed here
  },
  'c_drive': {
    id: 'c_drive',
    title: 'C:',
    type: 'folder',
    icon: 'disk_drive', // We'll map this later
    children: ['projects', 'about_me'] // Reuse existing items for testing
  },
  'recycle_bin': {
    id: 'recycle_bin',
    title: 'Recycle Bin',
    type: 'folder',
    icon: 'recycle_full', // We will map this later
    children: []
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
    children: ['project_1']
  },
  'project_1': {
    id: 'project_1',
    title: 'Portfolio Site',
    type: 'txt',
    icon: 'notepad',
    content: "This represents the project you are building right now."
  }
};