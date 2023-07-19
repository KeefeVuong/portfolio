import React from 'react'
import { Typography, Container, Rating, Button, Popover, Box, Divider, Chip, Paper, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';

const projectFeatures = {
    "Discord Bot": [
        {
            "Shuffle songs": [
                "!shuffle",
                <Typography>
                    Shuffles all songs randomly in the queue with a new order.
                </Typography>
            ]
        },
        {
            "Download songs": [
                "!download",
                <Typography>
                    Provides an MP3 download link for the current song being played.
                </Typography>
            ]
        },
        {
            "Display Lyrics": [
                "!lyrics",
                <Typography>
                    Provides the lyrics to the current song being played through a chat message.
                </Typography>
            ]
        },
        {
            "Volume control": [
                "!volume X",
                <Typography>
                    Sets the volume of the bot to X%.
                </Typography>
            ]
        },
        {
            "Export songs": [
                "!export",
                <Typography>
                    Exports all the current songs in the queue into a TXT file.
                </Typography>
            ]
        },
        {
            "Import songs": [
                "!import FILE",
                <Typography>
                    Imports a TXT file that has been exported and adds all the songs to the queue.
                </Typography>
            ]
        }
    ],
    "Hangman Game": [
        {
            "Optimising on-screen keyboard": 
            <Typography>
                Hide the on-screen keyboard until the user clicks the play button.<br/>
                Allow the user to use keyboard inputs to make guesses.
            </Typography> 
        },
        {
            "UI/UX improvements":
            <Typography>
                Include a better usage of space within the page and less jarring colour schemes.<br/>
                Fix the end of game modal to allow users to easily exit out.
            </Typography>
        },
        {
            "Leaderboard":
            <Typography>
                Shows the user the percentile they belong in based on the number of lives left for a specific word.
            </Typography>
        },
        {
            "Hints":
            <Typography>
                Allows players to request a hint (either the definition or a free letter).
            </Typography>
        },
        {
            "Import TXT files":
            <Typography>
                Allows players to import their own TXT files with words of their choice.
            </Typography>
        }
    ],
    "Reminders Application": []
}

function ProjectFutureFeatures({projectName}) {
    return (
        <>
          {projectFeatures[projectName].map((feature, i) => {
              return (
                <Accordion key={"futurePanel" + i} disableGutters={true}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <ListItemIcon>
                            <CloseIcon sx={{color: "red", border: "1px solid red", borderRadius: 100}}/>
                        </ListItemIcon>
                        <Typography>
                            {Object.keys(feature)[0]}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                    sx={{border: "1px #f3e5f5", borderStyle: "solid hidden solid hidden"}}
                    >
                        {
                            projectName === "Discord Bot" &&
                            (
                            <>
                            <Typography component="div" sx={{paddingBottom: "10px"}}>
                                <strong>Usage: </strong><Chip onClick={async () => {await navigator.clipboard.writeText(Object.values(feature)[0][0]);}}label={Object.values(feature)[0][0]} color="error" />
                            </Typography>
                            {Object.values(feature)[0][1]}
                            </>
                            )
                        }
                    </AccordionDetails>
                </Accordion>
          )})}
        </>
      )
}

export default ProjectFutureFeatures