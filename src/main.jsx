import { createTheme, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const theme = createTheme({
  palette: {
    black: '#242124',
    accent: '#ff9f00',
    gray: '#d3d3d3',
    slategray: '#708090',
  },
  typography: {
    fontFamily: "Noto Sans Thai",
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
      '@media (min-width:600px)': {
        fontSize: '4rem',
      },
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      '@media (min-width:600px)': {
        fontSize: '3.25rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      '@media (min-width:600px)': {
        fontSize: '2.75rem',
      },
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
