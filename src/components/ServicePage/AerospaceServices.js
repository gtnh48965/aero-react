import React, { useState } from "react";

const AerospaceServices = () => {
    let [page, setPage] = useState(1);
    let [flag, setFlag] = useState(false);


    function changeActive(id) {
        document.getElementById("btn-pagination_serv-"+page).classList.toggle("active");
        setPage(id)
        document.getElementById("btn-pagination_serv-"+id).classList.toggle("active");
    }
    return (
        <div className="container where_use mb-160">
            <div className="row mb-5 mt-4">
                <div className="col-md-5 col-12">
                    <div className="container-title">
                        <h1 className='mb-0'>услуги <br/>aerospace-agro</h1>
                    </div>
                </div>

                <div className="col link-serv container-title">
                    <button className="butDrop" onClick={() => {
                        setFlag(!flag)
                    }}>
                        <p className="top-info">Свернуть описание функции «запрос менеджеру»
                            {flag ? <img src={"/images/servicesPage/VectorSmart.svg"}/> : <img src={"/images/servicesPage/VectorSmart2.svg"}/>}
                        </p>
                    </button>
                </div>

            </div>
            {
                flag ? <div className="row-12 mb-4" id="myDIV">
                    <p className="top-info">Для вашего удобства мы добавили функцию «запрос менеджеру». Добавляйте услуги в «запрос» с помощью кнопки «добавить запрос менеджеру» и формируйте запрос для индивидуальной консультации по интересующим вас услугам. Данный запрос не обязывает вас к покупке.</p>
                </div> : null
            }
            <div className="col-12">
                <ul className="hr row pagination-top">
                    <li className="page-items "><a className="page-link"><span>Выбрать&#160;услуги&#160;для:</span></a></li>
                    <li className="page-items"><a className="page-link active_before" href="#"><span>всех</span></a></li>
                    <li className="page-items"><a className="page-link active_before" href="#"><span>руководителя</span></a></li>
                    <li className="page-items"><a className="page-link active_before" href="#"><span>агронома</span></a></li>
                </ul>
            </div>
            {page===1?
                <div className="serv-block row">
                    <div className="container">
                        <div className="row">
                            <div className="element el-1 col-sm">
                                <div className="img align-self-center">
                                    <div className='min-img-block'>
                                        <img className="min-img" src={"/images/servicesPage/1.png"}/>
                                    </div>
                                </div>
                                <p className="text">
                                    Исследование, анализ и оценка участка на наличие всевозможных
                                    сельскохозяйственных
                                    проблем
                                </p>
                                <div className='bottom'>
                                    <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                        узнать больше
                                        <div className="vector_more"></div>
                                    </button>
                                </div>
                                <div className='row request'>
                                    <button className='basket'>
                                    </button>
                                    <p>добавить в запрос менеджеру</p>
                                </div>
                            </div>
                            <div className="center element col-sm">
                                <div className="img-c align-self">
                                    <div className='min-img-block'>
                                        <img className="min-img" src={"/images/servicesPage/2.png"}/>
                                    </div>
                                </div>
                                <p className="text">
                                    Тест-драйв
                                </p>
                                <div className='bottom'>
                                    <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                        узнать больше
                                        <div className="vector_more"></div>
                                    </button>
                                </div>
                                <div className='row request'>
                                    <button className='basket'>
                                    </button>
                                    <p>добавить в запрос менеджеру</p>
                                </div>
                            </div>
                            <div className="element col-sm">
                                <div className="img align-self-left">
                                    <div className='min-img-block'>
                                        <img className="min-img" src={"/images/servicesPage/3.png"}/>
                                    </div>
                                </div>
                                <p className="text">
                                    Исследование и описание участка
                                </p>
                                <div className='bottom-l'>
                                    <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                        узнать больше
                                        <div className="vector_more"></div>
                                    </button>
                                </div>
                                <div className='row request'>
                                    <button className='basket'>
                                    </button>
                                    <p>добавить в запрос менеджеру</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="element col-sm">
                        <div className="img r2 align-self-center">
                            <div className='min-img-block'>
                                <img className="min-img" src={"/images/servicesPage/4.png"}/>
                            </div>
                        </div>
                        <p className="text">
                            Полное изучение и оценка участка на количество и виды вредителей и качества роста
                            культур,
                            для повышения объема получаемого урожая
                        </p>
                        <div className='bottom'>
                            <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                узнать больше
                                <div className="vector_more"></div>
                            </button>
                        </div>
                        <div className='row request'>
                            <button className='basket'>
                            </button>
                            <p>добавить в запрос менеджеру</p>
                        </div>
                    </div>
                    <div className="center element col-sm">
                        <div className="img-c r2 align-self">
                            <div className='min-img-block'>
                                <img className="min-img" src={"/images/servicesPage/5.png"}/>

                            </div>
                        </div>
                        <p className="text">
                            Анализ сельскохозяйственного участка на заболевание растений
                        </p>
                        <div className='bottom'>
                            <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                узнать больше
                                <div className="vector_more"></div>
                            </button>
                        </div>
                        <div className='row request'>
                            <button className='basket'>
                            </button>
                            <p>добавить в запрос менеджеру</p>
                        </div>
                    </div>
                    <div className="element col-sm">
                        <div className="img r2 align-self-left">
                            <div className='min-img-block'>
                                <img className="min-img" src={"/images/servicesPage/6.png"}/>
                            </div>
                        </div>
                        <p className="text">
                            Диагностика территорий перед посевами — создание комплекса моделей работ в течении
                            сезона
                        </p>
                        <div className='bottom'>
                            <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                узнать больше
                                <div className="vector_more"></div>
                            </button>
                        </div>
                        <div className='row request'>
                            <button className='basket'>
                            </button>
                            <p>добавить в запрос менеджеру</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="element el-1 col-sm br-bt ">
                                <div className="img align-self-center">
                                    <div className='min-img-block'>
                                        <img className="min-img" src={"/images/servicesPage/7.png"}/>

                                    </div>
                                </div>
                                <p className="text">Расчёт экономической эффективности сельскохозяйственного
                                    участка</p>
                                <div className="bottom">
                                    <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                        узнать больше
                                        <div className="vector_more"></div>
                                    </button>
                                </div>
                                <div className="row request">
                                    <button className='basket'>
                                    </button>
                                    <p>добавить в запрос менеджеру</p></div>
                            </div>
                            <div className="center element br-bt col-sm">
                                <div className="img-c align-self">
                                    <div className='min-img-block'>
                                        <img className="min-img" src={"/images/servicesPage/8.png"}/>

                                    </div>
                                </div>
                                <p className="text">Минеральный анализ почвы агро-территорий </p>
                                <div className="bottom">
                                    <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                        узнать больше
                                        <div className="vector_more"></div>
                                    </button>
                                </div>
                                <div className="row request">
                                    <button className='basket'>
                                    </button>
                                    <p>добавить в запрос менеджеру</p></div>
                            </div>

                            <div className="element br-bt col-12 col-sm">

                                <h4 className="text-next"><b>Перейти<br/>на следующую<br/>страницу
                                    услуг</b><br/>
                                    <img onClick={() => {changeActive(2)}} src={"/images/servicesPage/VectorBig.svg"}/>
                                </h4>
                                <div className="br-bt col-12">
                                    <button type="button" id="new-list" className="col-12 btn btn-primary">
                                        <p>следующая страница</p>

                                    </button></div>
                                <div>
                                    <button id='btn-pagination_serv-1' onClick={() => {changeActive(1)}} className='btn btn-pagination_serv active'>01</button>
                                    <button id='btn-pagination_serv-2' onClick={() => {changeActive(2)}} className='btn btn-pagination_serv'>02</button>
                                    <button id='btn-pagination_serv-3' onClick={() => {changeActive(3)}} className='btn btn-pagination_serv'>03</button>
                                    <button id='btn-pagination_serv-4' onClick={() => {changeActive(4)}} className='btn btn-pagination_serv'>04</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            :page===2?
                <div className="serv-block row">
                        <div className="container">
                            <div className="row">
                                <div className="element el-1 col-sm">
                                    <div className="img align-self-center">
                                        <div className='min-img-block'>
                                            <img className="min-img" src={"/images/servicesPage/2_1.png"}/>
                                        </div>
                                    </div>
                                    <p className="text">
                                        Составление индивидуального графика удобрения
                                    </p>
                                    <div className='bottom'>
                                        <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                            узнать больше
                                            <div className="vector_more"></div>
                                        </button>
                                    </div>
                                    <div className='row request'>
                                        <button className='basket'>
                                        </button>
                                        <p>добавить в запрос менеджеру</p>
                                    </div>
                                </div>
                                <div className="center element col-sm">
                                    <div className="img-c align-self">
                                        <div className='min-img-block'>
                                            <img className="min-img" src={"/images/servicesPage/2_2.png"}/>
                                        </div>
                                    </div>
                                    <p className="text">
                                        Заболевание растений:  анализ и прогноз
                                    </p>
                                    <div className='bottom'>
                                        <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                            узнать больше
                                            <div className="vector_more"></div>
                                        </button>
                                    </div>
                                    <div className='row request'>
                                        <button className='basket'>
                                        </button>
                                        <p>добавить в запрос менеджеру</p>
                                    </div>
                                </div>
                                <div className="element col-sm">
                                    <div className="img align-self-left">
                                        <div className='min-img-block'>
                                            <img className="min-img" src={"/images/servicesPage/2_3.png"}/>
                                        </div>
                                    </div>
                                    <p className="text">
                                        Разработка индивидуальной методики лечения растений
                                    </p>
                                    <div className='bottom'>
                                        <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                            узнать больше
                                            <div className="vector_more"></div>
                                        </button>
                                    </div>
                                    <div className='row request'>
                                        <button className='basket'>
                                        </button>
                                        <p>добавить в запрос менеджеру</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="element col-sm">
                        <div className="img r2 align-self-center">
                            <div className='min-img-block'>
                                <img className="min-img" src={"/images/servicesPage/2_4.png"}/>
                            </div>
                        </div>
                        <p className="text">
                            Составления карты наличия сорняков на участке  
                            + прогнозирование развития
                        </p>
                        <div className='bottom'>
                            <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                узнать больше
                                <div className="vector_more"></div>
                            </button>
                        </div>
                        <div className='row request'>
                            <button className='basket'>
                            </button>
                            <p>добавить в запрос менеджеру</p>
                        </div>
                    </div>
                    <div className="center element col-sm">
                        <div className="img-c r2 align-self">
                            <div className='min-img-block'>
                                <img className="min-img" src={"/images/servicesPage/2_5.png"}/>

                            </div>
                        </div>
                        <p className="text">
                            Разработка индивидуальной методики борьбы с сорняками
                        </p>
                        <div className='bottom'>
                            <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                узнать больше
                                <div className="vector_more"></div>
                            </button>
                        </div>
                        <div className='row request'>
                            <button className='basket'>
                            </button>
                            <p>добавить в запрос менеджеру</p>
                        </div>
                    </div>
                    <div className="element col-sm">
                        <div className="img r2 align-self-left">
                            <div className='min-img-block'>
                                <img className="min-img" src={"/images/servicesPage/2_6.png"}/>
                            </div>
                        </div>
                        <p className="text">
                            Комплекс исследований  и оценка участка на наличие вредителей
                        </p>
                        <div className='bottom'>
                            <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                узнать больше
                                <div className="vector_more"></div>
                            </button>
                        </div>
                        <div className='row request'>
                            <button className='basket'>
                            </button>
                            <p>добавить в запрос менеджеру</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="element el-1 col-sm br-bt ">
                                <div className="img align-self-center">
                                    <div className='min-img-block'>
                                        <img className="min-img" src={"/images/servicesPage/2_7.png"}/>

                                    </div>
                                </div>
                                <p className="text">
                                    Индивидуальный подбор методики борьбы с вредителями
                                </p>
                                <div className="bottom">
                                    <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                        узнать больше
                                        <div className="vector_more"></div>
                                    </button>
                                </div>
                                <div className="row request">
                                    <button className='basket'>
                                    </button>
                                    <p>добавить в запрос менеджеру</p></div>
                            </div>
                            <div className="center element br-bt col-sm">
                                <div className="img-c align-self">
                                    <div className='min-img-block'>
                                        <img className="min-img" src={"/images/servicesPage/2_8.png"}/>

                                    </div>
                                </div>
                                <p className="text">
                                    Долгосрочный прогноз осадков
                                </p>
                                <div className="bottom">
                                    <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                        узнать больше
                                        <div className="vector_more"></div>
                                    </button>
                                </div>
                                <div className="row request">
                                    <button className='basket'>
                                    </button>
                                    <p>добавить в запрос менеджеру</p></div>
                            </div>

                                <div className="element br-bt col-12 col-sm">

                                    <h4 className="text-next"><b>Перейти<br/>на следующую<br/>страницу
                                        услуг</b><br/>
                                        <img onClick={() => {changeActive(3)}} src={"/images/servicesPage/VectorBig.svg"}/>
                                    </h4>
                                    <div className="br-bt col-12">
                                        <button type="button" id="new-list" className="col-12 btn btn-primary">
                                            <p>следующая страница</p>

                                        </button></div>
                                    <div>
                                        <button id='btn-pagination_serv-1' onClick={() => {changeActive(1)}} className='btn btn-pagination_serv active'>01</button>
                                        <button id='btn-pagination_serv-2' onClick={() => {changeActive(2)}} className='btn btn-pagination_serv'>02</button>
                                        <button id='btn-pagination_serv-3' onClick={() => {changeActive(3)}} className='btn btn-pagination_serv'>03</button>
                                        <button id='btn-pagination_serv-4' onClick={() => {changeActive(4)}} className='btn btn-pagination_serv'>04</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
            :page===3?
                <div className="serv-block row">
                            <div className="container">
                                <div className="row">
                                    <div className="element el-1 col-sm">
                                        <div className="img align-self-center">
                                            <div className='min-img-block'>
                                                <img className="min-img" src={"/images/servicesPage/3_1.png"}/>
                                            </div>
                                        </div>
                                        <p className="text">
                                            Подбор индивидуальной методики севооборота с максимальным экономическом эффектом
                                        </p>
                                        <div className='bottom'>
                                            <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                                узнать больше
                                                <div className="vector_more"></div>
                                            </button>
                                        </div>
                                        <div className='row request'>
                                            <button className='basket'>
                                            </button>
                                            <p>добавить в запрос менеджеру</p>
                                        </div>
                                    </div>
                                    <div className="center element col-sm">
                                        <div className="img-c align-self">
                                            <div className='min-img-block'>
                                                <img className="min-img" src={"/images/servicesPage/3_2.png"}/>
                                            </div>
                                        </div>
                                        <p className="text">
                                            Экологическая оценка территории
                                        </p>
                                        <div className='bottom'>
                                            <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                                узнать больше
                                                <div className="vector_more"></div>
                                            </button>
                                        </div>
                                        <div className='row request'>
                                            <button className='basket'>
                                            </button>
                                            <p>добавить в запрос менеджеру</p>
                                        </div>
                                    </div>
                                    <div className="element col-sm">
                                        <div className="img align-self-left">
                                            <div className='min-img-block'>
                                                <img className="min-img" src={"/images/servicesPage/3_3.png"}/>
                                            </div>
                                        </div>
                                        <p className="text">
                                            Прогноз экономической эффективности участка
                                        </p>
                                        <div className='bottom'>
                                            <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                                узнать больше
                                                <div className="vector_more"></div>
                                            </button>
                                        </div>
                                        <div className='row request'>
                                            <button className='basket'>
                                            </button>
                                            <p>добавить в запрос менеджеру</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="element col-sm">
                                <div className="img r2 align-self-center">
                                    <div className='min-img-block'>
                                        <img className="min-img" src={"/images/servicesPage/3_4.png"}/>
                                    </div>
                                </div>
                                <p className="text">
                                    «Тест-драйв»
                                </p>
                                <div className='bottom'>
                                    <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                        узнать больше
                                        <div className="vector_more"></div>
                                    </button>
                                </div>
                                <div className='row request'>
                                    <button className='basket'>
                                    </button>
                                    <p>добавить в запрос менеджеру</p>
                                </div>
                            </div>
                            <div className="center element col-sm">
                                <div className="img-c r2 align-self">
                                    <div className='min-img-block'>
                                        <img className="min-img" src={"/images/servicesPage/3_5.png"}/>

                                    </div>
                                </div>
                                <p className="text">
                                    «Все включено»
                                </p>
                                <div className='bottom'>
                                    <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                        узнать больше
                                        <div className="vector_more"></div>
                                    </button>
                                </div>
                                <div className='row request'>
                                    <button className='basket'>
                                    </button>
                                    <p>добавить в запрос менеджеру</p>
                                </div>
                            </div>
                            <div className="element col-sm">
                                <div className="img r2 align-self-left">
                                    <div className='min-img-block'>
                                        <img className="min-img" src={"/images/servicesPage/3_6.png"}/>
                                    </div>
                                </div>
                                <p className="text">
                                    Комплексное  исследование участка
                                </p>
                                <div className='bottom'>
                                    <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                        узнать больше
                                        <div className="vector_more"></div>
                                    </button>
                                </div>
                                <div className='row request'>
                                    <button className='basket'>
                                    </button>
                                    <p>добавить в запрос менеджеру</p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="element el-1 col-sm br-bt ">
                                        <div className="img align-self-center">
                                            <div className='min-img-block'>
                                                <img className="min-img" src={"/images/servicesPage/3_7.png"}/>

                                            </div>
                                        </div>
                                        <p className="text">
                                            Мониторинг с/х угодий  в течение сезона
                                        </p>
                                        <div className="bottom">
                                            <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                                узнать больше
                                                <div className="vector_more"></div>
                                            </button>
                                        </div>
                                        <div className="row request">
                                            <button className='basket'>
                                            </button>
                                            <p>добавить в запрос менеджеру</p></div>
                                    </div>
                                    <div className="center element br-bt col-sm">
                                        <div className="img-c align-self">
                                            <div className='min-img-block'>
                                                <img className="min-img" src={"/images/servicesPage/3_8.png"}/>

                                            </div>
                                        </div>
                                        <p className="text">
                                            Оценка полей после сбора урожая  + подбор культур на будущий сезон
                                        </p>
                                        <div className="bottom">
                                            <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                                узнать больше
                                                <div className="vector_more"></div>
                                            </button>
                                        </div>
                                        <div className="row request">
                                            <button className='basket'>
                                            </button>
                                            <p>добавить в запрос менеджеру</p></div>
                                    </div>

                                    <div className="element br-bt col-12 col-sm">

                                        <h4 className="text-next"><b>Перейти<br/>на следующую<br/>страницу
                                            услуг</b><br/>
                                            <img onClick={() => {changeActive(4)}} src={"/images/servicesPage/VectorBig.svg"}/>
                                        </h4>
                                        <div className="br-bt col-12">
                                            <button type="button" id="new-list" className="col-12 btn btn-primary">
                                                <p>следующая страница</p>
                                            </button></div>
                                        <div>
                                            <button id='btn-pagination_serv-1' onClick={() => {changeActive(1)}} className='btn btn-pagination_serv active'>01</button>
                                            <button id='btn-pagination_serv-2' onClick={() => {changeActive(2)}} className='btn btn-pagination_serv'>02</button>
                                            <button id='btn-pagination_serv-3' onClick={() => {changeActive(3)}} className='btn btn-pagination_serv'>03</button>
                                            <button id='btn-pagination_serv-4' onClick={() => {changeActive(4)}} className='btn btn-pagination_serv'>04</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
            :
                <div className="serv-block row">
                            <div className="container">
                                <div className="row">
                                    <div className="element el-1 col-sm">
                                        <div className="img align-self-center">
                                            <div className='min-img-block'>
                                                <img className="min-img" src={"/images/servicesPage/4_1.png"}/>
                                            </div>
                                        </div>
                                        <p className="text">
                                            Оценка эффективности ведения с/х деятельности + рекомендации
                                             по конкретным проблемам
                                        </p>
                                        <div className='bottom'>
                                            <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                                узнать больше
                                                <div className="vector_more"></div>
                                            </button>
                                        </div>
                                        <div className='row request'>
                                            <button className='basket'>
                                            </button>
                                            <p>добавить в запрос менеджеру</p>
                                        </div>
                                    </div>
                                    <div className="center element col-sm">
                                        <div className="img-c align-self">
                                            <div className='min-img-block'>
                                                <img className="min-img" src={"/images/servicesPage/4_2.png"}/>
                                            </div>
                                        </div>
                                        <p className="text">
                                            Индивидуальный план решения проблем почвенного плодородия
                                        </p>
                                        <div className='bottom'>
                                            <button type="button" className="btn btn-serv_more d-flex align-items-center justify-content-center">
                                                узнать больше
                                                <div className="vector_more"></div>
                                            </button>
                                        </div>
                                        <div className='row request'>
                                            <button className='basket'>
                                            </button>
                                            <p>добавить в запрос менеджеру</p>
                                        </div>
                                    </div>

                                    <div className="element br-bt col-12 col-sm">

                                        <h4  className="text-next"><b>Перейти<br/>на следующую<br/>страницу
                                            услуг</b><br/>
                                            <img onClick={() => {changeActive(1)}} src={"/images/servicesPage/VectorBigReverse.svg"}/>
                                        </h4>
                                        <div className="br-bt col-12">
                                            <button type="button" id="new-list" className="col-12 btn btn-primary">
                                                <p>следующая страница</p>
                                            </button></div>
                                        <div>
                                            <button id='btn-pagination_serv-1' onClick={() => {changeActive(1)}} className='btn btn-pagination_serv'>01</button>
                                            <button id='btn-pagination_serv-2' onClick={() => {changeActive(2)}} className='btn btn-pagination_serv'>02</button>
                                            <button id='btn-pagination_serv-3' onClick={() => {changeActive(3)}} className='btn btn-pagination_serv'>03</button>
                                            <button id='btn-pagination_serv-4' onClick={() => {changeActive(4)}} className='btn btn-pagination_serv active'>04</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            }
        </div>
    );
};



export default AerospaceServices;
