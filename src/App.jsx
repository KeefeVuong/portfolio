import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar'
import "./App.css"
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About';
import Project from "./pages/Project"
import { createTheme, ThemeProvider } from '@mui/material';


function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
      ].join(','),
    },});

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{backgroundColor: "#e7ebf0", minHeight: "100vh", fontFamily:"Poppins"}}>
          <Router>
            <NavBar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="projects" element={<Projects/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="projects/:projectName" element={<Project/>}/>
            </Routes>
          </Router>
          <footer style={{display: "flex", justifyContent: "end"}}></footer>
      </div>
    </ThemeProvider>
  )
}

export default App
