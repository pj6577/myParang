import { action, makeObservable, observable} from "mobx";

export class SearchAreaStore {
    rootStore;

    searchArea = "";

    constructor(root) {
        makeObservable(this, {
            searchArea : observable,
            changeArea : action,
        })

        this.rootStore = root;
    }
    changeArea(area){
        this.searchArea = area;
    }
}