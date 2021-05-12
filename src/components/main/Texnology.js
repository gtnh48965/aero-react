import React from 'react';
import TexnologyCarusel from "./TexnologyCarusel";

const Texnology = ({width}) => {

    return (
        <div className="container texnology mb-160 mt-5">
            <div className="row mb-lg-5">
                <div className="col-12 col-lg-6">
                    <div className="container-title">
                        <h1>Технология работы aerospace-agro</h1>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <p className="top-info">Наша задача - максимально подробно представить полное и подробное
                        описание территории. На основе данных, а также дополнительных рекомендаций от нас, Вы
                        получаете мощный инструмент для повышения качества работы Вашего предприятия</p>
                </div>
            </div>
            {width > 1024?
                <div>
                    <div className="row pt-5">
                        <div className='col-6 snake-block snake-block-1'>
                            <img className='snake-block-img-top-1' src="images/texnology/0.png" alt=""/>
                            <div className='snake-block-text snake-block-text-top-1'>Анализ имеющихся проблем на территории</div>
                            <img className='snake-block-img-top-12' src="images/texnology/1.png" alt=""/>
                            <div className='snake-block-text snake-block-text-top-12'>Получение космических снимков по определенным параметрам на заданную
                                территорию</div>
                        </div>
                        <div className='col-6 snake-block snake-block-2 snake-right'>
                            <img className='snake-block-img-top-2' src="images/texnology/2.png" alt=""/>
                            <div className='snake-block-text snake-block-text-top-2'>Обработка космических снимков <br/>в специализированном программном
                                обеспечении и экспертный <br/>анализ проблем</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-6 snake-block snake-block-3 snake-left'>
                            <img className='snake-block-img-top-3' src="images/texnology/3.png" alt=""/>
                            <div className='snake-block-text snake-block-text-top-3'>Информационный анализ территории</div>
                        </div>
                        <div className='col-6 snake-block snake-block-4'>
                            <img className='snake-block-img-top-4' src="images/texnology/4.png" alt=""/>
                            <div className='snake-block-text snake-block-text-top-4'>Использование методов искусственного интеллекта для детального анализа проблем</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-6 snake-block snake-block-5'>
                            <img className='snake-block-img-top-5' src="images/texnology/5.png" alt=""/>
                            <div className='snake-block-text snake-block-text-top-5'>Математическое моделирование рисков и прогноза урожая</div>
                        </div>
                        <div className='col-6 snake-block snake-block-6 snake-right'>
                            <img className='snake-block-img-top-6' src="images/texnology/6.png" alt=""/>
                            <div className='snake-block-text snake-block-text-top-6'>Составление и разработка индивидуальных рекомендаций по решению имеющихся проблем</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-6 snake-block snake-block-7 snake-left'>
                            <img className='snake-block-img-top-7' src="images/texnology/7.png" alt=""/>
                            <div className='snake-block-text snake-block-text-top-7'>Создание плана для повышения экономической эффективности фермерского хозяйства.</div>
                            <img className='snake-block-img-top-9' src="images/texnology/9.png" alt=""/>
                        </div>
                        <div className='col-6 snake-block snake-block-8'>
                            <img className='snake-block-img-top-8' src="images/texnology/8.png" alt=""/>
                            <div className='snake-block-text snake-block-text-top-8'>Оценка затрат и поиск оптимальных решений</div>
                        </div>
                    </div>
                    <div className="row h-120">
                        <div className='col-6'>
                        </div>
                        <div className='col-5 offset-1 snake-block-9 '>
                            <div className='snake-block-text'>Наши технологии будут полезны как крупным агрохолдингам, так и частным компаниям и фермерам, кто заботятся о благополучии своей территории и желают</div>
                            <div className='d-flex mt-4'>
                                <div>
                                    <img src="images/texnology/11.svg" alt=""/>
                                </div>
                                <div className='ml-4'>
                                    <b className='snake-block-text'>PDF документ включает</b>
                                    <div className='snake-block-text'>исследование</div>
                                    <div className='snake-block-text'>решение</div>
                                    <div className='snake-block-text'>рекомендации</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <TexnologyCarusel />
            }
        </div>
    );
};

export default Texnology;