import React from 'react'

import Card from '@mui/material/Card';
import { CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';

export const CharacterGrid = ({ name, description, thumbnail }) => {
    // console.log(thumbnail)
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={thumbnail}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
            <br />
        </div>
    )
}
