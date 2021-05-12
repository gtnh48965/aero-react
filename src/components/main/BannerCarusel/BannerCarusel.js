import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import Carousel, { consts } from "react-elastic-carousel";
import BannerCarouselItem from "./BannerCarouselItem";

const itemsToShow = 3;
const getMid = () => Math.ceil(itemsToShow / 2) - 1; // 0 based

const BannerCarusel  = observer(({width}) => {
    const {banner} = useContext(Context);
    const [activeItemIndex, setActiveItemIndex] = useState(getMid);
    const breakPoints = [
        {width: 1000, itemsToShow: 3, className: "slider-1_block", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
    ];


    return (
        <div className='container mb-80'>
            {width>1000?
                <Carousel breakPoints={breakPoints}
                          renderArrow={
                              ({ type, onClick, isEdge }) => {
                                  const pointer = type === consts.PREV ? '/images/aboutstore/back.svg' : "/images/aboutstore/next.svg"
                                  return (
                                      <button className='banner-arrow' onClick={onClick} disabled={isEdge}>
                                          <img src={pointer} alt=""/>
                                      </button>
                                  )}
                          }>
                    {banner.banner.map(item =>
                        <BannerCarouselItem key={item.id} banner={item}/>

                    )}
                </Carousel>
                :
                <div className={'banner-item-small'}
                   // style={{backgroundImage: '' }}
                    >
                    <div className="container-title d-flex align-items-end">
                        <h3>Услуга<br/>Test-Drive</h3>
                        <img className='' src='/images/icons/btn-lg-next.svg' />
                    </div>
                    <div className='banner-content'>
                        <p>Компания AEROSPACE-AGRO предлагает каждому новому клиенту воспользоваться услугой Test-Drive!</p>
                        <p>За сумму в 200 000 рублей мы сделаем подробную диагностику небольшого участка Вашей земли.</p>
                    </div>
                    <a className='banner-link'>Узнать подробнее</a>
                </div>

            }
        </div>
    );
});

export default BannerCarusel;