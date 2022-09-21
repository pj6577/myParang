
import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Grid, Box } from "@mui/material";
import FishingInfoMap from "./FishingInfoMap";
import { VerticalTabs } from "./VerticalTab";
import { useStores } from "../../states/Context";
import { useObserver } from "mobx-react";
import { API_BASE_URL} from "../../config/API-Config"
import { HowToUse } from './HowToUse';
import moment from 'moment';

function useStoreData() {
    const { countyStore, dateStore } = useStores();


    return useObserver(() => ({
        harbor: countyStore.harbor,
        county: countyStore.county,
        city: countyStore.city,
        dates: dateStore.dates
    }))
}

export const FishingInfoPage = () => {
    const {  harbor, dates } = useStoreData();

    const [putComponent, setPutComponent] = React.useState(<HowToUse />)
    const [tdWeather, setTdWeather] = useState([]);

    const [btList, setBtList] = useState([]);

    useEffect(() => {
        axios.post(API_BASE_URL+"/weather/retrieve", { "harborName": harbor, "fcstDate" :  String(moment(dates).format("YYYYMMDD"))}).then((res) => {
            setTdWeather(res.data.resList)
        }).catch(() => {
            console.log("AXIOS 통신에러")
        })
        axios.post(API_BASE_URL+"/boat/retrieve", { "shpmHangNm": harbor }, null).then((res) => {
            setBtList(res.data.resList)
        }).catch(() => {
            console.log("AXIOS 통신에러")
        })

    }, [harbor, dates])

    return (
        <Grid container>
            <Grid item xs={4}>
                <VerticalTabs tdWeather={tdWeather} btList={btList} putComponent={putComponent} setPutComponent={setPutComponent}/>
            </Grid>
            <Grid item xs={8}>
                <FishingInfoMap setPutComponent={setPutComponent} />
            </Grid>
        </Grid>
    )
}


