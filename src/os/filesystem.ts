// src/os/filesystem.ts
import project1Text from '../content/project_1.txt?raw';
import aboutMeText from '../content/about_me.txt?raw';

export type FileType = 'folder' | 'txt' | 'image' | 'exe' | 'pdf' | 'app';

export interface Item {
  id: string;
  icon: string;
  title: string;
  type: FileType;
  content?: string;
  src?: string;
  download?: string;
  appId?: 'chess';
  showToolbar?: boolean;
  children?: string[];
}

export const fileSystem: Record<string, Item> = {
  'desktop': {
    id: 'desktop',
    title: 'Desktop',
    type: 'folder',
    icon: 'computer',
    children: ['my_computer', 'recycle_bin', 'about_me', 'projects', 'portfolio_page', 'resume_pdf', 'chess_app'] 
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
    content: aboutMeText
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
    content: project1Text
  },
  'portfolio_page': {
    id: 'portfolio_page',
    title: 'Portfolio Page',
    type: 'exe',
    icon: 'exe',
    src: '/portfolio-95/files/portfolio.html' // Place your HTML at public/files/portfolio.html
  },
  'resume_pdf': {
    id: 'resume_pdf',
    title: 'Resume',
    type: 'pdf',
    icon: 'pdf',
    src: 'https://drive.google.com/file/d/1xd31v8XpVXb8iaIsaC03Y5oZ86_wwcWZ/preview',
    download: 'https://drive.google.com/uc?export=download&id=1xd31v8XpVXb8iaIsaC03Y5oZ86_wwcWZ'
  },
  'chess_app': {
    id: 'chess_app',
    title: 'Chess.exe',
    type: 'app',
    icon: 'chess',
    appId: 'chess',
    showToolbar: false
  }
  
};