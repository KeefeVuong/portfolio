import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Rating, Button, Popover, Box, Divider, Chip, Paper, IconButton} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import Carousel from 'react-material-ui-carousel'
import { createTheme, ThemeProvider } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProjectAbout from '../components/ProjectAbout';
import GithubButton from "../components/GithubButton"
import Subheading from "../components/Subheading"
import ProjectCurrentFeatures from '../components/ProjectCurrentFeatures';
import ProjectFutureFeatures from '../components/ProjectFutureFeatures';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';



const carouselStyle = {
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "25px",
}

const githubLinks = {
    "Discord Bot": "https://github.com/KeefeVuong/discordbot",
    "Hangman Game": "https://github.com/KeefeVuong/hangman"
}

const playable = {
    "Discord Bot": "",
    "Hangman Game": "https://keefevuong.github.io/hangman/"
}

const Project = () => {
    const params = useParams();
    return (
        <>
        <div style={{margin: "35px"}}>

            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography variant="h3">
                    <strong>{params.projectName}</strong>
                    <IconButton disabled={playable[params.projectName] ? false : true} target="_blank" href={playable[params.projectName]} sx={{color: "#4CC76E"}}>
                        <PlayCircleFilledWhiteIcon/>
                    </IconButton>
                </Typography>
                <Box>
                    <GithubButton url={githubLinks[params.projectName]}/>
                </Box>
            </Box>
            <Divider/>
            {/* <Carousel
            autoPlay={false}
            sx={carouselStyle}
            cycleNavigation={true}
            navButtonsAlwaysVisible={true}
            >
                {testData.map((data, i) => {
                    return <img src={data} key={i}/>
                })}
            </Carousel>
            <Divider>
                <Chip color="primary" label="Click here to find out more" onClick={() => {window.scrollTo(0, 500)}}/>
            </Divider> */}

            <Subheading title="About"/>

            <ProjectAbout projectName={params.projectName}/>

            <Subheading title="Features"/>

            <Box sx={{display: "flex", flexDirection:"row", justifyContent: "center", flexWrap: "nowrap", gap: "15%", alignItems: "flex-start"}}>
                <Box sx={{display: "flex", flexDirection:"column", alignItems: "center", width: "40%", minWidth: "350px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}}>
                    <Typography variant="h4" sx={{padding: "20px"}}>
                        <strong>Current Features</strong>
                    </Typography>
                    <Divider flexItem={true}/>
                    <Box sx={{display: "flex", flexDirection:"column", width:"100%", justifyContent: "center"}}>
                        <ProjectCurrentFeatures projectName={params.projectName}/>
                    </Box>
                </Box>

                <Box sx={{display: "flex", flexDirection:"column", alignItems: "center", width: "40%", minWidth: "350px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}}>
                    <Typography variant="h4" sx={{padding: "20px"}}>
                        <strong>Future Features</strong>
                    </Typography>
                    <Divider flexItem={true}/>
                    <Box sx={{display: "flex", flexDirection:"column", width:"100%", justifyContent: "center"}}>
                        <ProjectFutureFeatures projectName={params.projectName}/>
                    </Box>
                </Box>
            </Box>

        </div>
        </>
    )
}

export default Project;