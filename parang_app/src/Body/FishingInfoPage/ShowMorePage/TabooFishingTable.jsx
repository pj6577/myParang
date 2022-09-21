import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const TabooFishingTable=()=> {
    return (
        <Card sx={{ width:'100%'}}>
            <CardActionArea>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        오늘의 금어기 정보
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        명태 : 8월~9월
                        오징어 : 10월~11월
                    </Typography>
                    <CardMedia
                        component="img"
                        height="140"
                        width = "50"
                        image="../../../낚시배샘플.jpg"
                        alt="green iguana"
                    />
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}
