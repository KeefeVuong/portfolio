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
    },
    {
        "title": "Password Manager",
        "completed": true,
        "language": "Django",
        "img": "data:image/jpeg;base64,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"
    },
    {
        "title": "Portfolio Website",
        "completed": false,
        "language": "ReactJS",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhcmYPn6BAm_9XSYl6JNljOl1dwQgj2Pjjw&usqp=CAU"
    },
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