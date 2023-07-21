import { React, useState, useEffect } from 'react';
import ProjectCard from "../components/ProjectCard"
import { Typography, Box, Tabs, Tab, Grow, CircularProgress } from "@mui/material"
import Carousel from 'react-material-ui-carousel'
import { fetchAPI } from '../helper.js'

const titleStyle = {
    textAlign: "center"
}

const projectsBoxStyle = {
    display: "flex",
    justifyContent: "center",
    // border: "1px solid black",
    marginTop: "20px",
    flexWrap: "wrap",
    gap: "40px"
}

const carouselStyle = {
    textAlign: "center",
    minWidth: 345,
    maxWidth: 500,
    height: "325px",
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

const Projects = () => {
    const [currentTab, setCurrentTab] = useState(0)
    const [projects, setProjects] = useState([])
    const [loaded, setLoaded] = useState(false)

    const handleTabChange = (event, newNumber) => {
        setCurrentTab(newNumber)
    }

    useEffect(() => {
        let getProjects = async () => {
            await fetchAPI("/projects", "GET")
            .then(res => {
                setProjects(res)
                setLoaded(true)
            })
        }

        getProjects()
    }, [])

    return (
        <>
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <Tabs value={currentTab} onChange={handleTabChange}>
                <Tab label="ALL" />
                <Tab label="IN PROGRESS"/>
                <Tab label="FINISHED" />
            </Tabs>
        </Box>
        <Box sx={projectsBoxStyle}>
            {
            loaded ?
            (projects.map((project, index) => {
                if (currentTab === 2 && !project.completed || currentTab === 1 && project.completed) {
                    return
                }

                return (
                    <Grow in={true} key={index}>
                        <div>
                            <ProjectCard
                            title={project.title}
                            completed={project.completed}
                            language={project.language}
                            img={project.img}
                            rating={project.rating}
                            />
                        </div>
                    </Grow>
                )
            })) :
            <CircularProgress sx={{marginTop: "20%"}}/>
            }
        </Box>
        </>
    )
}

export default Projects;