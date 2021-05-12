import {makeAutoObservable} from "mobx";

export  default class AboutStore {
    constructor() {
        this._about = [
            {id:1, name: 'Полная спутниковая диагностика территории', img: '/images/aboutstore/1.png'},
            {id:2, name: 'Увеличение вашего дохода - это наша работа!', img: '/images/aboutstore/2.png'},
            {id:3, name: 'Новейшее программное обеспечение', img: '/images/aboutstore/3.png'},
        ]

        makeAutoObservable(this)
    }
    setAbout(about) {
        this._about = about
    }
    get about() {
        return this._about
    }

}