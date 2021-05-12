import {makeAutoObservable} from "mobx";

export  default class BannerStore {
    constructor() {
        this._banner  = [
            {id:1, title: 'Наши технологии',
                content:'Технологии AEROSPACE-AGRO увеличат выручку Вашей компании более чем на 15%! Мы предоставляем эффективные решения в области диагностики сельскохозяйственных территорий.',
                img: '/images/bannerstore/1.png'},
            {id:2, title: 'Услуга Test_Drive',
                content:'Компания AEROSPACE-AGRO предлагает каждому новому клиенту воспользоваться услугой Test-Drive! \n За сумму в 200 000 рублей мы сделаем подробную диагностику небольшого участка Вашей земли.',
                img: '/images/bannerstore/1.png'},
            {id:3, title: 'Старт КОНКУРСа',
                content:'Компания AEROSPACE-AGRO объявляет конкурс среди специалистов в области аграрных технологий. Лучшие из лучших получат от AEROSPACE-AGRO премии в размере 30 000 рублей!',
                img: '/images/bannerstore/1.png'},
            {id:4, title: 'Наши технологии',
                content:'Технологии AEROSPACE-AGRO увеличат выручку Вашей компании более чем на 15%! Мы предоставляем эффективные решения в области диагностики сельскохозяйственных территорий.',
                img: '/images/bannerstore/1.png'}
        ]

        makeAutoObservable(this)
    }
    setBanner (banner ) {
        this._banner  = banner
    }
    get banner () {
        return this._banner
    }

}