
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Grid, Box, Paper, TextField, Button, Menu, MenuItem, Tooltip } from '@mui/material';
import axios from 'axios';
import { API_BASE_URL } from '../../config/API-Config';
import { AvatarComponent } from '../../ComponentList/AvatarComponent';
import styled from 'styled-components'
import uuid from 'react-uuid';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';

export const FeedWrite = () => {
  const navigate = useNavigate();
  const [expanded] = React.useState(false);
  const [imgs, setImgs] = useState([]);
  const dateForTaboo = moment(new Date()).format("YYYY-MM-DD")


  const [userInfo, setUserInfo] = useState({});
  React.useEffect(() => {
    axios.get(API_BASE_URL + "/user/getUserInfo", {
      headers: { Authorization: localStorage.getItem("Authorization") },
    })
      .then((res) => {
        console.log("getUserInfo 성공");
        setUserInfo(res.data);
      })
      .catch();
  }, []);
  const FeedWriteAxi = (feedData) => {
    console.log(feedData.boardContent)

    axios.all([
      axios.post(API_BASE_URL + '/feedAll/feedwrite', {
        boardTitle: feedData.boardTitle,
        boardContent: feedData.boardContent,
        boardWriterNickName: feedData.boardWriterNickName,
        boardWriterId: feedData.boardWriterId,
        tagIdentifier: feedData.tagIdentifier,
        boardImg: feedData.boardImg
      },
        {
          headers: { Authorization: localStorage.getItem("Authorization") }
        }),

      axios.post(API_BASE_URL + '/tag/create', {
        tagIdentifier: feedData.tagIdentifier,
        boardTag: feedData.boardTag
      }
        , {
          headers: { Authorization: localStorage.getItem("Authorization") }
        })
    ]).catch(() => {
      console.log("feedwrite작동안함")
    })
    window.location.href="/feedAll"
  }

  // const FeedWirteAxi = (feedData) => {
  //   axios({
  //     url: API_BASE_URL + "/feedAll/feedwrite",
  //     method: 'post',
  //     headers: { Authorization: localStorage.getItem("Authorization") },
  //     data: feedData
  //   }).then((response) => {
  //     console.log(response);
  //   })
  // }


  //이미지 업로드 함수
  const handleImgUpload = (e) => {
    const nowSelectImgList = e.target.files;
    console.log(nowSelectImgList);
    const formData = new FormData();

    for (let i = 0; i < nowSelectImgList.length; i++) {
      formData.append("multiPratFile", nowSelectImgList[i]);
    }

    axios.post(API_BASE_URL + '/upload', formData
      , {
        headers: { Authorization: localStorage.getItem("Authorization") }
      })
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

  const FeedWriteAct = (e) => {
    const data = new FormData(document.getElementById('formData'));
    console.log(data)
    const boardTitle = data.get("boardTitle")
    const feedContent = data.get("feedContent")
    const boardImg = imgs;
    FeedWriteAxi({
      boardTitle: boardTitle,
      boardContent: feedContent,
      boardWriterNickName: userInfo.userNickName,
      boardWriterId: userInfo.userId,
      tagIdentifier: uuid(),
      boardTag: tagList,
      boardImg: boardImg[0]
    });
    console.log("보드 이미지" + boardImg[0])
  }


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);

  };



  /**
   * 카테고리
   */
  const [tagItem, setTagItem] = useState('')
  const [tagList, setTagList] = useState([])

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === ' ') {
      submitTagItem()

    }
  }

  const submitTagItem = () => {
    let updatedTagList = [...tagList]
    updatedTagList.push(tagItem.trim())
    setTagList(updatedTagList)
    setTagItem('')
    console.log(updatedTagList)
  }

  const deleteTagItem = e => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText
    const filteredTagList = tagList.filter(tagItem => tagItem !== deleteTagItem)
    setTagList(filteredTagList)
  }



  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container width={'50vw'} padding={0}>


        <Card sx={{ width: '100%' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <AvatarComponent />
              </Avatar>
            }
            title={userInfo.userNickName}
            subheader={dateForTaboo}
          />
          <form onSubmit={FeedWriteAct} id="formData">


            <Grid container direction={"column"} spacing={1} padding={2}>
              <Grid item>
                <TextField
                  variant='standard'
                  required
                  fullWidth
                  id='standard-required'
                  name='boardTitle'
                  label="제목"
                />
              </Grid>
              <Grid item>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='feedContent'
                  label="글 작성"
                  rows={10}
                  multiline
                />
              </Grid>
              <Grid item>
                {imgs.length === 0 ? <div></div> :
                  <img width={'100px'} height={'100px'} src={imgs}></img>
                }
              </Grid>

              {/*씨발이게뭐였지  */}
              <Grid item>
                <Button variant="contained" component="label">
                  파일 첨부
                  <input
                    type="file"
                    accept="image/*"
                    name="boardImg"
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
                <WholeBox>
                  <TagBox>
                    {tagList.map((tagItem, index) => {
                      return (
                        <TagItem key={index}>
                          <Text>{tagItem}</Text>
                          <Button onClick={deleteTagItem}>취소</Button>
                        </TagItem>
                      )
                    })}
                    <TagInput
                      type='text'
                      placeholder='카테고리 입력'
                      name='hashTag'
                      tabIndex={2}
                      onChange={e => setTagItem(e.target.value)}
                      value={tagItem}
                      onKeyPress={onKeyPress}
                    />
                  </TagBox>
                </WholeBox>
              </Grid>
              <Grid item>
                <Button type='submit' onClick={FeedWriteAct}> 작성완료</Button>
              </Grid>
            </Grid>


          </form>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          </Collapse>
        </Card>

      </Grid>
    </div >
  )
}


export default FeedWrite;

const WholeBox = styled.div`
  
  /* height: 100vh; */
`

const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 50px;
  width:'100%';
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;

  &:focus-within {
    border-color: tomato;
  }
`

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: tomato;
  border-radius: 3px;
  color: white;
  font-size: 13px;
`

const Text = styled.span``



const TagInput = styled.input`
  display: inline-flex;
  min-width: 100%;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
`

