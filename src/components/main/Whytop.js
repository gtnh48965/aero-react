import React from 'react';
import WhytopCarusel from "./WhytopCarusel";

const Whytop = ({width}) => {
    return (
        <div className="container mb-160">
            <div className="row mb-5">
                <div className="col-12 col-lg-6">
                    <div className="container-title col-12">
                        <h1>Преимущества работы с AEROSPACE-AGRO</h1>
                    </div>
                </div>
                {width > 1000 ?
                    <div className="col-12 col-lg-6">
                        <p className="top-info">Мы сотрудничаем с десятками предприятий по России и СНГ. Если Вы
                            заинтересованы в работе с нами, но вам нужны дополнительные гарантии - воспользуйтесь нашей
                            услугой <a href="#">Test-Drive</a>
                        </p>
                    </div>
                    :
                    <div className="col-12 col-lg-6">
                        <p className="top-info">Нажмите на  +, чтобы увидеть наши преимущества</p>
                    </div>
                    }
            </div>
            {width > 1000 ?
                <div className="row">
                    <div className="col-3 d-flex flex-column justify-content-around">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img className="top-img" src="/images/top/8.svg" alt=""/>
                            <p className="top-info">Собственные <br/> разработанные методики. Используем инновационные
                                методы
                                в своей работе</p>
                        </div>
                        <div className="d-flex flex-column align-items-center text-center">
                            <img className="top-img" src="/images/top/7.svg" alt=""/>
                            <p className="top-info">Подробный результат исследования и список рекомендаций</p>
                        </div>
                        <div className="d-flex flex-column align-items-center text-center">
                            <img className="top-img" src="/images/top/6.svg" alt=""/>
                            <p className="top-info">Программа пилотирования крупных агрохолдингов (актуально для больших
                                территорий)</p>
                        </div>
                    </div>
                    <div className="col-6 d-flex flex-column align-items-center justify-content-between">
                        <div className="col-6 d-flex flex-column align-items-center text-center">
                            <img className="top-img" src="/images/top/1.svg" alt=""/>
                            <p className="top-info">Гибкая ценовая политика. Индивидуальный подход к каждому клиенту</p>
                        </div>
                        <img className="top-mid" src="/images/top/top.png" alt=""/>
                        <div className="col-12 d-flex flex-column align-items-center text-center">
                            <img className="top-img" src="/images/top/5.svg" alt=""/>
                            <p className="top-info">Только наша компания осуществляет расчет экономической
                                эффективности
                                сельскохозяйственных участков с использованием наиболее точной математической
                                модели</p>
                        </div>
                    </div>
                    <div className="col-3 d-flex flex-column justify-content-around">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img className="top-img" src="/images/top/2.svg" alt=""/>
                            <p className="top-info">Учет множества критериев и факторов при проведении исследовани</p>
                        </div>
                        <div className="d-flex flex-column align-items-center text-center">
                            <img className="top-img" src="/images/top/3.svg" alt=""/>
                            <p className="top-info">Штат высококлассных сертифицированных специалистов</p>
                        </div>
                        <div className="d-flex flex-column align-items-center text-center top-box">
                            <img className="top-img" src="/images/top/4.svg" alt=""/>
                            <p className="top-info">Наличие специализированного программного обеспечения. Использование
                                современного оборудования</p>
                        </div>
                    </div>
                </div>
                :
                <div className='row'>
                        <img className="col-12" src="/images/top/top.png" alt=""/>
                        <WhytopCarusel />
                </div>

            }
        </div>
    );
};

export default Whytop;