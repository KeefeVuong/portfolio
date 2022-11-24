import React from 'react';
import ProjectCard from "../components/ProjectCard"
import { Typography, Box } from "@mui/material"

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

const projects = [
    {
        "title": "Discord Bot",
        "description": "Pretty cool bot",
        "language": "Python",
        "img": "https://droplr.com/wp-content/uploads/2020/10/Discord-music-e1635364775454.png"
    },
    {
        "title": "Hangman Game",
        "description": "Hang ppl",
        "language": "ReactJS",
        "img": "https://store-images.s-microsoft.com/image/apps.31378.14440169033196048.33ec04e1-f2d4-46ed-a05b-03b332738f93.8032cfe7-683a-4be1-8b4c-9da7dc14c2b3?q=90&w=480&h=270"
    },
    {
        "title": "Reminders Application",
        "description": "Reminds peeps",
        "language": "Python",
        "img": "https://previews.123rf.com/images/burdun/burdun2005/burdun200501262/148029451-dont-forget-reminder-on-sticker-with-white-alarm-clock-aside-on-yellow-background.jpg"
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
                    description={project.description}
                    language={project.language}
                    img={project.img}
                    key={index}
                    />
                )
            })}
        </Box>
        </>
    )
}

export default Projects;