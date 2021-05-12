import React from 'react';
import Carousel, {consts} from "react-elastic-carousel";

const WhytopCarusel = () => {
    const breakPoints = [
        {width:0, itemsToShow: 1, className: "WhytopCarusel", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
        {width:560, itemsToShow: 2, className: "WhytopCarusel", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
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
            <div className='element_whytop'>
                <div className="svg_block">
                    <img className="WhytopCarusel_img_small" src="/images/top/8.svg" alt=""/>
                </div>
                <div className="text_block">Собственные разработанные методики. Используем инновационные методы в своей работе</div>
            </div>
            <div className='element_whytop'>
                <div className="svg_block">
                    <img className="WhytopCarusel_img_small" src="/images/top/7.svg" alt=""/>
                </div>
                <div className="text_block">Подробный результат исследования и список рекомендаций</div>
            </div>
            <div className='element_whytop'>
                <div className="svg_block">
                    <img className="WhytopCarusel_img_small" src="/images/top/6.svg" alt=""/>
                </div>
                <div className="text_block">Программа пилотирования крупных агрохолдингов (актуально для больших территорий)</div>
            </div>
            <div className='element_whytop'>
                <div className="svg_block">
                    <img className="WhytopCarusel_img_small" src="/images/top/1.svg" alt=""/>
                </div>
                <div className="text_block">Гибкая ценовая политика. Индивидуальный подход к каждому клиенту</div>
            </div>
            <div className='element_whytop'>
                <div className="svg_block">
                    <img className="WhytopCarusel_img_small" src="/images/top/5.svg" alt=""/>
                </div>
                <div className="text_block">Только наша компания осуществляет расчет экономической эффективности сельскохозяйственных участков с использованием наиболее точной математической модели</div>
            </div>
            <div className='element_whytop'>
                <div className="svg_block">
                    <img className="WhytopCarusel_img_small" src="/images/top/2.svg" alt=""/>
                </div>
                <div className="text_block">Учет множества критериев и факторов при проведении исследовани</div>
            </div>
            <div className='element_whytop'>
                <div className="svg_block">
                    <img className="WhytopCarusel_img_small" src="/images/top/3.svg" alt=""/>
                </div>
                <div className="text_block">Штат высококлассных сертифицированных специалистов</div>
            </div>
            <div className='element_whytop'>
                <div className="svg_block">
                    <img className="WhytopCarusel_img_small" src="/images/top/4.svg" alt=""/>
                </div>
                <div className="text_block">Наличие специализированного программного обеспечения. Использование современного оборудования</div>
            </div>

        </Carousel>
    );
};

export default WhytopCarusel;