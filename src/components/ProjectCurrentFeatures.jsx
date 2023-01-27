import React from 'react'
import { Typography, Container, Rating, Button, Popover, Box, Divider, Chip, Paper, IconButton} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';

const projectFeatures = {
  "Discord Bot": [
      {
        "Play songs": [
          "!play TITLE/URL", 
          <Typography>
            Connects to the user's channel and begins to stream the requested song. <br/> If a song is already being played, the newly requested song will be added to the end of the queue.
          </Typography>
        ]
      },
      {
        "Skip songs": 
          [
            "!skip", 
            <Typography>
              Skips the current song being streamed and attempts to play the next song in the queue.
            </Typography>
          ]
      },
      {
        "Queue system":  
          [
            "!queue", 
            <Typography>
              Displays the order of songs to be played next.
            </Typography>
          ]
      },
      {
        "Repeat mode":
          [
            "!repeat", 
            <Typography>
              Saves the queue and plays the songs in a loop.
            </Typography>
          ]
      },
      {
        "Remove songs":
          [
            "!remove N", 
            <Typography>
              Removes a specific song based off it's ordering in the queue.
            </Typography>
          ]
      },
      {
        "Clear all songs":
          [
            "!clear", 
            <Typography>
              Clears all songs in the queue.
            </Typography>
          ]
      },
      {
        "Leave channel": 
          [
            "!leave", 
            <Typography>
              Leaves the current channel it is connected to.
            </Typography>
          ]
      },
      {
        "Stop playing":
          [
            "!stop", 
            <Typography>
              Stops playing the current song.
            </Typography>
          ]
      },
      {
        "Pause song":
          [
            "!pause", 
            <Typography>
              Pauses the current song being played.
            </Typography>
          ]
      },
      {
        "Resume song":
          [
            "!resume", 
            <Typography>
              Resumes playing the current song from where it was last paused.
            </Typography>
          ]
      }
  ],
  "Hangman Game": [
      {
        "Start button": 
        <Typography>
          Starts the game by picking a random word and replacing all letters with an _. <br/>
          The on-screen keyboard is then enabled shortly after.
        </Typography>
      },
      {
        "Reset button":
        <Typography>
          Allows the user to reset the game at any point back to the <strong>Home</strong> screen.
        </Typography>
      },
      {
        "Diverse word bank":
        <Typography>
          Lots of unique/difficult words to guess in Hangman.
        </Typography>
      },
      {
        "On-screen keyboard":
        <Typography>
          Allows the user to select letters by clicking as to improve the user experience from having to move between the keyboard and mouse constantly.
        </Typography>
      },
      {
        "Lives counter":
        <Typography>
          Displays the number of lives the user has, accompanied with a picture of the Hangman which increases in the number of limbs as lives decrease. 
        </Typography>
      },
      {
        "End game screen":
        <Typography>
          When the player wins or loses the game, a popup will appear informing them of the results.
        </Typography>
      },
      {
        "Mobile friendly":
        <Typography>
          Can be easily played on the mobile due to being only reliant on clicks.
        </Typography>
      }

  ]
}

function ProjectCurrentFeatures({projectName}) {
    return (
      <>
        {projectFeatures[projectName].map((feature, i) => {
            return (
              <Accordion key={"currentPanel" + i}>
                  <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  <ListItemIcon>
                      <DoneIcon sx={{color: "green", border: "1px solid green", borderRadius: 100}}/>
                  </ListItemIcon>
                  <Typography>
                      {Object.keys(feature)[0]}
                  </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  {
                    projectName === "Discord Bot" 
                    ?  
                    (<>
                      <Typography component="div" sx={{paddingBottom: "10px"}}>
                        <strong>Usage: </strong><Chip onClick={async () => {await navigator.clipboard.writeText(Object.values(feature)[0][0]);}}label={Object.values(feature)[0][0]} color="success" />
                      </Typography>
                      {Object.values(feature)[0][1]}
                    </>)
                    : <Typography>{Object.values(feature)[0]}</Typography>
                  }
                  </AccordionDetails>
              </Accordion>
        )})}
      </>
    )
}

export default ProjectCurrentFeatures