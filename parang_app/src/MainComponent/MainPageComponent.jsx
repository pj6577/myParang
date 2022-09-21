import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarComponent } from '../ComponentList/NavBarComponent'
import { createTheme } from '@mui/material'


export const MainPageComponent = () => {

  const gSansFont = createTheme({
    typography: {
      fontFamily: [

        'GmarketSansMedium',
      ]

    }
  })

  const myChew = createTheme({
    typography: {
      fontFamily: [
        'TTCrownMychewR',

      ]

    }
  })

  return (
    <div>
      <NavBarComponent />
      메인페이지<br />


      수많은 정보들 ...
    </div>
  )
}
