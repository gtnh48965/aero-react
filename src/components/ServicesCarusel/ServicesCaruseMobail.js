import React, {useContext} from 'react';
class ServicesCaruselMobail extends React.Component {

    render() {
        return (
            <div className="container where_use mb-160">
                <div className="row">
                    <div className="col-md-5 col-12">
                        <div className="container-title">
                            <div className='col-12'>
                                <h1 className='not-marge-bot'>услуга <br/>TESR-DRIVE
                                    <div className='vector'>
                                    </div>
                                </h1>
                                <p>
                                    Компания AEROSPACE-AGRO предлагает каждому новому клиенту
                                    воспользоваться услугой Test-Drive!<br/> За сумму в 200 000
                                    рублей мы сделаем подробную диагностику небольшого участка
                                    Вашей земли.
                                </p>
                                <div className='min-img-block col-12'>
                                    <img className="min-img" src={"/images/services/1.png"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ServicesCaruselMobail