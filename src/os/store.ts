// src/os/store.ts
import { create } from 'zustand';

interface WindowState {
  id: string;     // Matches the fileSystem ID
  x: number;      // Position X
  y: number;      // Position Y
  width: number;
  height: number;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number; // Critical for ensuring the active window is on top
}

interface OSState {
  windows: WindowState[];
  activeWindowId: string | null;
  
  // Actions
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  focusWindow: (id: string) => void; // Handles Z-Index logic
  updateWindowPos: (id: string, x: number, y: number) => void;
}

export const useOSStore = create<OSState>((set, get) => ({
  windows: [],
  activeWindowId: null,

  openWindow: (id) => {
    const { windows, focusWindow } = get();
    
    // 1. Check if window is already open
    const existing = windows.find(w => w.id === id);
    if (existing) {
      if (existing.isMinimized) {
          // If minimized, restore it
          set((state) => ({
             windows: state.windows.map(w => w.id === id ? { ...w, isMinimized: false } : w) 
          }));
      }
      focusWindow(id); // Bring to front
      return;
    }

    // 2. If not open, create new window
    // Randomize slightly so they don't stack perfectly on top of each other
    const offset = windows.length * 20; 
    
    const newWindow: WindowState = {
      id,
      x: 100 + offset,
      y: 50 + offset,
      width: 400,
      height: 300,
      isMinimized: false,
      isMaximized: false,
      zIndex: windows.length + 1, // Start on top
    };

    set((state) => ({
      windows: [...state.windows, newWindow],
      activeWindowId: id,
    }));
  },

  closeWindow: (id) => set((state) => ({
    windows: state.windows.filter((w) => w.id !== id),
    activeWindowId: null // You might want logic to focus the next available window here
  })),

  focusWindow: (id) => set((state) => {
    // Logic: Find the highest zIndex currently, and make this window +1 higher
    const highestZ = Math.max(0, ...state.windows.map(w => w.zIndex));
    
    return {
      activeWindowId: id,
      windows: state.windows.map((w) => 
        w.id === id ? { ...w, zIndex: highestZ + 1 } : w
      ),
    };
  }),

  minimizeWindow: (id) => set((state) => ({
    windows: state.windows.map((w) => 
      w.id === id ? { ...w, isMinimized: true } : w
    )
  })),

  updateWindowPos: (id, x, y) => set((state) => ({
    windows: state.windows.map((w) => 
      w.id === id ? { ...w, x, y } : w
    )
  })),
}));