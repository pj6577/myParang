import React from 'react';
import {useEffect, useState} from "react";
import { API_BASE_URL } from "../../config/API-Config"
import {Box, Button, Grid} from "@mui/material";
import {useStores} from "../../states/Context";
import {useObserver} from "mobx-react";
import axios from 'axios';
import { FishingProbability } from './fishingProbability/FishingProbability';

import { drawKakaoMap} from './drawKakaoMap'
import { useNavigate } from 'react-router-dom';

function useStoreData(){
    const { searchAreaStore} = useStores();
    const { countyStore } = useStores();
    const { markerStore } = useStores();
    return useObserver(()=>({
        searchArea : searchAreaStore.searchArea,
        harbor : countyStore.harbor,
        county : countyStore.county,
        city : countyStore.city,
        markers : markerStore.markers,
    }))
}

const FishingInfoMap = ({setPutComponent}) => {
    const navigate = useNavigate();
    const [l, setL] = useState([]);
    const { markerStore, pbbStore } = useStores();
    const { searchAreaStore } = useStores();
    const { harbor, city, county, markers, searchArea} = useStoreData()
    const {kakao} = window;
    let map;
    

    let position = new kakao.maps.LatLng(35.88957, 127.95414);
    let ps = new kakao.maps.services.Places();
    let mapOptions = {
        center: position,
        level: 13,
    };

    //마커를 담을 배열입니다
    useEffect( ()=>{
        axios.get(API_BASE_URL+"/probability/retrieve")
            .then((res)=>{
                console.log(res.data.resList[0].pbbName)
                if(res.data !== null){
                    console.log(res.data.resList[0].pbbName)
                    for(let i=0;i<res.data.resList.length;i++){
                        markerStore.createMarker(res.data.resList[i].pbbName, res.data.resList[i].lat, res.data.resList[i].lon)
                    }
                    setL(res.data.resList);
                }else{
                    console.log("group by probability failed")
                }
            })
             .catch(()=>{
            console.log("groupby 통신에러")
        })

    },[])
    useEffect(()=>{
        console.log("kakaoMap hi")
        map = new kakao.maps.Map(document.getElementById('map'), mapOptions);
        console.log(markers.length)
        for (let i = 0; i < markers.length; i++) {
            //마커 설정
            let markerOptions = {
                position: new kakao.maps.LatLng(markers[i].lat, markers[i].lon),
                map: map,
                icon: './boat.png'
            };
            let marker = new kakao.maps.Marker(markerOptions);
            let iwContent = `<div style="padding:5px;">${markers[i].pbbName}</div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

// 인포윈도우를 생성합니다
            let infowindow = new kakao.maps.InfoWindow({
                content : iwContent
            });
            // 마커에 마우스오버 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseover', function() {
                // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                infowindow.open(map, marker);
            });

// 마커에 마우스아웃 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseout', function() {
                // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                infowindow.close();
            });
//마커에 마우스 클릭 이벤트를 등록
            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커 위에 인포윈도우를 표시합니다
                searchAreaStore.changeArea(markers[i].pbbName);
                setPutComponent(<FishingProbability />)
                navigate("/fishinginfo")
            });
        }

        if ((county + city + harbor) !== "") {
            ps.keywordSearch(county + city + harbor, function (result, status) {
                if (result.length === 0) {
                    console.log('키워드를 확인하세요');
                } else if (status === kakao.maps.services.Status.OK) {
                    console.log(result[0].y + " " + result[0].x)
                    let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    map.setLevel(10)
                    if (harbor !== "") {
                        map.setLevel(5)
                        console.log("hi")
                    } else {
                        let marker = new kakao.maps.Marker({
                            map: map,
                            position: coords
                        });
                        // 인포윈도우로 장소에 대한 설명을 표시합니다
                        let infowindow = new kakao.maps.InfoWindow({
                            content: `<div style="width:150px;text-align:center;padding:6px 0;">${result[0].place_name}</div>`
                        });
                        if (city !== "") {
                            map.setLevel(6);
                        }
                        map.setLevel(10);
                    }
                    map.setCenter(coords);
                    //결과값으로 받은 위치를 마커로 표시합니다.
                }
            });
        }
    }, [l, county, city, harbor])


// 키워드 검색을 요청하는 함수입니다
    return (
            <Grid container>
                <Grid item  id="map" style={{width:"100vw", height:"100vh"}}>
                </Grid>
            </Grid>
    );
};

export default FishingInfoMap;