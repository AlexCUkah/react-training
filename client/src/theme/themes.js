import { createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const theme = createTheme({      
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

export {darkTheme, theme}