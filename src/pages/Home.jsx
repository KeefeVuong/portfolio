import React from 'react';
import { Typography, Fade, Container, Box, Paper } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const titleStyle = {
    textAlign: "center"
}

const textBox = {
    border: "1px solid black",
    borderRadius: "5",
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

    return (
        <>
        <Box>
            <Fade in={true} timeout={3000}>
                <Box
                sx={backgroundStyle}
                >
                    <Typography variant="h3" component="h2" sx={titleStyle}>
                        HELLO THERE!
                    </Typography>
                    <Paper elevation={3}>
                        <Typography variant="body1" sx={textBox}>
                            This is a website I have constructed to document my coding journey. 
                            If you've managed to stumble across you're probably a recruitor or someone interested in my work. <br/>
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