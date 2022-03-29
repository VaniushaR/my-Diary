
import './App.css';
import {Navigation} from './components/Navigation'
//import { Route, Routes} from "react-router-dom";
import {Home} from './components/Home'
//theme
import { createTheme, ThemeProvider} from '@material-ui/core'
//import { ThemeProvider, createTheme } from '@mui/material/styles';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#0FF4C6',
    },
    secondary: {
      light: '#686881',
      main: '#000009',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#F4BFDB',
    },
    
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  }

})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
     <div className="navBar"> 
      <Navigation/>
      </div>
     <div className="blog">
      <Home/>

     </div>
     <div className="footer">footer</div>
    </div>
    </ThemeProvider>
  );
}

export default App;
