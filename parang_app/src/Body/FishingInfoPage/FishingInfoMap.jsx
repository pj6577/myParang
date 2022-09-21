import React from 'react';
import {useEffect, useState} from "react";

import {Box, Button, Grid} from "@mui/material";
import LocationSelect from './LocationSelect';
import {useStores} from "../../states/Context";
import {useObserver} from "mobx-react";
import { geocoding } from "./mapFunctions/KakaoGeoCoder";



function useStoreData(){
    const { countyStore } = useStores();

    return useObserver(()=>({
        harbor : countyStore.harbor,
        county : countyStore.county,
        city : countyStore.city,
    }))
}

const FishingInfoMap = () => {

    const { harbor, city, county } = useStoreData()
    const [latlng, setLatlng] = useState(["35.88957", "127.95414"]);
    const { kakao } = window;
    let geocoder = new kakao.maps.services.Geocoder();
    let map;
    let areaArr = new Array();
    areaArr.push(
        {shipHome : '송정항', lat : '35.1805', lng :'129.2068'}, //부산 송정항
        {shipHome : '강릉항', lat :'37.7728', lng : '128.9530' }, // 강릉시 강릉항
        {shipHome : '아야진항', lat : '38.2708', lng : '128.5578'}, // 강원도 아야진항
        {shipHome :"우도항", lat:"33.4925", lng: "126.9515"},
        {shipHome :"오이도항", lat:"37.3463", lng: "126.6863"},
        {shipHome :"서귀포항", lat:"33.2377", lng: "126.5661"},
        {shipHome :"삼길포항", lat:"37.0033", lng: "126.4526"},
        {shipHome :"광리항", lat:"34.8773", lng: "128.4733"}
    );

    // 마커를 담을 배열입니다

    useEffect(()=> {
        let position = new kakao.maps.LatLng(latlng[0], latlng[1]);
        let ps = new kakao.maps.services.Places();
        let mapOptions = {
            center: position,
            level: 14,
        };
        map = new kakao.maps.Map(document.getElementById('map'), mapOptions);

        for(let i = 0; i< areaArr.length; i++){
            //마커 설정
            let markerOptions = {
                position: new kakao.maps.LatLng(areaArr[i].lat, areaArr[i].lng),
                map: map,
                icon: './boat.png'
            };
            let marker = new kakao.maps.Marker(markerOptions);
        }

        if((county+city+harbor) !==""){
            ps.keywordSearch(county+city+harbor, function (result, status) {
                if ( result.length === 0) {
                    console.log('키워드를 확인하세요');
                  } else if (status === kakao.maps.services.Status.OK) {
                        console.log(result[0].y+" "+result[0].x)
                        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    
                      // js 마우스 오버 , 아웃 이벤트
                    //   (function (marker, infowindow) {
                    //     // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다 
                    //     kakao.maps.event.addListener(marker, 'mouseover', function () {
                    //       infowindow.open(map, marker);
                    //     });
                    //     // 마커에 mouseout 이벤트를 등록하고 마우스 아웃 시 인포윈도우를 닫습니다
                    //     kakao.maps.event.addListener(marker, 'mouseout', function () {
                    //       infowindow.close();
                    //     });
                    //   })(marker, infowindow);
                    
                      // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    
                    map.setLevel(10)
                    if(harbor!==""){
                        map.setLevel(5)
                        console.log("hi")
                    }else{
                        let marker = new kakao.maps.Marker({
                            map: map,
                            position: coords
                          });
                          // 인포윈도우로 장소에 대한 설명을 표시합니다
                          let infowindow = new kakao.maps.InfoWindow({
                            content: `<div style="width:150px;text-align:center;padding:6px 0;">${result[0].place_name}</div>`
                          });
                          if(city !==""){
                            map.setLevel(6);
                          }
                          map.setLevel(10);
                    }
                    map.setCenter(coords);
                     //결과값으로 받은 위치를 마커로 표시합니다.
                   
                }
            });
        }    
    }, [county, city, harbor])


   

// 지도를 생성합니다
//     useEffect(()=>{
//         if((county+city) !==""){
//             console.log(geocoding(county+city));
//         }
//     },[county, city])

    // useEffect(()=>{
    //     let position = new kakao.maps.LatLng(latlng[0], latlng[1]);
    //     let mapOptions = {
    //         center: position,
    //         level: 14,
    //     };
    //     let map = new kakao.maps.Map(document.getElementById('map'), mapOptions);
    //     // 주소로 좌표를 검색합니다
                   
                
    //         },[county, city])
    




// 키워드 검색을 요청하는 함수입니다
    return (
            <Grid container>
                <Grid item  id="map" style={{width:"100vw", height:"100vh"}}></Grid>
            </Grid>
    );
};

export default FishingInfoMap;