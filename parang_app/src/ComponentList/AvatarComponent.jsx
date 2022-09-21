import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { API_BASE_URL } from '../config/API-Config';

export const AvatarComponent = ({boardWriterId}) => {

    const [userInfo, setUserInfo] = React.useState([]);
    React.useEffect(() => {
        axios
            .post(API_BASE_URL + "/user/mypage", {
                userId : boardWriterId
            })
            .then((res) => {
            
                setUserInfo(res.data);
            })
            .catch();
    }, []);
    return (
        <Stack direction="row" spacing={2} justifyContent='center'>
            <Avatar
                alt="Remy Sharp"
                src={userInfo.userProfilePicture}
                sx={{ width: 100, height: 100 }} />
        </Stack>
    )
}
