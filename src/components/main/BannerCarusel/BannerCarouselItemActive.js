import React from 'react';

const BannerCarouselItemActive = ({banner}) => {

    return (
        <div className='banner-item'
             style={{
                 backgroundImage:  `url(${banner.img})`
             }}
        >
            <div className="container-title d-flex">
                <h3 className='active'>{banner.title}</h3>
                <img className='ml-3' src='/images/icons/btn-lg-next.svg' />
            </div>
            <div className='banner-content'>
                {banner.content.split('\n').map((item, index)=> (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <a className='btn btn-light' href={'#'}>Узнать подробнее</a>
        </div>
    );
};

export default BannerCarouselItemActive;