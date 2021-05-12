import React from 'react';

const NewsCarouselItem = ({news}) => {
    return (
        <div className='news'>
            <div className=''>{news.name}</div>
        </div>
    );
};

export default NewsCarouselItem;