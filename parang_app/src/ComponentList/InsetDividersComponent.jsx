import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import { BasicUserProfile } from '../Body/MyPage/BasicUserProfile';

export const InsetDividersComponent = ({ setPutComponent }) => {

    const navigate = useNavigate();

    const MenuName = [
        { title: "내프로필", link: <BasicUserProfile /> },
        // { title: "내 피드", link: <BoardComponent /> },
        // { title: "관심정보", link: <MyLikeInfoComponent /> }

    ]

    return (
        <div>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                <ListItem xs={12}>
                    {MenuName.map((menu, idx) => (
                        <Button
                            // containerelement={<Link to={page.link} />}
                            key={idx}

                            onClick={() => { setPutComponent(menu.link) }}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            {menu.title}
                        </Button>

                    ))}
                </ListItem>

                <Divider component="li" />

            </List >
        </div >
    )
}
