import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import {API_BASE_URL} from '../../config/API-Config'
import {useStores} from "../../states/Context";

function SignInComponent() {
  const navigate = useNavigate();
  const {dateStore} = useStores();

  console.log(dateStore.dates);
  const signIn= (UserDTO)=> {
    axios({
      url : API_BASE_URL+"/user/signin",
      method: 'post',
      data: UserDTO
    }).then((response) => {
      console.log(response.data.token);
      if (response.data.token) {
        localStorage.setItem("Authorization", `Bearer ${response.data.token}`);
      }
      navigate("/");
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("userEmail");
    const password = data.get("userPassword");
    console.log(username + "\n" + password)
    signIn({ userEmail: username, userPassword: password });
  }

  return (

    <Container component='main' maxWidth="xs" style={{ marginTop: '8%' }}>
      <button>
        <Link to='/'>홈으로 가기</Link>
      </button>
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item xs={12}>
          <Typography component="h1" variant='h5'>
            <span>SignIn</span>
            <i className="fa-solid fa-key" style={{ marginLeft: '10px', color: '#ccc' }}></i>
          </Typography>
        </Grid>
      </Grid>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='userEmail'
              name='userEmail'
              label="아이디"
              autoComplete='username'
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='userPassword'
              type='password'
              name='userPassword'
              label="비밀번호"
              autoComplete='password'
            />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' fullWidth variant='contained' color='primary'>
              Signin
            </Button>
          </Grid>
          <Grid item xs={12}>
            <i className="fa-solid fa-bell" style={{ color: 'crimson', marginRight: '5px' }}></i>
            <Link to="/signup" variant="body2" style={{ textDecoration: 'none', color: 'steelblue' }}>
              <span>Join us</span>
            </Link>
          </Grid>
        </Grid>
      </form>

    </Container>


  )
}

export default SignInComponent