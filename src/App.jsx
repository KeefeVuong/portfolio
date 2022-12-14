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
    <div className="App">
        <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects/:projectName" element={<Project/>}/>
        </Routes>
        </Router>
    </div>
  )
}

export default App
