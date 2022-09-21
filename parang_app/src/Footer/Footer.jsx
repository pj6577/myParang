import { Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as ParangLogo } from './parangLogo.svg';

export const Footer = () => {
  return (
    <div>
      <div style={{ width: '100vw', height: '10vh', backgroundColor: '#2d3d5e', display: 'flex', justifyContent: 'space-Between' }}>
        <div style={{ padding: 10, position: 'relative' }}>
          <span style={{ display: 'flex' }}>
            <Typography sx={{ color: 'white', fontWeight: '700', fontFamily: 'Gsans_Medium', justifyContent: 'center', alignItem: 'center', display: 'flex' }}>
              (주)
            </Typography>
            <Typography sx={{ color: 'white', fontFamily: 'Gsans_Medium' }}>
              &nbsp;Wave_Way
            </Typography>
          </span>
          <span style={{ display: 'flex' }}>
            <Typography sx={{ color: 'white', fontWeight: '500', fontSize: '2px', fontFamily: 'Gsans_Medium', justifyContent: 'center', display: 'flex' }}>
              서울 동작구 상도로 66길 15 - 웬투스빌 503호
            </Typography>
          </span>
          <span style={{ display: 'flex', paddingTop: '3px' }}>
            <Typography sx={{ color: 'white', fontWeight: '700', fontSize: '2px', fontFamily: 'Gsans_Medium', justifyContent: 'center', display: 'flex' }}>
              Contact us
            </Typography>
            <Typography sx={{ color: 'white', fontWeight: '300', fontSize: '2px', fontFamily: 'Gsans_Medium', justifyContent: 'center', display: 'flex' }}>
              &nbsp;wave.parang@gmail.com
            </Typography>
          </span>

        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: '20px' }}>
          <ParangLogo style={{ width: '55', fill: 'white' }} />
        </div>
      </div>
    </div >
  )
}
