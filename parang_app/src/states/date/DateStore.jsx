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

    dates="";

    constructor(root) {
        makeObservable(this, {
            dates : observable,
            changeDate : action
        })

        this.rootStore = root;

    }
    changeDate(date){
        this.dates= date;
        console.log(this.dates);
    }
}