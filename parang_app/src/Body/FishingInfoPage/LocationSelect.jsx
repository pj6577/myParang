import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from 'moment';
import { Button } from "@mui/material";
import { useStores } from "../../states/Context";
import { useObserver } from 'mobx-react';
import axios from 'axios';
import { API_BASE_URL } from "../../config/API-Config"



function useLocationData() {
    const { countyStore } = useStores()
    const { dateStore } = useStores();

    return useObserver(() => ({
        dates: dateStore.dates,
        counties: countyStore.counties,
        cities: countyStore.cities,
        harbors: countyStore.harbors,
        harbor: countyStore.harbor,
        county: countyStore.county,
        city: countyStore.city
    }))
}

const LocationSelect = () => {
    const { counties, cities, harbors, harbor, city, county, dates } = useLocationData()
    const { dateStore } = useStores();
    const { countyStore } = useStores();
    const [dateValue, setDateValue] = useState(new Date());

    const targetDateValue = moment(dateValue).format("YYYYMMDD");
    const dateForTaboo = moment(dateValue).format("YYYY-MM-DD")

    useEffect(() => {
        dateStore.changeDate(targetDateValue);

    }, [dateValue])


    const onChange = (e) => {
        countyStore.setCounty(e.target.value);
    };

    //시군구 onchange
    const finalSelect = (e) => {
        countyStore.setCity(e.target.value);
    };
    const clearAddress = (e) => {
        e.preventDefault();
        countyStore.setCounty("");
    }
    return (

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
                    value={county}
                    onChange={onChange}
                    label="도,광역시"
                >
                    <MenuItem value={"default"} disabled>
                        <em>도,광역시를 선택하세요</em>
                    </MenuItem>
                    {counties.map((cti, idx) => {
                        return (
                            <MenuItem key={idx} value={Object.keys(cti)[0]}>{Object.keys(cti)[0]}</MenuItem>
                        )
                    })}

                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">시,군,구</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={city}
                    onChange={finalSelect}
                    label="시,군,구"
                >
                    <MenuItem value="default" disabled>
                        <em>시,군,구를 선택하세요</em>
                    </MenuItem>
                    {Object.keys(cities).map((ct, idx) => {
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
                    onChange={(e) => { countyStore.setHarbor(e.target.value) }}
                    label="항구"
                    value={harbor}
                >
                    <MenuItem value="default" disabled>
                        <em>항구를 선택하세요</em>
                    </MenuItem>
                    {Object.keys(harbors).map((hb, idx) => {
                        return (
                            <MenuItem key={idx} value={hb}>{hb}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <Button onClick={clearAddress}>초기화</Button>
        </div>
    );

}
export default LocationSelect;