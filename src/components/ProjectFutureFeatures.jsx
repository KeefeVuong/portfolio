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
            "Improving on-screen keyboard": 
            <Typography>
                Hide the on-screen keyboard until the user clicks the play button.<br/>
                Allow the user to also use their keyboard as an option of input.
            </Typography> 
            
        }
    ]
}

function ProjectFutureFeatures({projectName}) {
    return (
        <>
          {projectFeatures[projectName].map((feature, i) => {
              return (
                <Accordion key={"futurePanel" + i}>
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
                    <AccordionDetails>
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
                  {Object.values(feature)[0]}
                    </AccordionDetails>
                </Accordion>
          )})}
        </>
      )
}

export default ProjectFutureFeatures