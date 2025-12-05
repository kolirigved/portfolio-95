// src/os/store.ts
import { create } from 'zustand';
import { fileSystem } from './filesystem';

interface WindowState {
  id: string;     // Matches the fileSystem ID
  x: number;      // Position X
  y: number;      // Position Y
  width: number | string;
  height: number | string;
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
  restoreWindow: (id: string) => void; // Add this
  toggleMaximize: (id: string) => void; // Add this
  focusWindow: (id: string) => void; // Handles Z-Index logic
  updateWindowPos: (id: string, x: number, y: number) => void;
  updateWindowSize: (id: string, width: number, height: number) => void; // New method
}

export const useOSStore = create<OSState>((set, get) => ({
  windows: [],
  activeWindowId: null,

  openWindow: (id) => {
    const { windows, focusWindow } = get();
    
    // 1. Check if window is already open
    const existing = windows.find(w => w.id === id);
    if (existing) {
        // If it exists, just focus it (which now un-minimizes it thanks to the fix above)
        focusWindow(id);
        return;
    }

    // 2. Creation Logic (Keep your existing Z-index calc here)
    const highestZ = Math.max(0, ...windows.map(w => w.zIndex));
    const offset = windows.length * 20; 

    const item = fileSystem[id];
    const isFullFile = item?.type === 'image' || item?.type === 'pdf' || item?.type === 'exe';

    const newWindow: WindowState = {
      id,
      x: isFullFile ? 140 + 2*offset : 50 + offset,
      y: isFullFile ? 0 : 50 + offset,
      width: isFullFile ? '55%' : 600,
      height: isFullFile ? '100%' : 400,
      isMinimized: false,
      isMaximized: false,
      zIndex: highestZ + 1, 
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

  minimizeWindow: (id) => set((state) => ({
    windows: state.windows.map((w) => 
      w.id === id ? { ...w, isMinimized: true } : w
    )
  })),

  restoreWindow: (id) => set((state) => {
    const highestZ = Math.max(0, ...state.windows.map((w) => w.zIndex));
    return {
      windows: state.windows.map((w) => 
        w.id === id ? { ...w, isMinimized: false, zIndex: highestZ + 1 } : w
      ),
      activeWindowId: id, // Focus the restored window
    };
  }),

  toggleMaximize: (id) => set((state) => ({
    windows: state.windows.map((w) => 
      w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
    )
  })),

  focusWindow: (id) => set((state) => {
    const highestZ = Math.max(0, ...state.windows.map(w => w.zIndex));
    
    return {
      activeWindowId: id,
      windows: state.windows.map((w) => 
        w.id === id 
          ? { ...w, zIndex: highestZ + 1, isMinimized: false } // <--- FIX: Added isMinimized: false
          : w
      ),
    };
  }),
  
  updateWindowPos: (id, x, y) => set((state) => ({
    windows: state.windows.map((w) => 
      w.id === id ? { ...w, x, y } : w
    )
  })),

  updateWindowSize: (id, width, height) => set((state) => ({
    windows: state.windows.map((w) => 
      w.id === id ? { ...w, width, height } : w
    )
  })),
}));