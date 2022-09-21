import { Avatar, createTheme, Paper, TextField, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { ButtonComponent } from './ComponentList/ButtonComponent'
import { CheckboxComponent } from './ComponentList/CheckboxComponent'
import { RadioButtonComonent } from './ComponentList/RadioButtonComonent'
import { RatingComponent } from './ComponentList/RatingComponent'
import { SwitchComponent } from './ComponentList/SwitchComponent'
import { Grid } from '@mui/material'
import { InsetDividersComponent } from './ComponentList/InsetDividersComponent'
import { TableComponent } from './ComponentList/TableComponent'
import { TypographyComponent } from './ComponentList/TypographyComponent'

import { PaperComponent } from './ComponentList/PaperComponent'


export const FrontComponent = () => {

    /**
     * 사용할 컴포넌트 목록
     *  Button
     *  Checkbox
     *  Radio Button
     *  Rating
     *  Switch - Customize
     *  Text field
     *  Avartar
     *  Divider
     *  Table
     *  Typeography
     *  Backdrop
     *  Paper
     *  Bottom navigation
     *  Drawer  
     *  Menu
     *  Stepper
     *  Tab
     * 
     */





    return (
        <div>

            <Grid container spacing={2}>
                <Grid item xs={4}>

                    <h2>버튼</h2>
                    <ButtonComponent />
                    <CheckboxComponent />
                </Grid>

                <Grid item xs={4}>
                    <RadioButtonComonent />
                    <RatingComponent />
                    <SwitchComponent />
                </Grid>

                <Grid item xs={4}>
                    <TextField />
                    <Avatar />
                    <InsetDividersComponent />
                </Grid>
                <Grid item xs={12} ml={37.5} mr={37.5}>
                    <TableComponent />
                </Grid>

                <Grid item xs={12}>
                    <TypographyComponent />
                </Grid>
                <Grid item xs={12}>
                    <PaperComponent />
                </Grid>
            </Grid>


        </div >
    )
}
