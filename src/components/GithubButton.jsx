import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography, Container, Rating, Button, Popover, Box, Divider, Chip, Paper, IconButton} from '@mui/material';

function GithubButton({url}) {
  return (
    <IconButton onClick={() => {window.open(url, "_blank")}}><GitHubIcon/></IconButton>
  )
}

export default GithubButton