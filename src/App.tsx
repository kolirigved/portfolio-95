// src/App.tsx (Update)
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import { createGlobalStyle } from 'styled-components';
import { Desktop } from './components/Desktop';
import { Taskbar } from './components/Taskbar'; // Import Taskbar

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  body {
    overflow: hidden; 
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <div style={{ background: '#008080', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Desktop takes all available space */}
        <Desktop />
        
        {/* Taskbar sits at the bottom */}
        <Taskbar />
        
      </div>
    </ThemeProvider>
  );
};

export default App;