import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container, Grid, Box, Paper, Button, TextField, Input, FormControl } from '@mui/material';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../config/API-Config';
import axios from 'axios';
import Modal from '@mui/material/Modal';

export const BasicUserProfile = () => {


 
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const navigate = useNavigate();

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
    

 

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const nickNameUpdate = (userDTO) => {
        axios({
            method: 'put',
            url: API_BASE_URL + "/user/updateinfo",
            headers: { Authorization: localStorage.getItem("Authorization") },
            data : userDTO
        })
            .then((response) => {
                console.log(response.data);
                setUserInfo(response.data);
                setOpen(false);
                navigate("/MyPage");
            })
            console.log(userDTO);
    }
    const updateAction = (e) => {
        const data = new FormData(e.target)
        const userNickName = data.get("userNickName");
        console.log(userNickName);
        nickNameUpdate({ userNickName: userNickName });
    }

    



    return (
        <div>
            <Grid item my={2}>
                <Paper className="바탕" elevation={3} height={'110%'} width={'100%'}>
                    <Box sx={{ height: '30vh', width: 'inherit' }}>
                        <Typography mt={2} mb={0}
                            width={'inherit'}
                            align='center'
                            variant="body2"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'GmarketSansMedium',
                                fontWeight: 500,
                                letterSpacing: '-.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                            기본정보
                        </Typography>
                        <Grid container alignItems={'center'}>
                            <Grid item xs={10}>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }}>
                                    <ListItem alignItems='center' >
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{
                                                            mr: 2,
                                                            display: { xs: 'none', md: 'flex' },
                                                            fontFamily: 'GmarketSansMedium',
                                                            fontWeight: 600,
                                                            letterSpacing: '-.1rem',
                                                            color: 'inherit',
                                                            textDecoration: 'none',
                                                        }}>{userInfo.userName} 님
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={2}>
                                <Grid item xs={12}>
                                    <Divider variang='middle' />
                                </Grid>
                            </Grid>
                            <Grid container alignItems={'center'}>
                                <Grid item xs={10}>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }}>
                                        <ListItem alignItems='center' >
                                            <ListItemAvatar>
                                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                            </ListItemAvatar>
                                            {/* 닉네임 */}
                                            <ListItemText
                                                primary={
                                                    <React.Fragment>
                                                        <Typography
                                                            sx={{
                                                                mr: 2,
                                                                display: { xs: 'none', md: 'flex' },
                                                                fontFamily: 'GmarketSansMedium',
                                                                fontWeight: 600,
                                                                letterSpacing: '-.1rem',
                                                                color: 'inherit',
                                                                textDecoration: 'none',
                                                            }}>{userInfo.userNickName}
                                                        </Typography>
                                                    </React.Fragment>
                                                }
                                            />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button onClick={handleOpen}>
                                        수정하기
                                    </Button>
                                </Grid>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="parent-modal-title"
                                    aria-describedby="parent-modal-description"
                                >
                                    <form onSubmit={updateAction}>
                                    <Box sx={{ ...style, width: 400 }}>
                                        <h2 id="parent-modal-title">닉네임 변경하기</h2>
                                        <Grid item xs={12}>
                                            <Input
                                                variant='outlined'
                                                required
                                                fullWidth
                                                id='userNickName'
                                                type='text'
                                                name='userNickName'
                                                label="닉네임"
                                                autoComplete='userNickname'
                                            />    
                                        
                                            <Button type='submit' onClick={updateAction}>변경하기</Button>
                                        </Grid>
                                    </Box>
                                    </form>
                                </Modal>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider variang='middle' />
                            </Grid>
                            <Grid container alignItems={'center'}>
                                <Grid item xs={12}>
                                    <List sx={{ width: '100%', bgcolor: 'background.paper', }}>
                                        <ListItem alignItems='center' >
                                            <ListItemAvatar>
                                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={
                                                    <React.Fragment>
                                                        <Typography
                                                            sx={{
                                                                mr: 2,
                                                                display: { xs: 'none', md: 'flex' },
                                                                fontFamily: 'GmarketSansMedium',
                                                                fontWeight: 600,
                                                                letterSpacing: '-.1rem',
                                                                color: 'inherit',
                                                                textDecoration: 'none',
                                                            }}>{userInfo.userPNum}
                                                        </Typography>
                                                    </React.Fragment>
                                                }
                                            />
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Grid>
        </div >
    )
}