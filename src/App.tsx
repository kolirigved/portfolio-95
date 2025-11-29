// src/App.tsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { styleReset, MenuList, MenuListItem, Separator } from 'react95';
import original from 'react95/dist/themes/original';
import { createGlobalStyle } from 'styled-components';

// 1. Reset standard web styles to "Classic" styles
const GlobalStyles = createGlobalStyle`
  ${styleReset}
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <div style={{ background: '#008080', minHeight: '100vh', overflow: 'hidden' }}>
        {/* We will render our WindowManager here later */}
        <h1 style={{ color: 'white', padding: '20px' }}>Desktop Ready</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;