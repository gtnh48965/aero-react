import React from 'react';
import Carousel, {consts} from "react-elastic-carousel";

const TexnologyCarusel = () => {
    const breakPoints = [
        {width:0, itemsToShow: 1, className: "TexnologyCarusel", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
        {width:560, itemsToShow: 2, className: "TexnologyCarusel", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
    ];
    return (
        <Carousel breakPoints={breakPoints}
                  renderArrow={
                      ({ type, onClick, isEdge }) => {
                          const pointer = type === consts.PREV ? '/images/aboutstore/back.svg' : "/images/aboutstore/next.svg";
                          const btnName = type === consts.PREV ?'about-arrow back' :'about-arrow next'
                          return (
                              <button className={btnName} onClick={onClick} disabled={isEdge}>
                                  <img src={pointer} alt=""/>
                              </button>
                          )
                      }
                  }>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='texnologyCarusel_img_small' src="images/texnology/0.png" alt=""/>
                <div className='texnologyCarusel_text_small'>Анализ имеющихся проблем на территории<br/>1/10</div>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='texnologyCarusel_img_small' src="images/texnology/1.png" alt=""/>
                <div className='texnologyCarusel_text_small'>Получение космических снимков по определенным параметрам на заданную
                    территорию <br/>2/10</div>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='texnologyCarusel_img_small' src="images/texnology/2.png" alt=""/>
                <div className='texnologyCarusel_text_small'>Обработка космических снимков в специализированном программном
                    обеспечении и экспертный анализ проблем <br/>3/10</div>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='texnologyCarusel_img_small' src="images/texnology/3.png" alt=""/>
                <div className='texnologyCarusel_text_small '>Информационный анализ территори <br/>4/10</div>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='texnologyCarusel_img_small' src="images/texnology/4.png" alt=""/>
                <div className='texnologyCarusel_text_small'>Использование методов искусственного интеллекта для детального анализа проблем<br/>5/10</div>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='texnologyCarusel_img_small' src="images/texnology/5.png" alt=""/>
                <div className='texnologyCarusel_text_small'>Математическое моделирование рисков и прогноза урожая<br/>6/10</div>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='texnologyCarusel_img_small' src="images/texnology/6.png" alt=""/>
                <div className='texnologyCarusel_text_small'>Составление и разработка индивидуальных рекомендаций по решению имеющихся проблем<br/>7/10</div>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='texnologyCarusel_img_small' src="images/texnology/7.png" alt=""/>
                <div className='texnologyCarusel_text_small'>Создание плана для повышения экономической эффективности фермерского хозяйства<br/>8/10</div>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='texnologyCarusel_img_small' src="images/texnology/8.png" alt=""/>
                <div className='texnologyCarusel_text_small'>Оценка затрат и поиск оптимальных решений<br/>9/10</div>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='texnologyCarusel_img_small' src="images/texnology/9.png" alt=""/>
                <div className='texnologyCarusel_text_small'>Наши технологии будут полезны как крупным агрохолдингам, так и частным компаниям и фермерам<br/>10/10</div>
            </div>
        </Carousel>
    );
};

export default TexnologyCarusel;