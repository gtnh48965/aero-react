import React, { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom'

const NavBar = ({width}) => {
    let [dropdown, setDropdown] = useState(true);
    const history = useHistory()
    useEffect(() => {
        if(history.location.pathname === '/main') {
            return;
        }
        if (width > 1000){
            document.getElementById('nav'+ history.location.pathname).classList.toggle("active");
        } else {
            if (!dropdown) {
                document.getElementById('nav'+ history.location.pathname).classList.toggle("active");
            }
        }
    }, [dropdown])


    function DropdownMenu() {
        setDropdown(!dropdown)
    }
    return (
        <header className="header">
            {width > 1000?
                <div>
                    <div className="container header-one">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center justify-content-between">
                                <a className="btn-link" href="/main"><img src="/images/brand.svg" alt="AeroSpace-Agro"/></a>
                                <a className="btn-link" href="tel:84998994474"><img src="images/header/call.svg" /> +7 (499) 899 44 74</a>
                                <a className="btn-link" href="#">Заказать обратный звонок</a>
                                <div className="social d-flex justify-content-center align-items-center">
                                    <span>Мы в соцсетях</span>
                                    <a href="#"><img src="/images/header/inst.svg" alt=""/></a>
                                    <a href="#"><img src="/images/header/vk.svg" alt=""/></a>
                                    <a href="#"><img src="/images/header/fb.svg" alt=""/></a>
                                </div>
                                <div className="lang d-flex justify-content-between align-items-center">
                                    <img src="/images/header/rus.svg"/>
                                    <span>rus</span>
                                    <a href="#"> <img src="/images/header/drop.svg" alt=""/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg bg-grad">
                        <div className="container">
                            <ul className="navbar-nav w-100 d-flex justify-content-between align-items-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Команда</a>
                                </li>
                                <li className="nav-item">
                                    <a id='nav/roadmap' className="nav-link" href="/roadmap">Дорожная карта проекта</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Новости</a>
                                </li>
                                <li className="nav-item">
                                    <a id='nav/services'  className="nav-link" href="/services">Услуги</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Блог</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Наши мероприятия</a>
                                </li>
                                <li className="nav-item">
                                    <a id='nav/cases' className="nav-link" href="/cases">Кейсы</a>
                                </li>
                                <li className="nav-item">
                                    <a id='nav/contacts' className="nav-link" href="/contacts">Контакты</a>
                                </li>
                                <li className="nav-item">
                                    <button className="btn" type="submit"><img src="/images/header/search.svg" alt=""/></button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                :
                width > 768?
                null
                :
                dropdown?
                    <div className='header_small'>
                        <ul className="navbar-nav d-flex flex-row justify-content-between align-items-center">
                            <div className="lang d-flex justify-content-between align-items-center">
                                <img src="/images/header/rus.svg"/>
                                <a href="#"> <img src="/images/header/drop.svg" alt=""/> </a>
                            </div>
                            <li className="nav-item">
                                <a className="btn-link" href="/main"><img src="/images/brand_small.svg"
                                                                          alt="AeroSpace-Agro"/></a>
                            </li>
                            <img onClick={DropdownMenu} src="/images/burger.svg" alt="b"/>
                        </ul>
                    </div>
                    :
                    <div className="dropdown-men">
                        <ul className="navbar-nav d-flex flex-row justify-content-between align-items-center">
                            <div className="lang d-flex justify-content-between align-items-center">
                                <img src="/images/header/rus.svg"/>
                                <a href="#"> <img src="/images/header/drop.svg" alt=""/> </a>
                            </div>
                            <li className="nav-item">
                                <a className="btn-link" href="/main"><img src="/images/brand_small.svg"
                                                                          alt="AeroSpace-Agro"/></a>
                            </li>
                            <img onClick={DropdownMenu} src="/images/burger.svg" alt="b"/>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Команда</a>
                            </li>
                            <li className="nav-item">
                                <a id='nav/roadmap' className="nav-link" href="/roadmap">Дорожная карта проекта</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Новости</a>
                            </li>
                            <li className="nav-item">
                                <a id='nav/services' className="nav-link" href="/services">Услуги</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Блог</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Наши мероприятия</a>
                            </li>
                            <li className="nav-item">
                                <a id='nav/cases' className="nav-link" href="/cases">Кейсы</a>
                            </li>
                            <li className="nav-item">
                                <a id='nav/contacts' className="nav-link" href="/contacts">Контакты</a>
                            </li>
                        </ul>
                    </div>
            }
        </header>
    );
};

export default NavBar;