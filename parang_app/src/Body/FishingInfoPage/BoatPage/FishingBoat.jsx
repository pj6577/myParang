import React from 'react';
import { BoatCardSection } from './BoatCardSection'
import { Grid } from '@mui/material'
import { Box } from '@mui/material';

const FishingBoat = ({ btList }) => {

    return (

        <div style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
            {btList.length === 0 ?<Grid item>지역을 먼저 입력해주세요.</Grid> : 
            <Box>
                {btList.map((item, idx) => {
                    return (

                        <Box sx={{ width: '100%' }}
                             key={idx}>
                            <BoatCardSection {...item} />
                        </Box>
                    )
                })}

            </Box>}
        </div>
    );
};

export default FishingBoat;
