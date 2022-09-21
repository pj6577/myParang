import { useObserver } from 'mobx-react';
import React, { useEffect, useState } from 'react'
import { useStores } from '../../../states/Context'

import { API_BASE_URL } from '../../../config/API-Config';
import axios from 'axios';
import moment from 'moment';
import { type } from '@testing-library/user-event/dist/type';
import FishingProbabilityCard from './FishingProbabilityCard';
import { DoDisturbAlt } from '@mui/icons-material';
import FishingProbabilityCardImage from './FishingProbabilityCardImage';
import { ListItemIcon } from '@mui/material';

function useStoreData() {

  const { dateStore } = useStores();
  const { searchAreaStore} = useStores();

  return useObserver(() => ({
    searchArea : searchAreaStore.searchArea,
    dates: dateStore.dates,
  }))

}

export const FishingProbability = () => {

  const { dates, searchArea } = useStoreData();
  

  const [testData, setTestData] = useState([]);

  useEffect(() => {
    console.log(searchArea)
    axios.post(API_BASE_URL + "/probability/retrieveFishProbability", { "pbbName": searchArea, "pbbDate": String(moment(dates).format("YYYY-MM-DD")) })
        .then((res) => {
      console.log(res.data.resList)
      setTestData(res.data.resList)

    }).catch(() => {
      console.log("AXIOS 통신에러")
    })
  }, [searchArea])


  return (
    <div style={{ height: '100%', overflow: 'auto' }}>

      {testData.map((item, idx) => {
        let a = idx+1;
        return (
          <div key={idx}>
            {idx % 2 === 0 ? <FishingProbabilityCardImage  {...item} /> : <div></div>}
            <FishingProbabilityCard  {...item} />
          </div>
        )
      })}


    </div>
  )

}