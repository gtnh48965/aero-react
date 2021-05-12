import React from 'react';
import Carousel, {consts} from "react-elastic-carousel";

const ServicesDetailedCaruselOne = () => {
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
                <img className='ServDetailed-slider_img_small' src="/images/imgServDetailed/science-1-1.png" alt=""/>
                <div className='ServDetailed_text_small'>Анализ имеющихся проблем на территории<br/>1/10</div>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='ServDetailed-slider_img_small' src="/images/imgServDetailed/science-1-2.png" alt=""/>
                <div className='ServDetailed_text_small'>Получение космических снимков по определенным параметрам на заданную
                    территорию <br/>2/10</div>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='ServDetailed-slider_img_small' src="/images/imgServDetailed/science-1-3.png" alt=""/>
                <div className='ServDetailed_text_small'>Обработка космических снимков в специализированном программном
                    обеспечении и экспертный анализ проблем <br/>3/10</div>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='ServDetailed-slider_img_small' src="/images/imgServDetailed/science-1-4.png" alt=""/>
                <div className='ServDetailed_text_small'>Информационный анализ территори <br/>4/10</div>
            </div>

        </Carousel>
    );
};

export default ServicesDetailedCaruselOne;