import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import ServicesDetailedCaruselOne from "./ServicesDetailedCarusel/ServicesDetailedCaruselOne"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];



const ServicesDetailed= () => {
    return(


        <div className="container">
            <div className="row ">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="container-title">
                            <h1>
                                Комплекс исследований и оценка участка на наличие вредителей
                            </h1>
                        </div>
                        <p>
                            Здоровая экосистема территории — ключ к высокому качеству почвы и уровню урожайности. Вредители могут нанести большой урон растением и почве, стать причиной потери урожая. Проработанная схема борьбы с вредителями поможет вам сохранить культуры.
                        </p>
                        <div className="col">
                            <div className="row">
                                <div className="row-12 col-lg-3 min-img-servDetailed">
                                    <img src="/images/imgServDetailed/one-one-min-img.png" />
                                    <p>
                                        Наличие<br/> вредителей
                                    </p>
                                </div>
                                <div className="col-12 col-lg-3 min-img-servDetailed">
                                    <img src="/images/imgServDetailed/one-two-min-img.png" />
                                    <p>
                                        Наличие<br/> вредителей
                                    </p>
                                </div>

                                <div className="col-12 col-lg-3 min-img-servDetailed">
                                    <img src="/images/imgServDetailed/one-three-min-img.png" />
                                    <p>
                                        Наличие<br/> вредителей
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-12 imgServDetailed">

                    </div>

                </div>
        </div>
            <ServicesDetailedCaruselOne/>

            <div className="row first_block_serv ">
                <div className="imgServDetailed-technologies">
                    <div className="row">
                        <div className="col-6 ServDetailed-slider">
                            <div className="row-6">
                                <img className="col-5" src="/images/imgServDetailed/science-1-1.png" />
                                <img className="col-5" src="/images/imgServDetailed/science-1-2.png" />
                            </div>
                            <div className="row-6">
                                <div className="row-6">
                                    <img className="col-5" src="/images/imgServDetailed/science-1-3.png" />
                                    <img className="col-5" src="/images/imgServDetailed/science-1-4.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="container-title">
                                <h1>
                                    Технология
                                </h1>
                                <p>
                                    На основе космических снимков высокого разрешения собирается множество данных.
                                    После анализа информации, формируется полный отчет о текущей ситуации с вредителями
                                    на вашем участке, схема их распространения, прогноз ущерба и последствий.  На основе
                                    этих данных мы создаем план работы и профилактики по борьбе с вредителями. Далее, нами
                                    будет разработана модель возможно распространения и последствий, при помощи которой мы
                                    сможем оценить возможные риски.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <ServicesDetailedCaruselOne/>
            <div className="row second_block_serv">
                <div className="imgServDetailed-decision">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="container-title">
                                <h1>
                                    Решение
                                </h1>
                                <p>
                                    Для борьбы с вредителями за объем урожая и состояние участка
                                    формируется список необходимых ресурсов, сроков, действий и решений,
                                    с подробным описанием, чтобы вы могли незамедлительно приступить к решению проблемы.
                                </p>
                            </div>

                        </div>
                        <div className="col-6 ServDetailed-sliderPk">
                            <div className="row-6">
                                <img  className="col-5" src="/images/imgServDetailed/decision-1-1.png" />
                                <img  className="col-5" src="/images/imgServDetailed/decision-1-2.png" />
                            </div>
                            <div className="row-6">
                                <div className="row-6">
                                    <img  className="col-5" src="/images/imgServDetailed/decision-1-3.png" />
                                    <img  className="col-5" src="/images/imgServDetailed/decision-1-4.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 ServDetailed-sliderMb">

                        </div>
                    </div>
                </div>
            </div>

            <div className="second_point">
            <div className="row third_block_serv">
                <div className="row imgServDetailed-result">
                    <div className="col-lg-6 col-12">
                        <div className="row">

                            <div className="col-12 col-lg-6">
                                <div className="row imgServDetailed-result-block">
                                    <img className="" src="/images/imgServDetailed/result-1-1.png" />
                                    <p className="col">
                                        Высокий<br/>урожай
                                    </p>
                                </div>
                                <div className="row imgServDetailed-result-block">
                                    <img className="" src="/images/imgServDetailed/result-1-2.png" />
                                    <p className="col">
                                        Диагностика<br/>состояния
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="row imgServDetailed-result-block">
                                    <img className="" src="/images/imgServDetailed/result-1-3.png" />
                                    <p className="col">
                                        Стабильный<br/>рост культур
                                    </p>
                                </div>
                                <div className="row imgServDetailed-result-block">
                                    <img className="" src="/images/imgServDetailed/result-1-4.png" />
                                    <p className="col">
                                        Диагностика<br/>состояния
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="container-title">
                            <h1>
                                В результате вы получаете
                            </h1>
                            <p>
                                Применив рекомендации по борьбе с вредителями, вы сможете обеспечить стабильный рост культур и высокую урожайность.

                            </p>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};
export default ServicesDetailed;