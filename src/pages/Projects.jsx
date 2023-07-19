import { React, useState } from 'react';
import ProjectCard from "../components/ProjectCard"
import { Typography, Box, Tabs, Tab } from "@mui/material"
import Carousel from 'react-material-ui-carousel'

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

const projects = [
    {
        "title": "Discord Bot",
        "completed": true,
        "language": "Python",
        "img": "https://droplr.com/wp-content/uploads/2020/10/Discord-music-e1635364775454.png",
        "rating": 4
    },
    {
        "title": "Hangman Game",
        "completed": true,
        "language": "ReactJS",
        "img": "https://store-images.s-microsoft.com/image/apps.31378.14440169033196048.33ec04e1-f2d4-46ed-a05b-03b332738f93.8032cfe7-683a-4be1-8b4c-9da7dc14c2b3?q=90&w=480&h=270",
        "rating": 5
    },
    {
        "title": "Reminders Application",
        "completed": true,
        "language": "Python",
        "img": "https://previews.123rf.com/images/burdun/burdun2005/burdun200501262/148029451-dont-forget-reminder-on-sticker-with-white-alarm-clock-aside-on-yellow-background.jpg",
        "rating": 4
    },
    {
        "title": "DVS Helper",
        "completed": true,
        "language": "AngularJS",
        "img": "data:image/png;base64,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"
    }
]

const Projects = () => {
    const [currentTab, setCurrentTab] = useState(0)

    const handleTabChange = (event, newNumber) => {
        setCurrentTab(newNumber)
    }

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
            {projects.map((project, index) => {
                if (currentTab === 2 && !project.completed || currentTab === 1 && project.completed) {
                    return
                }

                return (
                    <ProjectCard
                    title={project.title}
                    completed={project.completed}
                    language={project.language}
                    img={project.img}
                    key={index}
                    rating={project.rating}
                    />
                )
            })}
        </Box>

{/* 
        <Carousel
        autoPlay={false}
        sx={carouselStyle}
        >
            {projects.map((project, index) => {
                return (
                    <ProjectCard
                    title={project.title}
                    description={project.description}
                    language={project.language}
                    img={project.img}
                    key={index}
                    />
                )
            })}
        </Carousel> */}
        </>
    )
}

export default Projects;