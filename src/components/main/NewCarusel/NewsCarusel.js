import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import Carousel  from "react-elastic-carousel";
import NewsCarouselItem from "./NewsCarouselItem";

const NewsCarusel  = observer(() => {
    const {news} = useContext(Context);
    const breakPoints = [
        {width:0, itemsToShow: 1, className: "slider-1_block", autoPlaySpeed: 2000, showArrows: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
        {width:1000,verticalMode: true, itemsToShow: 1, className: "slider-1_block", autoPlaySpeed: 2000, showArrows: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
    ];

    return (
        <div className='container'>
            <div className="row">
                <div className='news-pos'>
                    <div className='position-relative'>
                        <Carousel breakPoints={breakPoints}
                                  renderPagination={({ pages, activePage, onClick }) => {
                                      return (
                                          <div className="news-dots">
                                              {pages.map(page => {
                                                  const isActivePage = activePage === page
                                                  return (
                                                      <button key={page}
                                                              onClick={() => onClick(page)}
                                                              className={isActivePage?"active":""}>
                                                          <div></div>
                                                      </button>
                                                  )
                                              })}
                                          </div>
                                      )
                                  }}>
                            {news.news.map(item =>
                                <NewsCarouselItem key={item.id} news={item}/>
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

    );
});

export default NewsCarusel;