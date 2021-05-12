import React from 'react';

const AboutCarouselItem = ({about}) => {
    return (
        <div className='about-item'
            style={{
                backgroundImage:  `url(${about.img})`
            }}
        >
            <div className='about-item-title'>{about.name}</div>
        </div>
    );
};

export default AboutCarouselItem;