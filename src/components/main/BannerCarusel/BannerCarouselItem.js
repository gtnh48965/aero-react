import React from 'react';

const BannerCarouselItem = ({banner}) => {

    return (
        <a href='#' className={'banner-item'}
           key={banner.id}
           style={{'--hover-image': `url(${banner.img})` }}>
            <div className="container-title d-flex">
                <h3>{banner.title.replace(' ', '\n')}</h3>
                <img className='' src='/images/icons/btn-lg-next.svg' />
            </div>
            <div className='banner-content'>
                {banner.content.split('\n').map((item,index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <p className='banner-link'>Узнать подробнее</p>
        </a>
    );
};      

export default BannerCarouselItem;