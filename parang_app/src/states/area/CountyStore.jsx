import { action, makeObservable, observable} from "mobx";


export class CountyStore{
    rootStore;

    counties = [];
    cities = {};
    harbors = {};

    county = "";
    city = "";
    harbor = "";
    obj = {};


    constructor(root) {
        makeObservable(this, {
            counties: observable,
            county: observable,
            cities: observable,
            city: observable,
            harbor: observable,
            setCounty: action,
            setCity : action,
            findCityByCounty: action,
            findHarborByCity : action
        })
        this.rootStore = root;
        this.counties = [
             {부산광역시: {
                해운대구: { 송정항: "35.129", 서구항: "1" },
                동구 :{ 동구항: "1", 동항:"1"}
            }},
             {제주특별자치도: {
                    제주시: { 천진항: "33.126", 제주항:"1" },
                    서귀포시: { 서귀포항: "33.126", 모슬포항 : "1" }
                }},
            {경기도: {
                    시흥시: { 오이도항: "37.126" , 영종도항:"1"},
                    평택시: { 평택항 : "37.125", 평항:"1"}
                }},
            {충청남도: {
                    서산시: { 삼길포항: "37.126", 서산항:"1" },
                    태안군: { 태안항: "36.125", 태항:"1"}
                }},
            { 강원도: {
                    고성군: { 아야진항: "38.128", 고성항: "35.123" },
                    강릉시: { 강릉항: "37.128", 강항:"1" }
                }},
        ]
    }

    findCityByCounty() {
    
        if (this.county !== "") {
            for (let si in this.counties) {
                if (Object.keys(this.counties[si])[0] === this.county) {

                    this.cities = this.counties[si][`${Object.keys(this.counties[si])[0]}`]
                    //return this.counties[si][`${Object.keys(this.counties[si])[0]}`]
                }
            }
        } else {
            this.obj = {시군구선택: "1"}
            return this.obj;
        }
    }
    findHarborByCity(){
       if(this.city !==""){
           for(let har in Object.keys(this.cities)){
               if(Object.keys(this.cities)[har]===this.city){
                    this.harbors = this.cities[this.city];
               }
           }
       }
    }

    setCounty(county){
        this.county = county;
        this.findCityByCounty();
        console.log(this.county)
        this.setHarbor("");
        this.setCity("");
        this.harbors = {};
    }
    setCity(city){
        this.city = city;
        this.findHarborByCity();
    }
    setHarbor(harbor){
            this.harbor = harbor;
        }
}