import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar'
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About';
import Project from "./pages/Project"

function App() {

  return (
    <div className="App" style={{backgroundColor: "#e7ebf0", minHeight:"100vh"}}>
        <Router>
        <NavBar/>
        <Routes>
          <Route path="/portfolio/" element={<Home/>}/>
          <Route path="/portfolio/projects" element={<Projects/>}/>
          <Route path="/portfolio/about" element={<About/>}/>
          <Route path="/portfolio/projects/:projectName" element={<Project/>}/>
        </Routes>
        </Router>
    </div>
  )
}

export default App