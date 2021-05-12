import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-3"><img src="/images/brand.svg" alt=""/></div>
                    <div className="col-12 col-lg-3">
                        <ul className="list-unstyled">
                            <li><a href="#">Команда</a></li>
                            <li><a href="/roadmap">Дорожная карта проекта</a></li>
                            <li><a href="#">Новости</a></li>
                            <li><a href="/services">Услуги</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3">
                        <ul className="list-unstyled ">
                            <li><a href="#">Блог</a></li>
                            <li><a href="#">Наши мероприятия</a></li>
                            <li><a href="#">Кейсы</a></li>
                            <li><a href="/contacts">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3">
                        <ul className="list-unstyled">
                            <li className="mb-4"><a href="tel:84998994474"><img src="images/header/call.svg" /> +7 (499) 899 44 74</a></li>
                            <li className="mb-4">
                                <span>Мы в соцсетях:</span>
                                <div className='mt-2'>
                                    <a className="mr-3" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="mr-3" href="#"><i className="fa fa-vk"></i></a>
                                    <a className="mr-3" href="#"><i className="fa fa-facebook-square"></i></a>
                                </div>
                            </li>
                            <li>©AEROSPACE_AGRO, <br/> 2019—2021</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;