import {makeAutoObservable} from "mobx";

export  default class ServicesPageStore {
    constructor() {
        this._service = [
            {id:1, name: 'Полная спутниковая диагностика территории', img: '/images/aboutstore/1.png'},
            {id:2, name: 'Увеличение вашего дохода - это наша работа!', img: '/images/aboutstore/2.png'},
            {id:3, name: 'Новейшее программное обеспечение', img: '/images/aboutstore/3.png'},
        ]

        makeAutoObservable(this)
    }
    setService(service) {
        this._service = service
    }
    get service() {
        return this._service
    }

}