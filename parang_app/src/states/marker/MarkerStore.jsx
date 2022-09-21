import { action, makeObservable, observable} from "mobx";
import axios from "axios";
import {API_BASE_URL} from "../../config/API-Config";

class Marker{
    pbbName="";
    lat="";
    lon="";
    constructor(pbbName, lat, lon) {
        this.pbbName = pbbName;
        this.lat = lat;
        this.lon = lon;
    }
}


export class MarkerStore{

    rootStore;
    markers = [];
    constructor(root) {
        makeObservable(this, {
            markers : observable,
            createMarker : action,
        })
        this.rootStore = root;
        this.markers = [

            new Marker("송정항", '35.1805', '129.2068'),
            new Marker( '강릉항', '37.7728',  '128.9530' ),
            new Marker('아야진항', '38.2708', '128.5578'),
            new Marker("우도항","33.4925",  "126.9515"),
            new Marker("오이도항","37.3463",  "126.6863"),
            new Marker("서귀포항", "33.2377",  "126.5661"),
            new Marker("삼길포항", "37.0033",  "126.4526"),
            new Marker("광리항", "34.8773",  "128.4733")
        ]

    }

    createMarker(pbbName, lat, lon){
        this.markers = [
            ...this.markers,
            new Marker(pbbName, lat, lon),
        ]
        if(this.markers.length===38){
            console.log(this.markers[37].lat + " " + this.markers[37].lon)
        }
    }
}