import {makeAutoObservable} from "mobx";

export  default class AboutStore {
    constructor() {
        this._news = [
            {id:1, name: '2021 уже не за горами - сделайте предзаказ на наши услуги сейчас, и получите скидку!'},
            {id:2, name: 'Сезон 2021 уже не за горами - успейте сделать предзаказ на наши услуги уже сейчас, и получите скидку!'},
            {id:3, name: 'Сезон 2021 уже не за горами - успейте сделать предзаказ на наши услуги уже сейчас, и получите скидку!'},
            {id:4, name: 'Сезон 2021 уже не за горами - успейте сделать предзаказ на наши услуги уже сейчас, и получите скидку!'},
        ]

        makeAutoObservable(this)
    }
    setAbout(news) {
        this._news = news
    }
    get news() {
        return this._news
    }

}