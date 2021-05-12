import React from 'react';
import Carousel, {consts} from "react-elastic-carousel";

const WhereuseCarusel = () => {
    const breakPoints = [
        {width:0, itemsToShow: 1, className: "WhereuseCarusel", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
        {width:660, itemsToShow: 2, className: "WhereuseCarusel", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
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
                <div className='element one'>
                    <p>Точное (цифровое) земледелие</p>
                    <div className="pagination">1/8</div>
                </div>
                <div className='element two'>
                    <p>Расчёт внесения удобрений</p>
                    <div className="pagination">2/8</div>
                </div>
                <div className='element third'>
                    <p>Засоление земель, уровень их минерального истощения</p>
                    <div className="pagination">3/8</div>
                </div>
                <div className='element fourth'>
                    <p>Расчёт погодных условий и борьба с засухой</p>
                    <div className="pagination">4/8</div>
                </div>
                <div className='element five'>
                    <p>Лечение и предупреждение заболеваний растений</p>
                    <div className="pagination">5/8</div>
                </div>
                <div className='element six'>
                    <p>Лечение и предупреждение заболеваний растений</p>
                    <div className="pagination">6/8</div>
                </div>
                <div className='element seven'>
                    <p>Учёт, изучение и соотношение агроклиматических ресурсов (солнечный свет, осадки, водные ресурсы, общее состояние климата)</p>
                    <div className="pagination">7/8</div>
                </div>
                <div className='element eight'>
                    <p>Учёт, изучение и соотношение агроклиматических ресурсов (солнечный свет, осадки, водные ресурсы, общее состояние климата)</p>
                    <div className="pagination">8/8</div>
                </div>
        </Carousel>
    );
};
export default WhereuseCarusel;