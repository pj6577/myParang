import { action, makeObservable, observable} from "mobx";
import moment from "moment";

class Date{
    date = moment();

    constructor(date) {
       this.date = date;
    }
}

export class DateStore{
    rootStore;
    dates = "";


    constructor(root) {
        makeObservable(this, {
            dates : observable,
            changeDate : action
        })

        this.rootStore = root;
        this.dates=moment(new Date()).format("YYYY-MM-DD");
    }
    changeDate(date){
        this.dates= moment(date).format("YYYY-MM-DD");;
        console.log(this.dates);
    }
}