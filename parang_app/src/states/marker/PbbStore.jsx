import { action, makeObservable, observable } from 'mobx';

export class PbbStore {
    rootStore;

    verticalTabIndex= 0;

    constructor(root) {
        makeObservable(this, {
            verticalTabIndex: observable,
            changeVerticalIndex : action
        })

        this.rootStore = root;
    }
    changeVerticalIndex(){
        this.verticalTabIndex = 5;
    }
}