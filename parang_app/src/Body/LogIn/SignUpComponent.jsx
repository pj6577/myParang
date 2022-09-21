import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'

import axios from 'axios'
import {API_BASE_URL} from '../../config/API-Config'


function SignUpComponent() {
    const navigate = useNavigate();
    const [certificationNum, setCertificationNum] = useState(""); //컨트롤러에서 받은 인증 번호
    const [checkNum, setCheckNum] = useState(""); // 사용자가 입력한 인증번호
    const [certificated , setCertificated ] = useState(false);
    const [uEmail, setUEmail] = useState("");


    const signUp = (UserDTO) => {
        axios({
            method: 'post',
            data: UserDTO,
            url: API_BASE_URL + "/user/signup"
        })
            .then((response) => {
              if(response.data !==null){
                navigate("/signin");
              }
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hi");
        const data = new FormData(e.target);
        const userEmail = data.get("userEmail");
        const userPassword = data.get("userPassword");
        const userName = data.get("userName")
        const userNickName =data.get("userNickName")
        const userPNum = data.get("userPNum");
        const userAge = data.get("userAge");
        const userSex = data.get("userSex");
        if(certificated){
            signUp({ userEmail: userEmail, userPassword: userPassword, userName: userName,
                userNickName: userNickName, userPNum : userPNum,
                userAge: userAge, userSex: userSex });
        }else{
            alert("이메일 인증을 먼저 해주세요.")
        }

    }
    //이메일 인증코드 요청 보내는 함수
    const certificationEmail = (e) => {
        e.preventDefault();
        console.log(uEmail);
        axios.post(API_BASE_URL+"/mail/send", { address : uEmail })
            .then((res)=>{
                console.log(res.data)
                setCertificationNum(res.data);
            })
            .catch()
    }
    //사용자가 입력한 인증코드와 컨트롤러에서 리턴된 인증코드 비교
    const checkCerNum = (e) => {
        e.preventDefault();
        if(certificationNum === checkNum){
            alert("확인완료")
            setCertificated(true);
        }else{
            alert("다시 입력하시오.")
        }

    }
    //사용자가 입력한 인증코드 값 set
    const checkNumOnChange = (e) => {
        console.log(checkNum);
        setCheckNum(e.target.value);
    }
    const userEmailOnChange = (e) => {
        setUEmail(e.target.value);
    }

    return (

        <Container component='main' maxWidth="xs" style={{ marginTop: '8%' }}>
            <button>
                <Link to='/'>홈으로 가기</Link>
            </button>
            <Grid container spacing={2} style={{ marginBottom: '20px' }}>
                <Grid item xs={12}>
                    <Typography component="h1" variant='h5'>
                        <span>계정생성</span>
                        <i className="fa-solid fa-user-pen" style={{ marginLeft: '10px', color: '#ccc' }}></i>

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
                            type='email'
                            name='userEmail'
                            label="이메일"
                            autoComplete='userEmail'
                            autoFocus
                            onChange={userEmailOnChange}
                            value = {uEmail}
                        />
                        <Grid>
                            <Button onClick={certificationEmail}>이메일 인증</Button>
                            <TextField
                                variant='outlined'
                                onChange={checkNumOnChange}
                                value = {checkNum}>

                            </TextField>
                            <Button onClick={checkCerNum}>확인</Button>
                        </Grid>
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
                            autoComplete='userPassword'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            id='userName'
                            type='text'
                            name='userName'
                            label="이름"
                            autoComplete='userName.'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            id='userNickName'
                            type='text'
                            name='userNickName'
                            label="닉네임"
                            autoComplete='userNickname'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            id='userPNum'
                            type='text'
                            name='userPNum'
                            label="전화번호"
                            autoComplete='userPNum'
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            id='userAge'
                            type='text'
                            name='userAge'
                            label="나이"
                            autoComplete='userAge'
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            id='userSex'
                            type='text'
                            name='userSex'
                            label="성별"
                            autoComplete='userSex'
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type='submit' fullWidth variant='contained' color='primary'>
                            Create account
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <i className="fa-solid fa-bell" style={{ color: 'crimson', marginRight: '5px' }}></i>
                        <Link to="/signin" variant="body2" style={{ textDecoration: 'none', color: 'steelblue' }}>
                            <span>Alreay have an account? Please log in here</span>
                        </Link>
                    </Grid>
                </Grid>
            </form>

        </Container>
    )
}

export default SignUpComponent