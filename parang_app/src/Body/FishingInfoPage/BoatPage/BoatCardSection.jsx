import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { height } from '@mui/system';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

// const boatSampleData = [
//     {
//         BoatTitle: "부산항 박찬호",
//         regisitedDate: "2022/08/30",
//         BoatImage: "../../../낚시배샘플.jpg",
//         BoatSubtitle: "이것은 박찬호여",
//         BoatContent_1: "이것은 보트 컨텐츠 1입니다",
//         BoatContent_2: "010-0000-0000"
//     },
//     {
//         BoatTitle: "인천항 재현호",
//         regisitedDate: "2022/08/29",
//         BoatImage: "../../../낚시배샘플.jpg",
//         BoatSubtitle: "이것은 재현호여",
//         BoatContent_1: "이것은 보트 컨텐츠 1입니다",
//         BoatContent_2: "010-0000-0000"
//     },
// ]



export const BoatCardSection = (item) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    console.log(item)

    return (
        <div>

            <Card sx={{ width: '100%' }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={item.fsboNm}
                    subheader={item.shpmHangNm}
                />
                <CardMedia
                    component="img"
                    sx={{ objectFit: 'fill' }}

                    image="../../../낚시배샘플.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {item.BoatSubtitle}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>박찬호</Typography>
                        <Typography paragraph>
                            {item.BoatContent_1}
                        </Typography>
                        <Typography paragraph>
                            전화번호 : {item.BoatContent_2}
                        </Typography>

                    </CardContent>
                </Collapse>
            </Card>


        </div >
    );
}
