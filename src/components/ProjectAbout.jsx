import React from 'react'
import { Typography, Container, Rating, Button, Popover, Box, Divider, Chip, Paper } from '@mui/material';

const aboutData = {
    "Discord Bot": [
        <>
            <Typography variant="h5" sx={{padding: "7px"}}>
                <strong>What is Discord?</strong>
            </Typography>
            <Typography sx={{margin: "0px 1%"}}>
                Discord is "<i>a voice, video, and text chat app that's used by tens of millions of people ages 13+ to talk and hang out with their communities and friends.</i>"
            </Typography>
        </>,
        <>
            <Typography variant="h5" sx={{padding: "7px"}}>
                <strong>How does it work?</strong>
            </Typography>
            <Typography sx={{margin: "0px 1%"}}>
            The bot utilises an API called Discord.PY in order to send requests within a Discord server.<br/>
            Each request must begin with an '!' which can followed by the command name and its relevant arguments.<br/>
            For example, <strong>!play never gonna give you up by rick astley</strong><br/> <br/>
            A detailed list of commands and their resulting actions are listed in the <strong>Features</strong> section.
            </Typography>
        </>
    ],
    "Hangman Game": [
        <>
          <Typography variant="h5" sx={{padding: "7px"}}>
                <strong>What is Hangman?</strong>
            </Typography>
            <Typography sx={{margin: "0px 1%"}}>
                Hangman is a game where you attempt to guess the letters of a word with a certain amount of lives (represented by the hangman's limbs).
            </Typography>
        </>,
        <>
            <Typography variant="h5" sx={{padding: "7px"}}>
                <strong>How does it work?</strong>
            </Typography>
            <Typography sx={{margin: "0px 1%"}}>
            The game utilises a pre-generated TXT file that contains an enormous list of words. <br/>
            In order to begin playing, the "Click to play" button must be selected for the game to start. <br/>
            As such, a random word is selected and the player must select letters off the on-screen keyboard to choose as their guess.<br/><br/>

            Each guess can be categorised as either: <br/>
            <strong style={{color: "green"}}>Correct</strong> - if the letter selected belongs in the word, replacing the respective _ in its position with itself <br/>
            <strong>OR</strong><br/>
            <strong style={{color: "red"}}>Incorrect</strong> - if the letter selected does not belong in the word, reducing the amount of lives and adding extra limbs to the hangman.
            </Typography>
        </>
    ],
    "Reminders Application": []
}

function ProjectAbout({projectName}) {

  return (
    <Paper sx={{margin: "0px 4%", borderRadius: "15px"}}>
    {aboutData[projectName].map((data, i) => {
        return (
            <div key={"projectAbout" + i} style={{margin: "5px"}}>{data}</div>
        )
    
    })}
    </Paper>
  )
}

export default ProjectAbout