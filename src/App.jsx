import './App.css';
import {Navigation} from './components/Navigation'
//import { Route, Routes} from "react-router-dom";
import {Home} from './components/Home'
import { Author } from './components/Author';
import {Memories} from './components/Memories'
//theme
import { createTheme, ThemeProvider} from '@material-ui/core'
//import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogEntry } from './components/BlogEntry.jsx';

import { useFetch2 } from './components/customHooks/useFetch2';
import { NotFound } from './components/customHooks/NotFound';
import { Footer } from './Footer';

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

  return(
<Router>
    <ThemeProvider theme={theme}>
    <div className="App">
     <div className="navBar"> 
      <Navigation/>
      </div>
     <div className="blog">
     <Routes>
       <Route index path="/my-Diary/" element={<Home/>}></Route>
       <Route path="/my-Diary/author" element={<Author/>}></Route>
       <Route path="/my-Diary/memories" element={<Memories/>}></Route>
       <Route path="/my-Diary/:id" element={<BlogEntry />}></Route>
       <Route path="/*" element={<NotFound/>}></Route>
      </Routes>
     </div>
     <div className="footer">
       <Footer/>
     </div>
    </div>
    </ThemeProvider>
  </Router>
  )
  

}

export default App;
/*

  const urlUsers = "https://jsonplaceholder.typicode.com/users"
  const urlImg = "https://jsonplaceholder.typicode.com/photos"
  const [data, setData] = useFetch2(urlImg)
  console.log(data)

  return (
    <>
  <h1>App React</h1>
  {data.map((item) => {
    return(
      <div key={item.id}>
        <h2 >{item.title}</h2>
        <img src={item.url}/>
      </div>
    )}
  )}
  </>
  );

 */