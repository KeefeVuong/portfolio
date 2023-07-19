import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Box, Rating, Badge, Chip } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
import TerminalIcon from '@mui/icons-material/Terminal';

const ProjectCard = ({title, completed, language, img, rating}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${title}`)
    }   

    return (
        <Card sx={{ width: 345, height: 290, borderRadius: "5%"}} onClick={handleClick}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200px"
              image={img}
              alt="project thumbnail"
              sx={{border:"1px solid", borderStyle:"hidden hidden dotted hidden"}}
            />
            <CardContent sx={{paddingTop: "10px"}}>
              <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography gutterBottom variant="h6" sx={{marginBottom: "12px"}}>
                  <strong>{title}</strong>
                </Typography>
              </Box>
              <Box sx={{display: "flex", justifyContent: "space-between"}}>
                {completed ?  
                  <Chip label="FINISHED" size="small" color="success"/> : 
                  <Chip label="UNFINISHED" size="small" color="error"/>}
                <Typography variant="subtitle2">
                    {language} 
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default ProjectCard;