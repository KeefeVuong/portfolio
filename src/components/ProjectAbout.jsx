import React from 'react'
import { Typography, Container, Rating, Button, Popover, Box, Divider, Chip, Paper } from '@mui/material';

const aboutData = {
    "Discord Bot": [
        <>
            <Typography variant="h5" sx={{padding: "7px"}}>
                <strong>What is Discord?</strong>
            </Typography>
            <Typography sx={{margin: "0px 1%"}}>
                Discord is defined to be "<i>a voice, video, and text chat app that's used by tens of millions of people ages 13+ to talk and hang out with their communities and friends.</i>"
            </Typography>
        </>,
        <>
            <Typography variant="h5" sx={{padding: "7px"}}>
                <strong>How does it work?</strong>
            </Typography>
            <Typography sx={{margin: "0px 1%"}}>
            The bot utilises an API called Discord.PY in order to send requests within a Discord server.<br/>
            Each request must begin with an '!' which can followed by the command name and its relevant arguments.<br/>
            For example, <strong>!play never gonna give you up by rick astley</strong><br/><br/>
            A detailed list of commands and their resulting actions are listed in the <strong>Features</strong> section.
            </Typography>
        </>
    ],
    "Hangman Game": [
        <>
        <Typography>Hello</Typography>
        </>
    ]
}

function ProjectAbout({projectName}) {

  return (
    <Paper sx={{margin: "0px 2.5%"}}>
    {aboutData[projectName].map((data, i) => {
        return (
            <div key={"projectAbout" + i}>{data}</div>
        )
    
    })}
    </Paper>
  )
}

export default ProjectAbout