import { createTheme, CssBaseline, ThemeProvider, Toolbar, Typography, Container, Box, AppBar} from '@mui/material'

export default function Footer() {
    return(
        <Box style={{ marginTop: 'auto', marginBottom:'70px' }}> 
            <Typography variant="body1" component="p" align="center" sx={{paddingY: "0.5rem"}}>
                &copy; 2023 Me
            </Typography>
        </Box>
    )
}