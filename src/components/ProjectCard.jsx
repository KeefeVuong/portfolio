import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Box, Rating } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

const ProjectCard = ({title, completed, language, img, rating}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${title}`)
    }   

    return (
        <Card sx={{ width: 345, height: 290}} onClick={handleClick}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200px"
              image={img}
              alt="green iguana"
            />
            <CardContent>
              <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="subtitle2">
                    {language}
                </Typography>
              </Box>
              <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Rating readOnly value={rating} size="small"></Rating>
                {completed ?  
                <Typography variant="body2" color="text.secondary">
                  COMPLETED
                </Typography> : 
                <Typography variant="body2" color="text.secondary">
                  INCOMPLETE
                </Typography>}
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default ProjectCard;