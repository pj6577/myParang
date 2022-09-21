import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export const AvatarComponent = () => {
    return (
        <Stack direction="row" spacing={2} justifyContent='center'>
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 100, height: 100 }} />
        </Stack>
    )
}
