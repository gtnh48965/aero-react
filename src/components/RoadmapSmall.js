import React, {useState} from 'react';
import Who from "./main/About/Who";
import Advantage from "./main/About/Advantage";


const RoadmapSmall = () => {
    let [page, setPage] = useState(1);

    function changeActive(id) {
        document.getElementById("roadmap_small_btn-"+page).classList.toggle("active");
        setPage(id)
        document.getElementById("roadmap_small_btn-"+id).classList.toggle("active");
    }
    return (
        <div>
            <img className='road_img road_img_small mb-0' src='/images/roadmap/png/01small.png' />
                {
                    page === 1?
                        <div className='container roadmap_small'>
                            <div className='row'>
                                <div className="col-12 d-flex flex-column">
                                    <div className='road_title'>
                                        <h1>АПРЕЛЬ 2019</h1>
                                        <div className='road_title_line'></div>
                                    </div>
                                    <p>История AEROSPACE-AGRO началась в апреле 2019 года с исследования мировых проектов и имеющихся разработок в сельском хозяйстве по данным  дистанционного зондированию земли и геоинформационных систем.</p>
                                    <p>Задача – разработать методики, которые позволят оптимизировать использование сельскохозяйственных участков на основе экспертного анализа космических снимков высокого разрешения.</p>
                                    <button className='banner-link' onClick={() => {changeActive(2)}}>листать дальше</button>
                                </div>
                            </div>
                        </div>
                    :page === 2?
                        <div className='roadmap_small'>
                            <img className='road_small_img' src='/images/roadmap/png/1small.png' />
                            <div className='container'>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="container-title">
                                            <h1>Приоритеты:</h1>
                                        </div>
                                    </div>
                                    <div className='col-12 d-flex flex-column'>
                                        <img className='roadmap_svg' src="/images/roadmap/svg/01.svg" alt=""/>
                                        <p>повышение экономической эффективности</p>
                                    </div>
                                    <div className='col-12 d-flex flex-column'>
                                        <img className='roadmap_svg' src="/images/roadmap/svg/02.svg" alt=""/>
                                        <p>качества и количества получаемого урожая</p>
                                    </div>
                                    <div className='col-12 d-flex flex-column'>
                                        <img className='roadmap_svg' src="/images/roadmap/svg/03.svg" alt=""/>
                                        <p>своевременное обнаружение и профилактика проблем на земельных участках и разработка решений с расчетом необходимых материалов и затрат.</p>
                                        <button className='banner-link' onClick={() => {changeActive(3)}}>листать дальше</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :page === 3?
                        <div className='roadmap_small'>
                            <img className='road_small_img' src='/images/roadmap/png/2small.png' />
                            <div className='container'>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="container-title">
                                            <h1>Перед масштабным запуском компании наши специалисты тщательно анализировали:</h1>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex">
                                        <div>
                                            <img src="images/roadmap/pol.png" alt="Услуга" />
                                        </div>
                                         <p className='ml-2'>опыт компаний-конкурентов и методы работы;</p>
                                    </div>
                                    <div className="col-12 d-flex">
                                        <div >
                                            <img src="images/roadmap/pol.png" alt="Услуга" />
                                        </div>
                                        <p className='ml-2'>особенности наших будущих клиентов, задачи и боли;</p>
                                    </div>
                                    <div className="col-12 d-flex">
                                        <div >
                                            <img src="images/roadmap/pol.png" alt="Услуга" />
                                        </div>
                                        <p className='ml-2'>специфику рынка для выстраивания доверительных отношений с партнерами и клиентами.</p>
                                    </div>
                                    <div className="col-12">
                                        <p className='ml-2'>Эти данные лежат в основе нашей стратегии продвижения и развития на российском и мировом рынке.</p>
                                        <button className='banner-link' onClick={() => {changeActive(4)}}>листать дальше</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :page === 4?
                            <div className='roadmap_small'>
                                <img className='road_small_img' src='/images/roadmap/png/3small.png' />
                                <div className='container'>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="container-title">
                                                <h1>Поиск и формирование команды</h1>
                                            </div>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <p>С самого начала AEROSPACE-AGRO важно было собрать надежную команду единомышленников и специалистов по сельскому хозяйству высшей квалификации.</p>
                                            <p>На первом этапе мы сосредоточились на создании собственных методик, без привлечения искусственного интеллекта. Необходимо было добиться повышения качества анализа космических снимков, чтобы на их основе формировать рекомендации по работам на земельном участке.</p>
                                            <button className='banner-link' onClick={() => {changeActive(5)}}>листать дальше</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    :page === 5?
                            <div className='roadmap_small'>
                                <img className='road_small_img' src='/images/roadmap/png/4small.png' />
                                <div className='container'>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="container-title">
                                                <h1>Проверка эффективности методик</h1>
                                            </div>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <p>Для проверки уровня своей работы мы приступили к тестированию технологий на земле. Абсолютно бесплатно внедряли и проверяли на практике все наработки и методы на сельскохозяйственных участках.  Результаты этих тестов представлены в разделе “Кейсы” </p>
                                            <button className='banner-link' onClick={() => {changeActive(6)}}>листать дальше</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    :page === 6?
                            <div className='roadmap_small'>
                                <img className='road_small_img' src='/images/roadmap/png/5small.png' />
                                <div className='container'>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="container-title">
                                                <h1>Первые продажи</h1>
                                            </div>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <p>После успешного тестирования сформировали комплекс методик для работы с сельскохозяйственными и фермерскими участками, который адаптируется для каждого конкретного клиента и задачи. Работали как с полноценными запусками, так с возможностью тест-драйва </p>
                                            <button className='banner-link' onClick={() => {changeActive(7)}}>листать дальше</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    :page === 7?
                            <div className='roadmap_small'>
                                <img className='road_small_img' src='/images/roadmap/png/6small.png' />
                                <div className='container'>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="container-title">
                                                <h1 style={{fontSize: '27px'}}>Июнь 2020</h1>
                                            </div>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <p>С 2020 года AEROSPACE-AGRO участвует в профильных выставках, форумах, конференциях, круглых столах, конкурсах. Мы стараемся развиваться во всех направлениях: технологии, работа с клиентами, выходы на новые уровни и рынки. Мы анализируем работу с нашими клиентами и партнерами для того, чтобы работать с нами было легко и удобно. </p>
                                            <button className='banner-link' onClick={() => {changeActive(8)}}>листать дальше</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    :page === 8?
                            <div className='roadmap_small'>
                                <img className='road_small_img' src='/images/roadmap/png/7small.png' />
                                <div className='container'>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="container-title">
                                                <h1>Постоянно идет работа по усовершенствованию наших методик</h1>
                                            </div>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <p>В 2020 году мы собрали команду специалистов из 35 человек. Сформировали отделы: геоинформационных систем, агро-технологий,  математического моделирования и искусственного интеллекта. Команды работают над созданием новых алгоритмов, методов, моделей. Проводят исследования для увеличения точности и эффективности имеющихся методик.</p>
                                            <p>Значимым достижением для AEROSPACE-AGRO стало лидерство в “Агрохаке”, по многим трекам нам удалось занять призовые места.</p>
                                            <button className='banner-link' onClick={() => {changeActive(9)}}>листать дальше</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    :page === 9?
                            <div className='roadmap_small'>
                                <img className='road_small_img' src='/images/roadmap/png/8small.png' />
                                <div className='container'>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="container-title">
                                                <h1>Наши достижения</h1>
                                            </div>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <p>Особым достижением в 2020 году стало создание отдела разработки алгоритмов искусственного интеллекта и попадание в ТОП-15 проекта “Архипелаг 20.35”, что позволило нам привлечь грант на разработку алгоритмов искусственного интеллекта 3 млн. рублей от фонда содействия инновациям.</p>
                                            <button className='banner-link' onClick={() => {changeActive(10)}}>листать дальше</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    :page === 10?
                            <div className='roadmap_small'>
                                <img className='road_small_img' src='/images/roadmap/png/9small.png' />
                                <div className='container'>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="container-title">
                                                <h1>Авторская цифровая платформа</h1>
                                            </div>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <p>Кроме того, AEROSPACE-AGRO разрабатывает авторскую цифровую платформу – инновационную технологию, которая поможет упростить работу и повысить качество итогового результата как для агропромышленного сектора, так и для нашей компании. </p>
                                            <button className='banner-link' onClick={() => {changeActive(11)}}>листать дальше</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='roadmap_small'>
                                <img className='road_small_img' src='/images/roadmap/png/10small.png' />
                                <div className='container'>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="container-title">
                                                <h1>Цели и планы AEROSPACE-AGRO на ближайшее время</h1>
                                            </div>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <p>AEROSPACE-AGRO очень важно поддерживать высокое качество услуг. Мы стремимся решать сложные задачи и двигаться к новым целям, поэтому следим за всеми событиями в агроиндустрии, развитием технологий и новыми исследованиями. </p>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <img className='roadmap_svg' src="/images/roadmap/svg/05.svg" alt=""/>
                                            <p>запуск пилотных проектов для крупных агрохолдингов на территории России</p>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <img className='roadmap_svg' src="/images/roadmap/svg/09.svg" alt=""/>
                                            <p>создание новых алгоритмов работы искусственного интеллекта, конкурентоспособных для России и мирового рынка</p>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <img className='roadmap_svg' src="/images/roadmap/svg/06.svg" alt=""/>
                                            <p>разработка собственных математических моделей, их обучение и повышение эффективности до 98%</p>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <img className='roadmap_svg' src="/images/roadmap/svg/07.svg" alt=""/>
                                            <p>создание собственных геоинформационных систем</p>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <img className='roadmap_svg' src="/images/roadmap/svg/11.svg" alt=""/>
                                            <p>ведутся переговоры о сотрудничестве со страховыми компаниями, что позволит нашим клиентам быть защищенным в случае неудачного применения готовых рекомендаций</p>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <img className='roadmap_svg' src="/images/roadmap/svg/08.svg" alt=""/>
                                            <p>создание собственных спутниковых систем (малых космических аппаратов до 300 кг) на базе компании AEROSPACE, сейчас ведутся активные переговоры</p>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <img className='roadmap_svg' src="/images/roadmap/svg/10.svg" alt=""/>
                                            <p>работа над улучшением качества существующих методик и их применения</p>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <img className='roadmap_svg' src="/images/roadmap/svg/12.svg" alt=""/>
                                            <p>планируется выход на международный рынок, в приоритете такие страны, как: Италия, ОАЭ, Тайвань, Индия, США</p>
                                        </div>
                                        <div className='col-12 d-flex flex-column'>
                                            <img className='roadmap_svg' src="/images/roadmap/svg/13.svg" alt=""/>
                                            <p>мы активно готовимся к тому, чтобы стать резидентами Сколково, и для достижения этой цели осталось совсем немного</p>
                                            <button className='banner-link' onClick={() => {changeActive(1)}}>вернуться в начало</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                }
                <div className="container">
                    <div className="row">
                        <div className='col-12 roadmap_small_btn'>
                            <button id='roadmap_small_btn-1' className={'active'} onClick={() => {changeActive(1)}}>01</button>
                            <button id='roadmap_small_btn-2' onClick={() => {changeActive(2)}}>02</button>
                            <button id='roadmap_small_btn-3' onClick={() => {changeActive(3)}}>03</button>
                            <button id='roadmap_small_btn-4' onClick={() => {changeActive(4)}}>04</button>
                            <button id='roadmap_small_btn-5' onClick={() => {changeActive(5)}}>05</button>
                            <button id='roadmap_small_btn-6' onClick={() => {changeActive(6)}}>06</button>
                            <button id='roadmap_small_btn-7' onClick={() => {changeActive(7)}}>07</button>
                            <button id='roadmap_small_btn-8' onClick={() => {changeActive(8)}}>08</button>
                            <button id='roadmap_small_btn-9' onClick={() => {changeActive(9)}}>09</button>
                            <button id='roadmap_small_btn-10' onClick={() => {changeActive(10)}}>10</button>
                            <button id='roadmap_small_btn-11' onClick={() => {changeActive(11)}}>11</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default RoadmapSmall;