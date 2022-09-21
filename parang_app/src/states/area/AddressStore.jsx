import { action, makeObservable, observable} from "mobx";

class Address{
    county;
    city;
    harbor;

    constructor(county, city, harbor) {
        this.county = county;
        this.city = city;
        this.harbor = harbor;
    }
}

export class AddressStore{
    rootStore;

    addresses = [];

    constructor(root) {
        makeObservable(this, {
            addresses : observable,
            createAddress : action,
            changeCounty : action,
            changeCity : action,
            changeHarbor : action
        })

        this.rootStore = root;
        this.addresses = [
            new Address("도_광역시선택", "시군구선택", "항구선택")
        ]

    }

    createAddress(county, city, harbor){
        this.addresses = [
            ...this.addresses,
            new Address(county, city, harbor),
        ]
    }

    changeCounty(county){
        this.addresses[0].county = county;
        console.log(this.addresses[0])
    }
    changeCity(city){
        console.log(city);
        this.addresses[0].city = city;
    }
    changeHarbor(harbor){
        console.log(harbor);
        this.addresses[0].harbor = harbor;
    }

}