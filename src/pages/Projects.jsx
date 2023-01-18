import React from 'react';
import ProjectCard from "../components/ProjectCard"
import { Typography, Box } from "@mui/material"
import Carousel from 'react-material-ui-carousel'

const titleStyle = {
    textAlign: "center"
}

const projectsBoxStyle = {
    display: "flex",
    justifyContent: "center",
    border: "1px solid black",
    marginTop: "20px",
    flexWrap: "wrap",
    gap: "20px"
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
    }
]

const Projects = () => {

    return (
        <>
        {/* <Typography variant="h3" component="h2" sx={titleStyle}>
            MY PROJECTS
        </Typography> */}
        <Box sx={projectsBoxStyle}>
            {projects.map((project, index) => {
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