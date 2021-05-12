import React from 'react';

const ServisCarouselItem = ({servis}) => {
    console.log(servis.img)
    return (
        <div className='col-12 about-item_servis'
             style={{
                 backgroundImage:  `url(${servis.img})`
             }}
        >
            <div className='row slider-two serv-block'>
                <div className='col-6 container-title'>
                    <h1 className=''>
                        {servis.name}
                    </h1>
                    <h5>
                        {servis.body}

                    </h5>
                    <div className='bottom sl'>
                        <a href= {servis.link_bottom}>
                            <button type="button" className="btn btn-primary btn-lg">
                                <p>узнать больше</p>
                                <div className='vector'>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServisCarouselItem;