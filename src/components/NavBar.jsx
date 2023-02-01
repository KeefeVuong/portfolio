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
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Keefe Vuong
                </Typography>
                <Button component={Link} to="/portfolio/" color="inherit">
                    HOME
                </Button>
                <Button component={Link} to="/portfolio/projects" color="inherit">
                    PROJECTS
                </Button>
                <Button component={Link} to="/portfolio/about" color="inherit">
                    ABOUT ME
                </Button>
            </Toolbar>
          </AppBar>
        </Box>
    );
}

export default NavBar;