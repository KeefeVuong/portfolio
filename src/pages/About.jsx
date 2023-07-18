import { React, useState } from 'react';
import { Typography, Paper, Container, Avatar, Divider, Box, List, ListItem, ListItemIcon, Slide, IconButton, Icon } from '@mui/material';
import profile from "../imgs/profile.jpg"
import ato_logo from "../imgs/ato_logo.png"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const boxStyle = {
    display: "flex", 
    flexDirection: "column", 
    marginTop: "15px",
    alignItems: "center"
}

const avatarStyle = {
    width: 250, 
    height: 250, 
    margin: "20px 0px"
}

const currentEmploymentBox = {
    display: "flex",
    alignItems: "center"
}

const atoLogoStyle = {
    width: 68,
    height: 68,
    marginRight: "10px"
}

const funFacts = [
    "My top 3 hobbies would be going to the gym, playing games with friends and playing the drums",
    "My name originated from a Chinese fortune teller who only gave my parents the letters k, f and one vowel to use, which is also why I have 3 e's in my name -.-"
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
                    <Typography variant="h5">I'm currently a <strong>third year</strong> university student studying a <strong>Bachelor of Computer Science</strong> at UNSW.</Typography>
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
                    <Box sx={currentEmploymentBox}>
                        <Avatar
                        alt="Remy Sharp"
                        src={ato_logo}
                        sx={atoLogoStyle}
                        />
                        <Typography variant="h5"><strong>APS 4 IT Application Developer</strong> @ Australian Taxation Office</Typography>
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
                    <Typography variant="h3">Hi! My name is Keefe</Typography>
                    <Avatar
                    alt="Remy Sharp"
                    src={profile}
                    sx={avatarStyle}
                    />
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