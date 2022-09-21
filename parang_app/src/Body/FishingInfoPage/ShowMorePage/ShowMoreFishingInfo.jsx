import React from 'react';
import { TabooFishingTable } from "./TabooFishingTable";
import Typography from "@mui/material/Typography";
import { useStores } from "../../../states/Context";
import { useObserver } from "mobx-react";
import {useEffect, useState } from "react";
import axios from "axios";
import {API_BASE_URL} from "../../../config/API-Config";
import moment from "moment";


function useStoreData() {
    const { dateStore } = useStores();

    return useObserver(() => ({
        dates: dateStore.dates
    }))
}

const ShowMoreFishingInfo = () => {
    const [tabooList , setTabooList] = useState([]);
    const { dates } = useStoreData();
    const dateForTaboo = moment(dates).format("YYYY-MM-DD")
    console.log(dates)

    useEffect(() => {
        console.log(dates);
        axios.post(API_BASE_URL+"/taboo/retrieve", { "prohibitionStartDate": dateForTaboo }).then((res) => {
            console.log("taboo axios 통신실행")
            console.log(res.data.resList);
            setTabooList(res.data.resList);
        })
    }, [dates])


    return (
        <div style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
            <Typography textAlign={'center'}>{dates} 금어기</Typography>
            <Typography>{ }</Typography>

            {tabooList.map((item, idx) => {

                return (
                    < TabooFishingTable key={idx} {...item} />
                )
            })}

        </div>
    );
};

export default ShowMoreFishingInfo;
