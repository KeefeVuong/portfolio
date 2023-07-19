import React from 'react';
import { Typography, Fade, Container, Box, Paper, Button, Avatar } from '@mui/material';
import profile from "../imgs/profile.jpeg"
import { useNavigate } from "react-router-dom";
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const avatarStyle = {
    width: 400, 
    height: 400, 
    margin: "20px 0px"
}


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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "88vh",
    width: "100%"
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
                    {/* <Paper elevation={2} sx={welcomeMessage}>
                        <Typography variant="h2" sx={welcomeTitle}>Welcome!</Typography>
                        <Typography variant="h4" sx={textBox}>
                            This is a website I have constructed to document my coding journey. 
                            <br/>
                            Please use the navigation bar to discover more!
                        </Typography>
                        <Button variant="contained" size="lg" onClick={() => navigate("/about")}>
                            Explore more about me <KeyboardArrowRight/>
                        </Button>
                    </Paper> */}
    
                    <Box>
                        <Typography variant="h4">
                            &lt;&gt;
                        </Typography>
                        <Box marginLeft="60px">
                            <Typography variant="h3" marginBottom="15px">
                                Hi!<br/>
                                I'm <Box component="span" color="#81c784">Keefe Vuong</Box>
                            </Typography>
                            <Typography variant="h5" marginBottom="25px">
                                I've created this website to document my programming journey!
                                <br/>
                                Please use the navigation bar to discover more
                            </Typography>

                            <Button variant="contained" size="lg" onClick={() => navigate("/about")}>
                                Explore more about me <KeyboardArrowRight/>
                            </Button>
                        </Box>
                        <Typography variant="h4" marginTop="10px">
                            &lt;&frasl;&gt;
                        </Typography>
                    </Box>

                    <Avatar
                    alt="Profile pic"
                    src={profile}
                    sx={avatarStyle}
                    />
                </Box> 
            </Fade>
        </Box>
        </>
    )
}

export default Home;