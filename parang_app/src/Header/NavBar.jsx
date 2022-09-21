
import React, { useEffect, useState } from 'react'


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { ReactComponent as ParangLogo } from './parangLogo.svg';
import { ThemeProvider } from 'styled-components';



// const pages = ['낚시정보', '피싱스타그램', 'Blog'];
const pages = [{ title: "낚시정보", link: "/FishingInfo" }, { title: "피싱스타그램", link: "/feedAll" },
   ];  


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export const NavBar = () => {


  //navigate 초기화
  const navigate = useNavigate();

  const LogOutAct=(e)=>{

    if(e.target.value == 0 ){
      localStorage.removeItem('Authorization'); 
      localStorage.removeItem('picture');
      navigate('/');
    }
  }



  //토큰 여부 확인 후 로그인/비로그인 값 isLogIn에 저장
  const [isLogined, setIsLogined] = useState(true);
  useEffect(()=>{
    if( { Authorization: localStorage.getItem("Authorization") }){
      setIsLogined(false);
    }})
  const changePage = (page) => {
    navigate("`${page.link}`")
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log("오픈메뉴메소드실행")
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //검색창 코드
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


  return (
    //로고 클릭 버튼(이름)
    <AppBar position="static" style={{ background: '#2d3d5e', boxShadow: 'none' }}>
      <Container maxWidth="100vw"  style={{ zIndex : '5' }}>
        <Toolbar disableGutters >
        <ParangLogo style={{ width: '55', fill: 'white' }} onClick={() => { navigate("/") }} />
        

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          {/* 메뉴버튼 코드  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
            {pages.map((page, idx) => (

              <Button
                // containerelement={<Link to={page.link} />}
                key={idx}

                onClick={() => { navigate(`${page.link}`) }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {/* 프로필 */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={localStorage.getItem("picture")} />
              </IconButton>
            </Tooltip>
            {/* navbar -> login 버튼 // 내 프로필 버튼 변환  */}
            {localStorage.getItem("Authorization") === null ?
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}>
                  <MenuItem  onClick={()=> {navigate("/signin")}}>
                    <Typography textAlign="center">로그인</Typography>
                  </MenuItem>
                  <MenuItem  onClick={()=> {navigate("/signup")}}>
                    <Typography textAlign="center">회원가입</Typography>
                  </MenuItem>
                </Menu>   :
                <Menu
                    sx={{ mt: '45px' }}
                    name = "logNavBar"
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
              <MenuItem value="Profile" onClick={()=>{navigate("/mypage")}}>Profile</MenuItem>
              <MenuItem value="Account">Account</MenuItem>
              <MenuItem value="Dashboard">Dashboard</MenuItem>
              <MenuItem name="LogOut" value="Logout" onClick={LogOutAct}>Logout</MenuItem>
                </Menu>
            }
          </Box>


          {/* 검색 기능 컴포넌트 */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </Container>
    </AppBar >
  );
}


// <button>
//           <Link to='signup'>회원가입 </Link>
//         </button>
//         <button>
//           <Link to='mypage'>마이페이지 </Link>
//         </button>
//         <button>
//           <Link to='showmore'>더보기</Link>
//         </button>
//         <button>
//           <Link to='board'>게시판</Link>
//         </button>
//         <button>
//           <Link to='fishinginfo'>낚시 정보</Link>
//         </button>
//         <textarea placeholder='검색 할 내용'></textarea>
//         <button>
//           <Link to='board'>검색하기</Link>
//         </button>