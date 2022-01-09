import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { SeriesGrid } from './SeriesGrid';

export const SeriesScreen = () => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = async () => {
        const url = 'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=a469d537242aa86366793c4d967002ba&hash=7f20301e7b4fa19a61cffb032aab3714&limit=30';

        const resp = await fetch(url);
        const { data } = await resp.json();
        // console.log(data);

        const series = data.results.map(results => {
            return {
                id: results.id,
                title: results.title,
                description: results.description,
                thumbnail: results.thumbnail.path + "." + results.thumbnail.extension
            }
        })

        // console.log(series);
        setSeries(series);
    }

    return (
        <div>
            <Typography gutterBottom variant="h2" component="h2">
                Series
            </Typography>
            <Grid container spacing={2}>
                {
                    series.map(serie => (

                        <SeriesGrid
                            key={serie.id}
                            {...serie}
                        />
                    ))
                }
            </Grid>
        </div>
    )
}
