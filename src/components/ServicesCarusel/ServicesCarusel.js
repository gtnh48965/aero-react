import React from 'react';
import {observer} from "mobx-react-lite";

const ServicesCarusel = observer(() => {

    return (
        <div className="sliders-refact">
            <div className='bg-serv'>
                <div className='container slider-service'>
                    <div className="services_news_block">
                        <div className='row slider-two serv-block'>
                            <div className='col-6 container-title serv-block_dop'>
                                <h1>
                                    Тест&#160;драйв
                                </h1>
                                <h6 className="text-serv">
                                    Компания&#160;AEROSPACE&#160;-&#160;AGRO&#160;предлагает&#160;каждому&#160;новому<br/>клиенту&#160;воспользоваться&#160;услугой&#160;Test&#160;-&#160;Drive!<br/>
                                    За&#160;сумму&#160;в&#160;200&#160;000&#160;рублей&#160;мы&#160;сделаем&#160;подробную<br/> диагностику&#160;небольшого&#160;участка&#160;Вашей&#160;земли.
                                </h6>
                                <div className='sl'>
                                    <a>
                                        <button type="button" className="bot-serv btn btn-primary d-flex align-items-center justify-content-center">узнать больше
                                            <div className="vector-test"></div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="img-test">
                        </div>
                    </div>
                </div>
            </div>
            <div className='line'>
                <div className='container pd-none'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h3 className=' manager'>
                            <p className='m'>ваш запрос менеджеру</p>
                            <p className='s'>Выбрано: <b>15 услуг для консультации</b></p>
                        </h3>
                        <button type="button" className="bt-blue btn btn-primary">
                            смотреть список выбранных услуг
                        </button>
                        <button type="button" className="bt-green btn btn-primary">
                            оформить запрос
                            <div className='vector'></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ServicesCarusel;