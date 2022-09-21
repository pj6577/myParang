import { action, makeObservable, observable} from "mobx";

class City{
    city;

    constructor(city) {
        this.city = city;
    }
}
export class CityStore{
    rootStore;
    cities = [];

    constructor(root) {
        makeObservable(this, {
            cities : observable,
            findByCounty : action
        })
        this.rootStore = root;
        this.cities = [
            new City( {부산광역시: ["서구", "동구"]}),
            new City({제주특별자치도 : ["제주시", "서귀포시"]}),
            new City({경기도 : ["시흥시", "평택시"]}),
            new City({충청남도 : ["서산시", "태안군"]}),
            new City({강원도 : ["고성군", "강릉시"]}),
            new City({도_광역시선택 : ["시군구선택"]})
        ]
    }

    findByCounty(county){
        for(let si in this.cities){
           if(Object.keys(this.cities[si].city)[0] ===county){

               return this.cities[si].city[`${Object.keys(this.cities[si].city)[0]}`]
           }
        }
    }
}