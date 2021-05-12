import React from 'react';

const Media = () => {
    return (
        <div className="container mb-160">
            <div className="container-title">
                <h1>ССЫЛКИ НА СМИ</h1>
            </div>
            <div className="row mb-50">
                <div className="col-12 col-lg-2 d-flex flex-column justify-content-center">
                    <div className='d-flex justify-content-center'>
                        <img src="/images/logo_partners/logo-8.png" alt=""/>
                    </div>
                </div>
                <div className="col-12 col-lg-5 d-flex flex-column justify-content-between">
                    <div>
                        <div className="container-title">
                            <h4>Роскосмос</h4>
                        </div>
                        <b>Космическая среда №309 в прямом эфире</b>
                        <p></p>
                        <p>В «Космической среде» 16 декабря в прямом эфире: актуальные новости, космическая
                            аналитика.</p>
                    </div>
                    <a href="#" className="btn-color">Читать далее <img src="images/icons/btn-lg-next.svg"/></a>
                </div>
                <div className="col-5 justify-content-end img-shadow d-none d-lg-flex">
                    <img src="/images/another/link-1.jpg" alt=""/>
                </div>
            </div>
            <div className="row mb-50">
                <div className="col-12 col-lg-2 d-flex flex-column justify-content-center">
                    <div className='d-flex justify-content-center'>
                        <img src="/images/logo_partners/logo-9.png" alt=""/>
                    </div>
                </div>
                <div className="col-12 col-lg-5 d-flex flex-column justify-content-between">
                    <div>
                        <div className="container-title">
                            <h4>НИРС МАИ</h4>
                        </div>
                        <b>Онлайн-интенсив по формированию и акселерации команд</b>
                        <p></p>
                        <p>7—21 ноября проходил масштабный онлайн-интенсив по формированию и акселерации команд</p>
                    </div>
                    <a href="#" className="btn-color">Читать далее <img src="images/icons/btn-lg-next.svg"/></a>
                </div>
                <div className="col-5 justify-content-end img-shadow d-none d-lg-flex">
                    <img src="/images/another/link-2.jpg" alt=""/>
                </div>
            </div>
            <div className="row mb-50">
                <div className="col-12 col-lg-2 d-flex flex-column justify-content-center">
                    <div className='d-flex  justify-content-center'>
                        <img src="/images/logo_partners/logo-10.png" alt=""/>
                    </div>
                </div>
                <div className="col-12 col-lg-5 d-flex flex-column justify-content-between">
                    <div>
                        <div className="container-title">
                            <h4>НАУКА И ЖИЗНЬ</h4>
                        </div>
                        <b>«Архипелаг 20.35» – в России такого еще нет</b>
                        <p>AEROSPACE-AGRO - в ТОП-15 "Архипелага 20.35"! Среди всех команд-участниц, наши ребяиа из
                            отдела искусственного интелекта показали высший класс.</p>
                    </div>
                    <a href="#" className="btn-color">Читать далее <img src="images/icons/btn-lg-next.svg"/></a>
                </div>
                <div className="col-5 justify-content-end img-shadow d-none d-lg-flex">
                    <img src="/images/another/link-3.jpg" alt=""/>
                </div>
            </div>
            <div className="row mb-50">
                <div className="col-5 offset-2">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true"><img src="/images/icons/btn-sm-prev.svg" alt=""/></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link active" href="#">01</a></li>
                            <li className="page-item"><a className="page-link" href="#">02</a></li>
                            <li className="page-item"><a className="page-link" href="#">03</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true"><img src="/images/icons/btn-sm-next.svg" alt=""/></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Media;