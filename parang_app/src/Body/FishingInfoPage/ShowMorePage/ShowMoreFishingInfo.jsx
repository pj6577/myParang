import React from 'react';
import {TabooFishingTable} from "./TabooFishingTable";
import Typography from "@mui/material/Typography";

const ShowMoreFishingInfo = () => {
    return (
        <div>
            <Typography textAlign={'center'}>오늘의 금어기 정보</Typography>
            <TabooFishingTable/>
        </div>
    );
};

export default ShowMoreFishingInfo;
