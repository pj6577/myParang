import { ThemeProvider, Typography, createTheme } from '@mui/material'






export const TypographyComponent = () => {

    //서체변경을 위해서 필요한것
    //ThemeProvider , createTheme 
    //컴포넌트에 넘겨주면된다
    //App.css 에 임포트 하고 폰트패밀리 가져오면됨
    // 대소문자 주의

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
        //컴포넌트에 넣으면 된다 
        <div>
            <ThemeProvider theme={myChew}>
                <div>TypographyComponent</div>
                <Typography variant="h1" theme={gSansFont}>
                    h1태그를 적용한 타이포그래피
                </Typography>
                <Typography variant="h2" align='center'>
                    h2 적용, align - center
                </Typography>

                <Typography variant='body1' color='#C41A72'>
                    컬러적용 body1 16px body2 14px
                </Typography>
            </ThemeProvider>
        </div>
    )
}
