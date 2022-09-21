import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


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

export const BoatCardSection = (item) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };



    return (
        <div>

            <Card sx={{ width: '100%' }}>
                <CardHeader
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
                    <Typography >
                        <span style={{ fontWeight: '700' }}> 탑승선원(선장포함) - </span> {item.maxShcrNum}
                    </Typography>
                    <Typography>
                        <span style={{ fontWeight: '700' }}> 최대선원(선원포함) - </span> {item.maxPsrNum}
                    </Typography>
                </CardContent>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="상세보기"
                >
                    <ExpandMoreIcon />
                </ExpandMore>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography>
                            선박코드 : {item.fsboNo}
                        </Typography>


                    </CardContent>
                </Collapse>
            </Card>


        </div >
    );
}
