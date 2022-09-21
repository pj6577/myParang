// navermaps.js
import axios from "axios";

const geocodingUrl = "https://dapi.kakao.com/v2/local/search/address.json";
let latlng = "";

export function geocoding(query) {
    console.log("query :"+query)
    axios
        .get(`${geocodingUrl}`, {
            params:{
                query
            },
            headers: {
                "Authorization": "KakaoAK 21ea73218f4a4b0860e7bf28e4106e8d",
            }
        })
        .then(res => {
            // TODO: check if response is ok

            latlng = res.data.documents[0].y +", "+res.data.documents[0].x;
        }).catch(
            console.log("geocoding error")
    )

    return latlng;


}