import React from 'react';
import { Typography, Paper, Container, Avatar, Divider, Box, List, ListItem, ListItemIcon, Slide } from '@mui/material';
import profile from "../imgs/profile.jpg"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const boxStyle = {
    display: "flex", 
    flexDirection: "column", 
    marginTop: "80px",
    alignItems: "center"
}

const avatarStyle = {
    width: 250, 
    height: 250, 
    margin: "30px 0px"
}

const funFacts = [
    "My top 3 hobbies would be going to the gym, playing games with friends and playing the drums",
    "My name originated from a Chinese fortune teller who only gave my parents the letters k, f and one vowel to use, which is also why I have 3 e's in my name -.-"
]

const About = () => {
    return (
        <>
        <Slide in={true} direction="right" timeout={1000} mountOnEnter unmountOnExit>
            <Container maxWidth="md" >
                <Box sx={boxStyle}>
                    <Typography variant="h3">Hi! My name is Keefe</Typography>
                    <Avatar
                    alt="Remy Sharp"
                    src={profile}
                    sx={avatarStyle}
                    />
                    <Divider flexItem={true} sx={{marginBottom: "30px"}}/>
                </Box>
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
            </Container>
        </Slide>
            
        </>
    )
}

export default About;