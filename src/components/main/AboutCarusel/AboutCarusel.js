import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import Carousel, { consts } from "react-elastic-carousel";
import AboutCarouselItem from "./AboutCarouselItem";

const AboutCarusel  = observer(({width}) => {
    const {about} = useContext(Context);
    const breakPoints = [
        {width:0, itemsToShow: 1, className: "slider-1_block_small", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
        {width:500, itemsToShow: 2, className: "slider-1_block_small", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
        {width:1000, itemsToShow: 3, className: "slider-1_block", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
    ];

    return (
        <div>
            {width > 1024 ?
                <div className='container mb-80'>
                    <Carousel breakPoints={breakPoints}
                              renderArrow={
                                  ({type, onClick, isEdge}) => {
                                      const pointer = type === consts.PREV ? '/images/aboutstore/back.svg' : "/images/aboutstore/next.svg";
                                      const btnName = type === consts.PREV ? 'about-arrow back' : 'about-arrow next'
                                      return (
                                          <button className={btnName} onClick={onClick} disabled={isEdge}>
                                              <img src={pointer} alt=""/>
                                          </button>
                                      )
                                  }
                              }>
                        {about.about.map(item =>
                            <AboutCarouselItem key={item.id} about={item}/>
                        )}
                    </Carousel>
                </div>
                :
                <Carousel breakPoints={breakPoints}
                          renderArrow={
                              ({type, onClick, isEdge}) => {
                                  const pointer = type === consts.PREV ? '/images/aboutstore/back.svg' : "/images/aboutstore/next.svg";
                                  const btnName = type === consts.PREV ? 'about-arrow back' : 'about-arrow next'
                                  return (
                                      <button className={btnName} onClick={onClick} disabled={isEdge}>
                                          <img src={pointer} alt=""/>
                                      </button>
                                  )
                              }
                          }>
                    {about.about.map(item =>
                        <AboutCarouselItem key={item.id} about={item}/>
                    )}
                </Carousel>
            }
        </div>

    );
});

export default AboutCarusel;