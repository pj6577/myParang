import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Grid, Box, Paper, TextField, Button, Modal, Input } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { AvatarComponent } from '../../ComponentList/AvatarComponent';
import axios from 'axios';
import { API_BASE_URL } from '../../config/API-Config';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import FeedWrite from './FeedWrite';



export default function Feed(item, { setCheckBoard, checkBoard }) {

  const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정

  const toggleMenu = () => {
    setMenu(isOpen => !isOpen); // on,off 개념 boolean
  }

  const [expanded] = React.useState(false);
  const navigate = useNavigate();
  const [boardUserInfo, setBoardUserInfo] = useState();


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.target);
  };
  //게시물 관련

  const [boardTag, setBoardTag] = useState([]);
  React.useEffect(() => {
    axios.get(API_BASE_URL + "/tag/tagAll", {
    }).then((response) => {
      setBoardTag(response.data);
    }).catch(() => {
      console.log("error")
    })

  }, []);
  /**
   * 글 수정 삭제 모달
   */
  const [open, setOpen] = React.useState(false);
  const [boardNumber, setBoardNumber] = useState("");
  const boardOptionOpen = (data) => {
    setOpen(true);
  };
  const boardOptionClose = () => {
    setOpen(false);
  };
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

  /**
   * 글 수정하기 
   */
  const updateBoardAct = (feedData) => {
    let a;
    axios.patch(API_BASE_URL + `/feedAll/updateboard/${item.boardId}`, {
      boardTitle: feedData.updateBoardTitle,
      boardContent: feedData.updateBoardContent,
    }).then(() => {
      setCheckBoard(!checkBoard);
    }).catch(() => {
      console.log("error")
      a = "error"
    })
    if(a === "error"){
      alert("다시 시도해주세요");
    }else{
      window.location.href="/feedAll";
    }
  }

  const updateBoardData = (e) => {
    const data = new FormData(document.getElementById('testtest'))
    console.log(data)
    console.log(document.getElementById('testtest'))
    const updateBoardTitle = data.get('updateBoardTitle')
    const updateBoardContent = data.get('updateBoardContent');
    console.log(updateBoardTitle, updateBoardContent)
    e.preventDefault();
    updateBoardAct({
      updateBoardTitle: updateBoardTitle,
      updateBoardContent: updateBoardContent,
      // tagIdentifier: uuid(),
      // boardTag: tagList
    });
  }

  /**
   * 글 삭제 
   */
  const deleteBoardData = () => {
    axios.delete(API_BASE_URL + `/feedAll/deleteboard/${item.boardId}`, {
    })
    window.location.href="/feedAll";
  }

  // //더보기 버튼 액션
  // const moreButtonAction = (e) => {
  //   console.log("함수실행")
  //   console.log(e.target.value)
  //   console.log(openOrClose)
  //   setOpenOrClose(!openOrClose)
  // }

  const [openOrClose, setOpenOrClose] = useState(true);


  //글 별 태그 출력
  const tagPutter = (tag, item) => {
    if (item.tagIdentifier === tag.boardTagId) {
      return tag.boardTag
    }
  }

  ////////////////////////////////////////

  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item width={'50vw'}>
        {/* <FeedWrite /> */}
        <Card >
          <CardHeader
            // {/* 프로필 이미지  */}
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <AvatarComponent boardWriterId={item.boardWriterId} />
              </Avatar>
            }

            action={(localStorage.getItem("Authorization") !== null) ? (item.boardWriterId == jwtDecode("token parsing" + localStorage.getItem("Authorization")).sub)
              ? <Button onClick={boardOptionOpen}> 설정</Button>
              : <Button></Button> : null}
            title={item.boardWriterNickName}
            subheader={item.CreatedDate}
            subtitle={item.boardTitle}
          >
          </CardHeader>

          <Box sx={{ padding: 2 }}>
            <Typography variant="body2" color="text.secondary">
              <img src={item.boardImg} alt="img" style={{ width: "25%", height: "25%" }} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {item.boardContent}
            </Typography>
           
            {boardTag.map((tag, tagIdentifier) => {
              return (
                <Typography key={tagIdentifier} style={{color: 'blue', backgroundColor: 'powderblue'}}>
                  {tagPutter(tag, item)}
                </Typography>
              )
            })}
          </Box>

          <Modal
            open={open}
            onClose={boardOptionClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <form id="testtest">
              <Box sx={{ ...style, width: 400 }}>
                글 설정
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth

                    name='updateBoardTitle'
                    label="제목"
                  // defaultValue={item.boardTitle}
                  />
                  <TextField
                    variant='outlined'
                    required
                    fullWidth

                    name='updateBoardContent'
                    label="내용"
                  // defaultValue={item.boardContent}
                  />
                  <Button type='submit' onClick={updateBoardData}>변경하기</Button>
                  <Button onClick={deleteBoardData}>삭제</Button>
                </Grid>
              </Box>
            </form>
          </Modal>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={toggleMenu}>
              {!isOpen ? <FavoriteIcon /> : <FavoriteIcon color="error" />}
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          </Collapse>
          {/* 댓글 TextField */}
          <TextField
            variant='outlined'
            required
            fullWidth
            label="댓글 작성"
          >
          </TextField>
        </Card>

      </Grid>

    </Grid>
  );
}