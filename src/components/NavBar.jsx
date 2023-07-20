import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
    Link
} from "react-router-dom";

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography variant="h6" component="div">
                    Portfolio
                </Typography>
                <Box>
                    <Button component={Link} to="/" color="inherit">
                        HOME
                    </Button>
                    <Button component={Link} to="/projects" color="inherit">
                        PROJECTS
                    </Button>
                    <Button component={Link} to="/about" color="inherit">
                        ABOUT
                    </Button>
                </Box>
            </Toolbar>
          </AppBar>
        </Box>
    );
}

export default NavBar;