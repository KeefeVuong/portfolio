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



const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(','),
  },});

const carouselStyle = {
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "25px",
}

const testData = [
    "data:image/jpeg;base64,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",
    "data:image/png;base64,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"
]

const githubLinks = {
    "Discord Bot": "https://github.com/KeefeVuong/discordbot",
    "Hangman Game": "https://github.com/KeefeVuong/hangman"
}


const Project = () => {
    const params = useParams();
    return (
        <>
        <div style={{margin: "35px"}}>

        <ThemeProvider theme={theme}>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography variant="h3">
                    <strong>{params.projectName}</strong>
                </Typography>
                <GithubButton url={githubLinks[params.projectName]}/>
            </Box>
            <Divider/>
            <Carousel
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
            </Divider>

            <Subheading title="About"/>

            <ProjectAbout projectName={params.projectName}/>

            <Subheading title="Features"/>

            <Box sx={{display: "flex", flexDirection:"row", justifyContent: "center", flexWrap: "wrap", gap: "15%", alignItems: "flex-start"}}>
                <Box sx={{display: "flex", flexDirection:"column", alignItems: "center", width: "40%", minWidth: "350px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}}>
                    <Typography variant="h4" sx={{padding: "20px"}}>
                        <strong>Current Features</strong>
                    </Typography>
                    <Divider flexItem={true} variant="middle" sx={{marginBottom: "30px"}}/>
                    <Box sx={{display: "flex", flexDirection:"column", width:"100%", justifyContent: "center"}}>
                        <ProjectCurrentFeatures projectName={params.projectName}/>
                    </Box>
                </Box>

                <Box sx={{display: "flex", flexDirection:"column", alignItems: "center", width: "40%", minWidth: "350px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}}>
                    <Typography variant="h4" sx={{padding: "20px"}}>
                        <strong>Future Features</strong>
                    </Typography>
                    <Divider flexItem={true} variant="middle" sx={{marginBottom: "30px"}}/>
                    <Box sx={{display: "flex", flexDirection:"column", width:"100%", justifyContent: "center"}}>
                        <ProjectFutureFeatures projectName={params.projectName}/>
                    </Box>
                </Box>
            </Box>

        </ThemeProvider>
        </div>
        </>
    )
}

export default Project;