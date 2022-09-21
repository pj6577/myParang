import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/material'
import { Container, palette, width } from '@mui/system';
import { sizing } from '@mui/system';
import { alignProperty } from '@mui/material/styles/cssUtils';
import FloatingActionButtons from '../../ComponentList/FloatingButtonComponent';

export const IntroducingPage = () => {
  return (
    <div>
      <Container maxWidth='80vw'>
        <Box className='인트로 화면 공간' sx={{ height: '100vh', mx: '10vw' }}>
          <Box sx={{ bgcolor: 'error.main', height: '100%' }}>
            인트로 화면 삽입
          </Box>
        </Box>
      </Container>



    </div >
  )
}
