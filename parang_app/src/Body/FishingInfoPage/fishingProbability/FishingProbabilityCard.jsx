import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { FishingProbability } from './FishingProbability';
import { isBoxedObservable } from 'mobx';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const FishingProbabilityCard = (item) => {
  // const beforeNoon = testData.filter(item => item.timeType === "오전")
  // const afterNoon = testData.filter(item => item.timeType === "오후")
  // const fishSpecies = testData.filter(item => item.fishName === "우럭")

  // console.log("beforeNoon");
  // console.log(beforeNoon);
  // console.log(fishSpecies);


  return (
    <>
     <Table>
    <TableBody>
      <TableRow>
        <TableCell>{item.timeType}</TableCell>
        <TableCell>{item.tideTimeScore}</TableCell>
        <TableCell>{item.waterTemp}</TableCell>
        <TableCell>{item.airTemp}</TableCell>
        <TableCell>{item.totalScore}</TableCell>

      </TableRow>
    </TableBody>
     </Table>
    </>
  );
}

export default FishingProbabilityCard;