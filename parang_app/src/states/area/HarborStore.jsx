import { action, makeObservable, observable} from "mobx";

class Harbor{
    harbor;

    constructor(harbor) {
        this.harbor = harbor;
    }
}

export class HarborStore{
    rootStore;

    harbors = [];

    constructor(root) {
        makeObservable(this, {
            harbors : observable,
            findByCity :action
        })
        this.rootStore = root;
        this.harbors = [
            new Harbor({서구 : ["송정항", "서구항"]}),
            new Harbor({동구 : ["동구항", "동항"]}),
            new Harbor({제주시 : ["우도항", "제주항"]}),
            new Harbor({서귀포시 : ["서귀포항", "모슬포항"]}),
            new Harbor({시흥시 : ["오이도항", "영종도항"]}),
            new Harbor({평택시 : ["평택항", "평항"]}),
            new Harbor({서산시 : ["삼길포항", "서산항"]}),
            new Harbor({태안군 : ["태안항", "태항"]}),
            new Harbor({고성군 : ["아야진항", "고성항"]}),
            new Harbor({강릉시 : ["강릉항", "강항"]}),
            new Harbor({시군구선택 : ["항구선택"]})
        ]
    }
    findByCity(city){
        for(let si in this.harbors){
            if(Object.keys(this.harbors[si].harbor)[0]===city){
                return this.harbors[si].harbor[`${Object.keys(this.harbors[si].harbor)[0]}`]
            }
        }
    }
}