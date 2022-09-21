import React from 'react'
import { Button } from '@mui/material'

export const ButtonComponent = () => {
    //https://mui.com/material-ui/react-button/
    return (
        <div>
            <div>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </div>
            <div>
                <Button>Primary</Button>
                <Button disabled>Disabled</Button>
                <Button href="#text-buttons">Link</Button>
            </div>
        </div>
    )
}
