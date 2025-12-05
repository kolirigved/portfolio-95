import { ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import { createGlobalStyle } from 'styled-components';
import { Desktop } from './components/Desktop';
import { Taskbar } from './components/Taskbar';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  html, body, #root {
    height: 100%;
  }
  body {
    overflow: hidden;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 200;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <div
        style={{
          backgroundImage: 'url("https://media.giphy.com/media/26tOZ42Mg6pbTUPCM/giphy.gif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Desktop />
        <Taskbar />
      </div>
    </ThemeProvider>
  );
};

export default App;