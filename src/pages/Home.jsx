import React from 'react';
import { Typography, Fade, Container, Box, Paper, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const titleStyle = {
    textAlign: "center",
    marginBottom: "15px"
}

const textBox = {
    textAlign: "center",
}

const backgroundStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid red",
    height: "90vh"
}

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
        <Box>
            <Fade in={true} timeout={3000}>
                <Box
                sx={backgroundStyle}
                >
                    <Button variant="contained" sx={titleStyle} onClick={() => navigate("/portfolio/about")}>
                        <Typography variant="h3" component="h2">
                            HELLO THERE!
                        </Typography>
                    </Button>
                    <Paper elevation={3} sx={{width: "50%", padding: "5px", border: "1px solid black"}}>
                        <Typography variant="body1" sx={textBox}>
                            This is a website I have constructed to document my coding journey. 
                            If you've managed to stumble across you're probably a recruitor or someone interested in my work.
                            Please use the navigation bar to discover more about me!
                        </Typography>
                    </Paper>
                </Box> 
            </Fade>
        </Box>
        </>
    )
}

export default Home;