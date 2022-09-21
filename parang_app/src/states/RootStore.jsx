import {AddressStore} from "./area/AddressStore";
import {CountyStore} from "./area/CountyStore";
import {CityStore} from "./area/CityStore";
import { HarborStore } from "./area/HarborStore";
import {DateStore} from "./date/DateStore";

export class RootStore{
    addressStore;
    countyStore;
    cityStore;
    harborStore;
    dateStore;

    constructor() {
        this.addressStore = new AddressStore(this);
        this.countyStore = new CountyStore(this);
        this.cityStore = new CityStore(this);
        this.harborStore = new HarborStore(this);
        this.dateStore = new DateStore(this);
    }
}