import React from 'react';
import { Typography, Fade, Container, Box, Paper, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


const titleStyle = {
    textAlign: "center",
    marginBottom: "15px",
}

const textBox = {
    textAlign: "center",
    marginBottom: "75px"
}

const backgroundStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh"
}

const welcomeTitle = {
    textAlign: "center",
    margin: "25px",
    fontWeight: "bold"
}

const welcomeMessage = {
    width: "80%",
    height: "60%",
    padding: "5px", 
    borderRadius: "50px",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "rgba(125, 125, 125, 0.4)",
    color: "white",
}

const Home = () => {
    const navigate = useNavigate()

    return (
        <>
        <Box>
            <Fade in={true} timeout={3000}>
                <Box
                sx={backgroundStyle}
                >
                    <Paper elevation={2} sx={welcomeMessage}>
                        <Typography variant="h2" sx={welcomeTitle}>Welcome!</Typography>
                        <Typography variant="h4" sx={textBox}>
                            This is a website I have constructed to document my coding journey. 
                            <br/>
                            Please use the navigation bar to discover more!
                        </Typography>
                        <Button variant="contained" size="lg" onClick={() => navigate("/about")}>
                            Explore more about me <KeyboardArrowRight/>
                        </Button>
                    </Paper>
                </Box> 
            </Fade>
        </Box>
        </>
    )
}

export default Home;