import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const getWidth  = () => {
    return window.innerWidth;
};
const ContactsPage = () => {
    let [width, setWidth] = useState(getWidth);
    useEffect(() => {
        const resizeListener = () => {
            setWidth(getWidth())
        };
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [])
    return (
        <div className='contact_bg' style={{backgroundImage: 'url("/images/bg.jpg")'}}>
            <NavBar width={width}/>
            {width >500? <img className='contact_img ' src='/images/ContactsPage/bg.jpg' /> :<img className='contact_img ' src='/images/ContactsPage/bg-small.png' />}
            <div className='container'>
                <div className="row">
                    <div className='col-12 col-lg-6 d-flex flex-column'>
                        <ul className="list-unstyled contacts">
                            <li className={"col"}>
                                <a className="d-flex flex-column flex-lg-row" href="mailto:info@aerospace-agro.com">
                                    <div className=' contacts_li_img'>
                                        <img src="images/ContactsPage/mail.svg" />
                                    </div>
                                    <div className='d-flex flex-column flex-lg-row'>
                                        <b className='mr-1'>E-mail:</b>
                                        info@aerospace-agro.com
                                    </div>
                                </a>
                            </li>
                            <li className={"col"}>
                                <a className="d-flex flex-column flex-lg-row" href="tel:84998994474">
                                    <div className=' contacts_li_img'>
                                        <img src="images/ContactsPage/phone.svg" />
                                    </div>
                                    <div className='d-flex flex-column flex-lg-row'>
                                        <b className='mr-1'>Тел:</b> +7 (499) 899 44 74
                                    </div>
                                </a>
                            </li>
                            <li className="d-flex flex-column flex-lg-row col">
                                <div className=' contacts_li_img'>
                                    <img src="images/ContactsPage/06.svg" />
                                </div>
                                <b className='mr-1'>ИНН:</b> 9706011459
                                </li>
                            <li className="d-flex flex-column flex-lg-row col">
                                <div className='d-none d-lg-block contacts_li_img'></div>
                                <b className='mr-1'>ОГРН:</b> 1207700484672</li>
                            <li className="d-flex flex-column flex-lg-row col">
                                <div className='contacts_li_img'><img src="images/ContactsPage/map.svg" /></div>
                                <span><b className='mr-1'>Адрес:</b> 115419, Москва, ул. Академика Петровского, <br/>д. 5 стр. 1, пом. V ком. 33</span></li>
                            <li className="d-flex flex-column flex-lg-row col">
                                <div className='d-none d-lg-block contacts_li_img'></div>
                                <div className="d-flex flex-column">
                                    <b>Мы в соцсетях:</b>
                                    <div className='mt-2 d-flex contact-small'>
                                        <a className="mr-3" href="#"><i className="fa fa-instagram"></i></a>
                                        <a className="mr-3" href="#"><i className="fa fa-vk"></i></a>
                                        <a className="mr-3" href="#"><i className="fa fa-facebook-square"></i></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-6'>
                        {width < 720? <h3 className="contact_small">Вопросы? Пишите нам!</h3> :<h3 className='w-100 text-wrap'>Остались вопросы? <br/> Пишите нам мы найдем ответы</h3>}
                        <form className="">
                            <input className='w-100 input_contacts' placeholder='Ваше имя' type="text"/>
                            <input className='w-100 input_contacts' placeholder='Ваш номер' type="text"/>
                            <textarea  className='w-100 input_contacts' placeholder='Опишите вашу проблему'/>
                            <button className='btn-color_second' type='submit'>отправить <img src="images/icons/btn-lg-next.svg" alt=""/></button>
                        </form>
                        <p className='privacy text-wrap'>Нажимая «Отправить» вы соглашаетесь <br/>c <a className='text-wrap' href=""> политикой конфиденциальности</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactsPage;