import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from 'moment';
import { Button } from "@mui/material";
import {observer, inject} from "mobx-react";
import {useStores} from "../../states/Context";



const LocationSelect = observer(() => {
    const {addressStore} = useStores();
    const {countyStore} = useStores();
    const {cityStore} = useStores();
    const {harborStore} = useStores();
    const {DateStore} = useStores();
    const [dateValue, setDateValue] = useState(new Date());

    const targetDateValue = moment(dateValue).format("YYYYMMDD");
    // console.log(targetDateValue);

    //셀렉트박스에 선택한 value를 출력하기 위한 변수
    const [harborName, setHarborName] = useState(addressStore.addresses[0].harbor);
    //셀렉트 박스 요소를 출력하기 위한 배열


    const selectCounty = (e) => {
        addressStore.changeCounty(e.target.value);
    };

    //시군구 onchange
    const selectCity = (e) => {
        addressStore.changeCity(e.target.value);

    };
    const selectHarbor = (e)=>{
        addressStore.changeHarbor(e.target.value);
        setHarborName(e.target.value);
    }



        return(
        <div>
            <Calendar onChange={setDateValue} value={dateValue}
                      navigationLabel={null}
                      showNeighboringMonth={true}
            />

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">도,광역시</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={addressStore.addresses[0].county}
                    onChange={selectCounty}
                    label="도,광역시"
                >
                    <MenuItem value={"default"} disabled>
                        <em>도,광역시를 선택하세요</em>
                    </MenuItem>
                    {countyStore.counties.map((cti, idx) => {
                        return (
                            <MenuItem key={idx} value={cti.countyName}>{cti.countyName}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">시,군,구</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={addressStore.addresses[0].city}
                    onChange={selectCity}
                    label="시,군구"
                >
                    <MenuItem value="default" disabled>
                        <em>시,군,구를 선택하세요</em>
                    </MenuItem>
                    {cityStore.findByCounty(addressStore.addresses[0].county).map((ct, idx) => {
                        return (
                            <MenuItem key={idx} value={ct}>{ct}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">항구</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={harborName}

                    onChange={selectHarbor}
                    label="항구"
                >
                    <MenuItem value="default" disabled>
                        <em>항구를 선택하세요</em>
                    </MenuItem>
                    {harborStore.findByCity(addressStore.addresses[0].city).map((hb, idx) => {
                        return (
                            <MenuItem key={idx} value={hb}>{hb}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <Button>선택완료</Button>
        </div>
    );

})
export default LocationSelect;