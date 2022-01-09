import React from 'react'

import Card from '@mui/material/Card';
import { CardContent, CardMedia, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';


export const CharacterGrid = ({ name, description, thumbnail }) => {
    // console.log(thumbnail)
    return (
        <>
                <Grid item xs={4} md={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={thumbnail}
                            alt={name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
        </>
    )
}
