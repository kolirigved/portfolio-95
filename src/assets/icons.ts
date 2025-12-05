// src/assets/icons.ts

// Using open-source Windows 98 icons
const BASE_URL = 'https://win98icons.alexmeub.com/icons/png';

export const iconMap: Record<string, string> = {
  computer: `${BASE_URL}/computer_explorer-4.png`,
  recycle_bin: `${BASE_URL}/recycle_bin_full-4.png`,
  recycle_full: `${BASE_URL}/recycle_bin_full-4.png`,
  folder: `${BASE_URL}/directory_closed-4.png`,
  folder_open: `${BASE_URL}/directory_closed-4.png`,
  notepad: `${BASE_URL}/notepad-5.png`,
  disk_drive: `${BASE_URL}/hard_disk_drive-3.png`,
  exe: `${BASE_URL}/shell_window5-0.png`,
  pdf: `${BASE_URL}/directory_open_file_mydocs-5.png`,
  // Fallback
  unknown: `${BASE_URL}/file_lines-0.png`
};

export const getIcon = (name: string) => iconMap[name] || iconMap['unknown'];