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
        // ... (existing restore logic remains same) ...
        focusWindow(id);
        return;
    }

    // 2. CRITICAL FIX: Calculate the true highest Z-index
    const highestZ = Math.max(0, ...windows.map(w => w.zIndex));

    const offset = windows.length * 20; 
    
    const newWindow: WindowState = {
      id,
      x: 50 + offset, // Moved strictly to 50 to see it better
      y: 50 + offset,
      width: 400,
      height: 300,
      isMinimized: false,
      isMaximized: false,
      zIndex: highestZ + 1, // FIX: Always puts new window on top
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

  restoreWindow: (id) => set((state) => ({
     windows: state.windows.map((w) => 
       w.id === id ? { ...w, isMinimized: false } : w
     ),
     activeWindowId: id // also focus it
   })),

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
        w.id === id ? { ...w, zIndex: highestZ + 1 } : w
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