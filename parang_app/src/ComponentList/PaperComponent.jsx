import { Paper, Grid, Typography } from '@mui/material'
import React from 'react'

export const PaperComponent = () => {

    /**
     *  variant 랑 elevation 은 동시에 먹일 수가 없다 
     */

    return (
        <div>PaperComponent

            <Grid container >
                <Grid item xs={2} >
                    <Paper elevation={3}>
                        <div style={{ height: '1080px', backgroundColor: 'red' }}>
                            <Grid item xs={3}>
                                <Paper elevation={2} m={1}>
                                    맞나요
                                </Paper>
                            </Grid>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper elevation={3}>
                        <div style={{ height: '1080px', backgroundColor: 'red' }}></div>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={3}>
                        <div style={{ height: '1080px', backgroundColor: 'red' }}></div>
                    </Paper>
                </Grid>




            </Grid>




        </div >
    )
}
