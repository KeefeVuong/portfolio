import React from 'react'
import { Typography, Container, Rating, Button, Popover, Box, Divider, Chip, Paper } from '@mui/material';

function Subheading({title}) {
  return (
    <>
    <Typography variant="h4" sx={{marginTop: "30px"}}>
        <strong>{title}</strong>
    </Typography>
    <Divider sx={{marginBottom: "30px"}}/>
    </>
  )
}

export default Subheading