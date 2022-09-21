import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { FishingProbability } from './FishingProbability';
import { isBoxedObservable } from 'mobx';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';

const FishingProbabilityCard = (item) => {
  console.log(item)

  const imageChange = (data) => {
    if (data === "농어") {
      return "https://w.namu.la/s/b3a3326ffd8a2976a6cb975451680db1a2c48cdd06af13ac85cd3650dc6cf030adfab6145f21099ba8f9e48480a62133426da9c0c9613899b887874bfa07f5b28280afc3bc0d8ad9febd15266fa0cabba626923d01ce34ddfa5212f0ee8a3cef"
    }
    else if (data === "참돔") {
      return "https://w.namu.la/s/576a79f2a3677a3ed589cd38dd2252ee57498bc57acbcd5fdefb41a0c4d993f6d285b8a2d222908b698c3d97155cdd2dc192e07bea906b747639539a72ebee43bc853e888d0d4420951a2c96a14f936f0bac7554ee46a03e09cb92740c44bbb0"
    }
    else if (data === "감성돔") {
      return "https://w.namu.la/s/879df886332068898124872ce5f21abc57ae4cfc3214478416d7c6ec61ade4b16933ad14a13b8621eeb218244630ea513c0d7e886e8a3746b43358c8be222cea402ed5e1343fca7050d4ca30ffe8c5466dad7e78f3ef4bc5631053b9de5dba6e"
    }
    else if (data === "우럭") {
      return "https://w.namu.la/s/b187116b43620fca0b3a2d17ea40cfa3b252e9385503a4fb3555bf714cb082e52858644777cf4dc6d0398981d50afffa537f2687cb557b4cc05e31c95fb5b1873c4515bb7a14c955d846fecc2021a8ac7051f48d6c270ea1ca4b7bbde94bcad6"
    }
    else if (data === "돌돔") {
      return "https://w.namu.la/s/4d3175ebe4f223feb809f48353e4cda808bdaeafb71869e78c4b211ce168dcaf36c5688d89466818421f67e2e408d1dcc0c5dc72205a3cc3f3bc5dfb4c4b47644f17d1ac028cc582eb284533ee57f7f59026489898da929ce84865fa33a3dcf840a204fcc91407838500fb67ae61f6c0"
    }
    else if (data === "벵에돔") {
      return "https://w.namu.la/s/720bc535944eb6e8c5cb5f92cdc2b6c69408a158655fc6910e277253daaf07032fc5e5b9f1bff1fb5f8b2ff9d8f797c1c7f235191890337e7cdcde6435d8e0a9bd3d1873b293da50ad5d29390671754bd54b0a5878050b6558bfd811d44aeb68"
    }
  }

  return (
    <div>
      <Card sx={{ width: "100%" }}>
        <CardActionArea>
          <Typography fontWeight={700}>
            {item.pbbName}  {item.fishName}
          </Typography>

          <CardMedia
            component="img"
            width='100%'
            image={imageChange(item.fishName)}
            alt={item.fishName}
          />



        </CardActionArea>
      </Card>
      {item.timeType === "오후" ? <div></div> : <Table>
        <TableHead>
          <TableRow>

            <TableCell>시간</TableCell>
            <TableCell>물때</TableCell>
            <TableCell>수온</TableCell>
            <TableCell>대기온도</TableCell>
            <TableCell>낚시종합지수</TableCell>
          </TableRow>
        </TableHead>
      </Table>}
    </div>
  );
}

export default FishingProbabilityCard;