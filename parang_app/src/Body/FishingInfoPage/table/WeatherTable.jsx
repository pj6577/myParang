import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Container, fontSize, fontWeight, width } from '@mui/system';
import SouthIcon from '@mui/icons-material/South';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import SouthWestIcon from "@mui/icons-material/SouthWest";
import EastIcon from "@mui/icons-material/East";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import WestIcon from "@mui/icons-material/West";
import NorthIcon from "@mui/icons-material/North";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import axios from 'axios';
import { useState, useEffect } from "react"
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import { BsSun } from 'react-icons/bs';
import { BsClouds } from 'react-icons/bs';
import { BsCloudSun } from 'react-icons/bs';
import { WiDayRain } from 'react-icons/wi';
import { WiSnowWind } from 'react-icons/wi';
import { WiRainMix } from 'react-icons/wi';
import { WiRain } from 'react-icons/wi';
import { WiDaySunny } from 'react-icons/wi';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const ptyIcon = (value) => {
    if (value == 0) {
        //없음
        return (
            <WiDaySunny style={{ fontSize: "25px" }} />
        )

    }
    else if (value == 1) {
        //비
        return (
            <WiRain style={{ fontSize: "25px" }} />
        )
    }
    else if (value == 2) {
        //눈,비
        return (
            <WiRainMix style={{ fontSize: "25px" }} />
        )
    }
    else if (value == 3) {
        //눈
        return (
            <WiSnowWind style={{ fontSize: "25px" }} />
        )
    }
    else if (value == 4) {
        //소나기
        return (
            <WiDayRain style={{ fontSize: "25px" }} />
        )
    }
}

const skyIcon = (value) => {
    if (value == 1) {
        //맑음
        return (
            <BsSun style={{ fontSize: "25px" }} />

        )
    }
    else if (value == 3) {
        //구름 많음
        return (
            <BsClouds style={{ fontSize: "25px" }} />
        )
    }
    else if (value == 4) {
        //흐림
        return (
            <BsCloudSun style={{ fontSize: "25px" }} />
        )
    }

}

const directionArrow = (value) => {
    if (value >= 247.5 && value <= 292.5) {
        return (
            <SouthIcon></SouthIcon>
        )
    }
    else if (value > 202.5 && value < 247.5) {
        return (
            <SouthEastIcon></SouthEastIcon>
        )
    }
    else if (value > 292.5 && value < 337.5) {
        return (
            <SouthWestIcon></SouthWestIcon>
        )
    }
    else if (value >= 157.5 && value <= 202.5) {
        return (
            <EastIcon></EastIcon>
        )
    }
    else if (value > 112.5 && value < 157.5) {
        return (
            <NorthEastIcon></NorthEastIcon>
        )
    }

    else if (value >= 67.6 && value <= 112.5) {
        return (
            <NorthIcon></NorthIcon>
        )
    }
    else if (value >= 337.5 && value <= 360 || value >= 0 && value <= 22.5) {
        return (
            <WestIcon></WestIcon>
        )
    } else if (value > 22.5 && value < 67.5) {
        return (
            <NorthWestIcon></NorthWestIcon>
        )
    }
}

const timeModify = (value) => {
    return value.substr(0, 2)
}
const dateModify = (value) => {
    return value.substr(4)
}

export const WeatherTable = ({ tdWeather }) => {

    const changePcp = (data) => {
        if (data == "강수없음") {
            return "0mm";
        }
        else {
            return data;
        }
    }

    return (
        <Container css={cssWrapper}>
            <div className='table-container' style={{ width: '100%', height: '50vh', overflow: 'auto' }}>

                <Table>
                    <tbody>
                    <TableRow className='row-style'>
                        <TableCell className="header" variant="head" >
                            <h1 className="head" >강수확률</h1>
                        </TableCell>
                        {tdWeather.map((item, idx) => (
                            <TableCell

                                className='tableCell'
                                key={idx}>
                                {item.fcst_pop} %
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow className='row-style'>
                        <TableCell className="header" variant="head">
                            <h1 className="head" >강수량</h1></TableCell>
                        {tdWeather.map((item, idx) => (
                            <TableCell

                                className='tableCell'
                                key={idx}>
                                {changePcp(item.fcst_pcp)}
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow className='row-style' >
                        <TableCell className="header" variant="head" >
                            <h1 className="head">강수형태</h1></TableCell>
                        {tdWeather.map((item, idx) => (
                            <TableCell

                                className='tableCell'
                                key={idx}>
                                {ptyIcon(item.fcst_pty)}
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow className='row-style'>
                        <TableCell className="header" variant="head" >
                            <h1 className="head" >습도</h1></TableCell>
                        {tdWeather.map((item, idx) => (
                            <TableCell

                                className='tableCell'
                                key={idx}>
                                {item.fcst_reh} hmd
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow className='row-style'>
                        <TableCell className="header" variant="head">
                            <h1 className="head">풍향</h1></TableCell>
                        {tdWeather.map((item, idx) => (
                            <TableCell

                                className='tableCell'
                                key={idx}>
                                {directionArrow(item.fcst_vec)}
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow className='row-style' >
                        <TableCell className="header" variant="head" >
                            <h1 className="head">하늘상태</h1></TableCell>
                        {tdWeather.map((item, idx) => (
                            <TableCell

                                className='tableCell'
                                key={idx}>
                                {skyIcon(item.fcst_sky)}
                            </TableCell>
                        ))}
                    </TableRow>

                    <TableRow className='row-style' >
                        <TableCell className="header" variant="head" >
                            <h1 className="head">시간</h1></TableCell>
                        {tdWeather.map((item, idx) => (
                            <TableCell

                                className='tableCell'
                                key={idx}>
                                {dateModify(item.fcst_date)}<br />
                                {timeModify(item.fcst_time)} 시
                            </TableCell>
                        ))}
                    </TableRow>
                    </tbody>



                </Table>

            </div >
        </Container >
    );
}

const cssWrapper = css`
    .head{
        width:40px;

        font-size: 12px;
        font-weight: 700;
    }

    .row-style{
       
        >.header{
        width : 10px;
        padding: 0;
        
        }
        >.tableCell{
            padding : 2
        }
    }
    
`