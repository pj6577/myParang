import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Paper, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { WeatherTable } from "./table/WeatherTable";
import axios from "axios";
import TemparatureGraph from "./chart/TemparatureGraph";


const FishingWeather = ({ tdWeather }) => {
    
    return (
        <div>{tdWeather.length === 0 ?<Grid item>지역을 먼저 입력해주세요.</Grid> :  <Grid container display={'inline-block'}>
        <Grid item gap={2}>
            <Paper elevation={2}>
                <Grid item>
                    지역 :   {tdWeather[0].fcst_harbor_name}
                </Grid>
                <Grid item>
                    날짜 :   {tdWeather[0].fcst_date}
                </Grid>
            </Paper>
        </Grid>
        <Paper>
            <Box>
                <Box>
                    <TemparatureGraph tdWeather={tdWeather} />
                    <WeatherTable tdWeather={tdWeather} />
                </Box>
            </Box>
        </Paper>
    </Grid>}
           
        </div>
    );
};

export default FishingWeather;
