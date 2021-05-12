import {makeAutoObservable} from "mobx";

export  default class MediaStore {
    constructor() {
        this._media = [
            {id:1,
                name: 'Роскосмос',
                title: 'Космическая среда №309 в прямом эфире',
                text: 'В «Космической среде» 16 декабря в прямом эфире: актуальные новости, космическая аналитика.',
                logo:'/images/logo_partners/logo-8.png',
                img: '/images/another/link-1.jpg',
                link:'https://youtube.com/watch?v=kfCT6WGBDWQ&feature=share'},
            {id:2,
                name: 'НИРС МАИ',
                title: 'Онлайн-интенсив по формированию и акселерации команд',
                text: '7—21 ноября проходил масштабный онлайн-интенсив по формированию и акселерации команд',
                logo:'/images/logo_partners/logo-9.png',
                img: '/images/another/link-2.jpg',
                link:'https://vk.com/wall-43965091_2415'},
            {id:3,
                name: 'НАУКА И ЖИЗНЬ',
                title: '«Архипелаг 20.35» – в России такого еще нет',
                text: 'AEROSPACE-AGRO - в ТОП-15 "Архипелага 20.35"! Среди всех команд-участниц, наши ребяиа из отдела искусственного интелекта показали высший класс.',
                logo:'/images/logo_partners/logo-10.png',
                img: '/images/another/link-3.jpg',
                link:'https://m.nkj.ru/prtnews/39850/'}
        ]

        makeAutoObservable(this)
    }
    setMedia(media) {
        this._media = media
    }
    get media() {
        return this._media
    }

}