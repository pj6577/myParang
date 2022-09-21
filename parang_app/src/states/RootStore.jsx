import {SearchAreaStore} from "./area/SearchAreaStore";
import {CountyStore} from "./area/CountyStore";
import {CityStore} from "./area/CityStore";
import { HarborStore } from "./area/HarborStore";
import {DateStore} from "./date/DateStore";
import {MarkerStore} from "./marker/MarkerStore";
import {PbbStore} from "./marker/PbbStore";

export class RootStore{
    searchAreaStore;
    countyStore;
    cityStore;
    harborStore;
    dateStore;
    markerStore;
    pbbStore;

    constructor() {
        this.searchAreaStore = new SearchAreaStore(this);
        this.countyStore = new CountyStore(this);
        this.cityStore = new CityStore(this);
        this.harborStore = new HarborStore(this);
        this.dateStore = new DateStore(this);
        this.markerStore = new MarkerStore(this);
        this.pbbStore = new PbbStore(this);
    }
}