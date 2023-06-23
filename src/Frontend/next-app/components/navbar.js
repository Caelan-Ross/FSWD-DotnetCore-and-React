import NextLink from 'next/link';
import { createTheme, Link, CssBaseline, ThemeProvider, Toolbar, Typography, Container, Box, AppBar} from '@mui/material'
import NewLink from './newlink';

export default function Navbar() {
    return(
        <Box>
        <AppBar>
          <Toolbar position="static">
            <Typography variant="h6" component="h1" sx={{padding: "1rem"}}>.Net Core Api with NextJS</Typography>
            <div underline="none" style={{color:"white", cursor: 'pointer', display: 'flex', gap: '16px'}}>
              <NewLink href="/" text="Home" />
              <NewLink href="/static" text="Static" />
              <NewLink href="/dynamic" text="Dynamic" />
              <NewLink href="/news" text="News" />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    )
}