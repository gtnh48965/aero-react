import React, {useContext, useState,} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const Services = observer(({width}) => {
    const {services} = useContext(Context);
    const [flag, setFlag] = useState(services.services[0]);
    function changeFlag(item) {
        document.getElementsByClassName('services-active active')[0].classList.remove("active");
        document.getElementById('services ' + item.id).classList.toggle("active");
        setFlag(item)
    }

    return (
        <div className={width>1000?"container services mb-160":"container services mb-5"}>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="container-title">
                        <h1>УСЛУГИ AEROSPACE-AGRO</h1>
                    </div>
                </div>
            </div>
            <div>
                {width>1000?
                    <div className="row">
                        <ul className="col-6">
                            {services.services.map((item, index) =>
                                <li key={item.id} id={'services ' + item.id} onClick={() => changeFlag(item)} className={index===0?'services-active active': 'services-active '}><img src={item.svg} alt="Услуга" /><p
                                    className="w-auto">{item.name}</p></li>
                            )}
                            <li><a href="#" className="btn btn-color">перейти в полный перечень услуг <img
                                src="images/icons/btn-lg-next.svg"/></a></li>
                        </ul>
                        <div className="col-5 offset-1 d-flex flex-column about-services">
                            <h3>{flag.name}</h3>
                            <img src={flag.img} alt="" />
                            <p>{flag.description}</p>
                            {flag.ul?.map((item,index) =>
                                <p key={index}><img src="images/roadmap/pol.png" alt="Услуга" />{item}</p>
                            )}
                            <a href={flag.link} className="btn btn-color">Полное описание услуги <img
                                src="images/icons/btn-lg-next.svg"/></a>
                        </div>
                    </div>
                    :
                    <div className='row'>
                        <div className='about-services_small col-12 d-flex flex-column align-content-start justify-content-start'>
                            {services.services.map((item, index) =>
                                <div key={item.id} id={'services ' + item.id} className='d-flex align-content-start justify-content-start flex-column mb-50 '>
                                    <img width={'50px'} src={item.svg} alt="Услуга" />
                                    <div className="w-auto">{item.name}</div>
                                </div>
                            )}
                            <div><a href="#" className="btn btn-color">перейти в полный перечень услуг <img
                                src="images/icons/btn-lg-next.svg"/></a></div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
});

export default Services;