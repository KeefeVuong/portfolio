import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Box } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

const ProjectCard = ({title, description, language, img}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${title}`)
    }   

    return (
        <Card sx={{ minWidth: 345 }} onClick={handleClick}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
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
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default ProjectCard;