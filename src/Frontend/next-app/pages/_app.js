  import * as React from 'react';
import { createTheme, Switch, Fab, CssBaseline, ThemeProvider, Toolbar, Typography, Container, Box, AppBar} from '@mui/material'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Brightness4Icon from '@mui/icons-material/Brightness4';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#121212' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
      },
    },
  });

  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}>
        <Fab color="primary" aria-label="toggle dark mode" onClick={handleDarkModeChange}>
          <Brightness4Icon />
        </Fab>
      </div>
      <div style={{ marginTop: '70px', display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Navbar />
        <Container style={{ flex: '1' }}>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  </>
}
