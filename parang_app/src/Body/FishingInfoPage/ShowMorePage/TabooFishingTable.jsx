import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const TabooFishingTable = ({ ...item }) => {

    const changeNull = (data) => {
        if (data === null) {
            return "없음"
        }
        else if (data !== null) {
            return data + "cm"
        }
    }


    console.log(item.speciesImageSrc)


    return (
        <Card sx={{ width: '100%' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.species}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    기간 : {item.prohibitionStartDate} ~ {item.prohibitionEndDate}<br />
                    금지 체장 : {changeNull(item.prohibitionBody)}
                </Typography>
                <CardMedia
                    component="img"
                    height='100%'

                    image={item.speciesImageSrc}
                    alt={item.species}
                />
            </CardContent>

        </Card>
    );
}
