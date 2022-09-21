import React, { useState } from 'react'
import { Container } from '@mui/material';
import { Grid, Box, Paper, Typography } from '@mui/material';
import { AvatarComponent } from '../../ComponentList/AvatarComponent';
import { InsetDividersComponent } from '../../ComponentList/InsetDividersComponent';
import { BasicUserProfile } from './BasicUserProfile';
import { API_BASE_URL } from '../../config/API-Config';
import axios from 'axios';


export const MyPage = () => {

  const [putComponent, setPutComponent] = useState(<BasicUserProfile />);
  const [userInfo, setUserInfo] = useState([]);
  React.useEffect(() => {
    axios
        .get(API_BASE_URL + "/user/getUserInfo", {
          headers: { Authorization: localStorage.getItem("Authorization") },
        })
        .then((res) => {
          console.log(res.data);
          setUserInfo(res.data);
        })
        .catch();
  }, []);


  return (
      <div>
        <Container >
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Box className='profile' sx={{ height: '100vh' }}>
                <Paper elevation={3} height={'100vh'}>
                  <Container >
                    <Grid item my={2}>
                      {/* 프로필 로고 */}
                      <Typography p={2}
                                  width={'100%'}
                                  align='center'
                                  variant="h6"
                                  noWrap
                                  component="a"
                                  href="/"
                                  sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'GmarketSansMedium',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                  }}
                      >로고이미지 + 파랑 ID
                      </Typography>
                    </Grid>
                    <Grid item >
                      {/* 프로필 아바타 */}
                      <AvatarComponent />
                    </Grid>
                    <Grid item mb={-0.5}>
                      <Typography variant='h5' align='center'>
                        {userInfo.userName}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='body2' align='center'>
                        {userInfo.userEmail}
                      </Typography>
                    </Grid>
                    <Grid item>
                      {/* 좌측 프로필 컴포넌트에게 함수전달 */}
                      <InsetDividersComponent setPutComponent={setPutComponent} />
                    </Grid>
                  </Container>


                </Paper>

              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box className='profile_modify' sx={{ height: '100vh' }}>
                <Box sx={{ bgcolor: 'white', height: '100%' }}>
                  {putComponent}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div >
  )
}