import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'

import axios from 'axios'
import { API_BASE_URL } from '../../config/API-Config'


function SignUpComponent() {
    const navigate = useNavigate();
    const [certificationNum, setCertificationNum] = useState(""); //컨트롤러에서 받은 인증 번호
    const [checkNum, setCheckNum] = useState(""); // 사용자가 입력한 인증번호
    const [certificated, setCertificated] = useState(false);
    const [uEmail, setUEmail] = useState("");


    const signUp = (UserDTO) => {
        axios.post(API_BASE_URL + "/user/signup", UserDTO)
            .then((response) => {
                if (response.data !== null) {
                    navigate("/")
                }else{
                    navigate("/whfoiwehoiefhwofeh")
                }
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    
        const data = new FormData(document.getElementById("signup"));
        const userEmail = data.get("userEmail");
        const userPassword = data.get("userPassword");
        const userName = data.get("userName")
        const userProfilePicture = imgs[0];
        const userNickName = data.get("userNickName")
        const userPNum = data.get("userPNum");
        const userAge = data.get("userAge");
        const userSex = data.get("userSex");
        if (certificated) {
            signUp({
                userEmail: userEmail, userPassword: userPassword, userName: userName,
                userNickName: userNickName, userPNum: userPNum,
                userAge: userAge, userSex: userSex,
                userProfilePicture: userProfilePicture

            });
        } else {
            alert("이메일 인증을 먼저 해주세요.")
        }

    }
    //이메일 인증코드 요청 보내는 함수
    const certificationEmail = (e) => {
       
        console.log(uEmail);
        axios.post(API_BASE_URL + "/mail/send", { address: uEmail })
            .then((res) => {
                console.log(res.data)
                setCertificationNum(res.data);
            })
            .catch()
    }
    //사용자가 입력한 인증코드와 컨트롤러에서 리턴된 인증코드 비교
    const checkCerNum = (e) => {
        
        if (certificationNum == checkNum) {
            alert("확인완료")
            setCertificated(true);
        } else {
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
    //이미지 업로드 
    const [imgs, setImgs] = useState([]);


    const handleImgUpload = (e) => {
        const nowSelectImgList = e.target.files;
        console.log(nowSelectImgList);
        const formData = new FormData();

        for (let i = 0; i < nowSelectImgList.length; i++) {
            formData.append("multiPratFile", nowSelectImgList[i]);
        }

        axios.post(API_BASE_URL + '/upload', formData
        )
            .then((res) => {
                setImgs(res.data)
                console.log(res.status)
            })
            .catch((err) => { console.log(err) })
        console.log("1" + nowSelectImgList);
        console.log("2" + formData);
        console.log(nowSelectImgList[0])
        console.log("이미지(imgs) url" + imgs)

    };

    return (
        <div style={{ height: '82vh', display: 'flex', width: '60vw', margin: 'auto' }}>

            <Grid container maxWidth="xs" style={{ justifyContent: 'center', alignContent: 'center' }}>


                <Grid item xs={12}>
                    <Typography style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', fontWeight: '700' }}>
                        계정생성
                    </Typography>
                </Grid>


                <form onSubmit={handleSubmit} id="signup">
                    <Grid container direction={"column"} spacing={1} style={{ display: 'inline-block' }} >
                        <Grid item >
                            <TextField
                                size='small'
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
                                alue={uEmail}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                size='small'
                                variant='outlined'
                                onChange={checkNumOnChange}
                                label="인증번호를 입력해주세요"
                                value={checkNum}>

                            </TextField>
                            <Button onClick={certificationEmail}>이메일 인증</Button>
                            <Button onClick={checkCerNum}>확인</Button>
                        </Grid>
                        <Grid item>

                            <TextField
                                size='small'
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
                        <Grid item>
                            <TextField
                                size='small'
                                variant='outlined'
                                required
                                fullWidth
                                id='userName'
                                type='text'
                                name='userName'
                                label="이름"
                                autoComplete='userName'
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                size='small'
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
                        <Grid item>
                            <TextField
                                size='small'
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
                        <Grid item>
                            <TextField
                                size='small'
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
                        <Grid item>
                            <TextField
                                size='small'
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

                        <Grid item>
                            <Button variant="contained" component="label">
                                파일 첨부
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="userProfile"
                                    // ref={register}
                                    required="이미지 파일이 아닙니다."
                                    // pattern="/(.*?)\.(jpg|jpeg|png|gif|bmp|pdf)$/"
                                    multiple="multiple"
                                    hidden
                                    onChange={handleImgUpload}
                                />
                            </Button>
                        </Grid>
                        <Grid item>
                            {imgs.length === 0 ? <div></div> :
                                <img style={{ width: '100px', height: '100px' }} src={imgs}></img>
                            }
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
            </Grid>
        </div >

    )
}

export default SignUpComponent