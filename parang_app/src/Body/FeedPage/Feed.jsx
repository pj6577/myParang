import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, Box, Paper } from '@mui/material';
import FeedService from './FeedService';

import { useNavigate } from "react-router-dom";



export default function Feed() {
  const [expanded] = React.useState(false);
  const navigate = useNavigate();

  //게시물 관련

  const [board, setBoard] = React.useState([]);
  React.useEffect(() => {
    FeedService.getFeed().then((response) => {
      setBoard(response.data);
      console.log(response.data);
    });
  }, []);

  ////////////////////////////////////////


  return (
      <Grid container>
        <Grid width={'70vw'} alignItems={'justify'}>
          {/* <button onClick={navigate("/")}>ddd</button> */}
          {board.map((item, idx) => { return <Card sx={{ width: '100%', height: '80vh' }}>
            <CardHeader
                // {/* 프로필 이미지  */}
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    불신지옥
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.boardId}
                subheader= {item.boardUpdatedTime}
            >
            </CardHeader>

            <Paper elevation={3} height={'60%'} padding={2}>
              <Box sx={{ height: '300px', padding: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  {item.boardContent}
                </Typography>
              </Box>
            </Paper>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            </Collapse>
          </Card>})}

        </Grid>
      </Grid>
  );
}