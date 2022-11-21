import React from 'react';
import { Typography, Fade, Container, Box} from '@mui/material';

const titleStyle = {
    textAlign: "center"
}

const textBox = {
    border: "1px solid black",
    borderRadius: "5",
}

const Home = () => {

    return (
        <>
        <Fade in={true} timeout={3000}>
            <Container maxWidth="sm">
                <Typography sx={titleStyle} variant="h3" component="h2">
                    Come visit my coding journey
                </Typography>
                <Box sx={textBox}>
                    Hello there
                </Box>
            </Container>
        </Fade>
        </>
    )
}

export default Home;