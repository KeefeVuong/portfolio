import React from 'react';
import { Typography, Paper, Container, Avatar } from '@mui/material';
import profile from "../imgs/profile.jpg"

const About = () => {
    return (
        <>
        <Container maxWidth="sm" sx={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "80px"}}>
            <Typography variant="h3">Hi! My name is Keefe</Typography>
            <Avatar
            alt="Remy Sharp"
            src={profile}
            sx={{ width: 250, height: 250, marginTop: "30px"}}
            />
        </Container>
            
        </>
    )
}

export default About;