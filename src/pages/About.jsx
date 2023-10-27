import { React, useState } from 'react';
import { Typography, Paper, Container, Avatar, Divider, Box, List, ListItem, ListItemIcon, Slide, IconButton, Icon } from '@mui/material';
import acorn from "../imgs/acorn.jpeg"
import mickey from "../imgs/mickey.jpeg"
import ato_logo from "../imgs/ato_logo.jpeg"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


const boxStyle = {
    display: "flex", 
    flexDirection: "column", 
    marginTop: "20px",
    alignItems: "center"
}

const avatarStyle = {
    width: 225, 
    height: 225, 
    margin: "20px 0px"
}

const currentEmploymentBox = {
    display: "flex",
    alignItems: "center",
}

const atoLogoStyle = {
    width: 68,
    height: 68,
    marginRight: "10px"
}

const funFacts = [
    "My top 3 hobbies would be going to the gym, playing games with friends and playing the drums",
    "A Chinese fortune teller gave my parents the letters k, f and one vowel to name me -.-",   
]

const previousEmployment = [
    "APS 2 Service Delivery Officer @ Australian Taxation Office",
    "Kitchen Crew Member @ McDonalds"
]


const tabs = [
    "intro",
    "experience"
]

const About = () => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)
    const [leftArrowDisabled, setLeftArrowDisabled] = useState(true)
    const [rightArrowDisabled, setRightArrowDisabled] = useState(false)
    
    const showTab = () => {
        let currentTab = tabs[currentTabIndex] 
        if (currentTab === "intro") {
            return (
                <>
                    <Typography variant="h5">I'm currently a <Box component="span" fontWeight="bold">third year</Box> university student studying a <Box component="span" fontWeight="bold">Bachelor of Computer Science</Box> at UNSW.</Typography>
                    <Typography variant="h5"><br/>Here are a few fun facts about myself!</Typography>
    
                    {funFacts.map((item) => {
                        return (<List>
                            <ListItem>
                            <ListItemIcon>
                                <ChevronRightIcon/>
                            </ListItemIcon>
                                <Typography variant="h5">{item}</Typography>
                            </ListItem>
                        </List>)
                    })}
                </>
            )
        }
        else if (currentTab === "experience") {
            return (
                <>
                    <Typography variant="h5"><em>Current:</em></Typography>
                    <Box sx={currentEmploymentBox}>
                        <List>
                            <ListItem>
                            <ListItemIcon>
                                <ChevronRightIcon/>
                            </ListItemIcon>
                                <Avatar
                                alt="Remy Sharp"
                                src={ato_logo}
                                sx={atoLogoStyle}
                                />
                                <Typography variant="h5"><Box component="span" fontWeight="bold">APS 4 IT Application Developer</Box> @ Australian Taxation Office</Typography>
                            </ListItem>
                        </List>
                    </Box>
                    <Typography variant="h5"><br/><em>Previous:</em></Typography>
    
                    {previousEmployment.map((item) => {
                        return (<List>
                            <ListItem>
                            <ListItemIcon>
                                <ChevronRightIcon/>
                            </ListItemIcon>
                                <Typography variant="h5"><em>{item}</em></Typography>
                            </ListItem>
                        </List>)
                    })}
                </>
            )
        }
    }
    
    const shiftLeft = () => {
        setCurrentTabIndex(currentTabIndex - 1)
        setLeftArrowDisabled(false)
        setRightArrowDisabled(false)

        if (currentTabIndex === 1) {
            setLeftArrowDisabled(true)
            return;
        }
    }
    
    const shiftRight = () => {
        
        setCurrentTabIndex(currentTabIndex + 1)
        setLeftArrowDisabled(false)
        setRightArrowDisabled(false)

        if (currentTabIndex === tabs.length - 2) {
            setRightArrowDisabled(true)
            return
        }
    }

    return (
        <>
        <Slide in={true} direction="right" timeout={1000} mountOnEnter unmountOnExit>
            <Container maxWidth="lg" >
                <Box sx={boxStyle}>
                    <Typography variant="h3" marginBottom="50px">Meet my precious babies!</Typography>
                    <Box sx={{display: "flex", gap:"20px", flexWrap: "wrap"}}>
                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Avatar
                            alt="acorn"
                            src={acorn}
                            sx={avatarStyle}
                            />
                            <Box marginLeft="30px" marginRight="30px">
                                <Typography variant="h4" marginBottom="25px">
                                    <b>STATS</b>
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Name:</strong> Acorn [F]<br/>
                                    <strong>Age:</strong> 2 years old<br/>
                                    <strong>Favourite snack:</strong> Mandarins <br/>
                                    <strong>Favourite pastime:</strong> Eating undies<br/>
                                
                                </Typography>
                            </Box>
                        </Box>
                        {/* <Divider orientation="vertical" flexItem></Divider> */}
                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Avatar
                            alt="mickey"
                            src={mickey}
                            sx={avatarStyle}
                            />
                            <Box marginLeft="30px">
                                <Typography variant="h4" marginBottom="25px">
                                    <b>STATS</b>
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Name:</strong> Mickey [F]<br/>
                                    <strong>Age:</strong> 3 years old<br/>
                                    <strong>Favourite snack:</strong> Bones <br/>
                                    <strong>Favourite pastime:</strong> Cobbing toys
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <IconButton onClick={shiftLeft} disabled={leftArrowDisabled}>
                            <KeyboardDoubleArrowLeftIcon/>
                        </IconButton>
                        <IconButton onClick={shiftRight} disabled={rightArrowDisabled}>
                            <KeyboardDoubleArrowRightIcon/>
                        </IconButton>
                    </Box>
                    <Divider flexItem={true} sx={{marginBottom: "30px"}}/>
                </Box>
                <Box>
                    {showTab()}
                </Box>
            </Container>
        </Slide>
            
        </>
    )
}

export default About;