import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RoadmapSmall from "../components/RoadmapSmall";

const getWidth  = () => {
    return window.innerWidth;
};
const Roadmap = () => {
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
        <div className='roadmap_bg'>
            <NavBar width={width}/>
            {width > 700?
                <div>
                    <img className='road_img mb-100' src='/images/roadmap/png/01.jpg' />
                    <div className='container'>
                        <div className="row first_block">
                            <div className="col-7 d-flex flex-column">
                                <h1 className='road_title'>АПРЕЛЬ 2019</h1>
                                <p>AEROSPACE-AGRO начинает свою историю с апреля 2019 года, основываясь на научно-исследовательской работе данных по дистанционному зондированию земли геоинформационных систем. Говоря простым языком - обработка и анализ космических снимков сельскохозяйственных территорий, и применение этих данных для разработки и создания собственных методик для повышения эффективности фермерских угодий.</p>
                            </div>
                            <div className="col d-flex align-items-start justify-content-center">
                                <img src="images/roadmap/png/02.png" alt=""/>
                            </div>
                        </div>
                        <div className="row second_block">
                            <div className="col-7 d-flex flex-column">
                                <h2 className=''>
                                    За основу в применении <br/>
                                    методик был взят приоритет на:</h2>
                                <div className='w-100 d-flex flex-wrap'>
                                    <div className='d-flex flex-column w-50'>
                                        <img className='roadmap_svg' src="/images/roadmap/svg/01.svg" alt=""/>
                                        <p>повышение экономической эффективности участков земли</p>
                                    </div>
                                    <div className='d-flex flex-column w-50'>
                                        <img className='roadmap_svg' src="/images/roadmap/svg/02.svg" alt=""/>
                                        <p>качества и количества получаемого урожая</p>
                                    </div>
                                    <div className='d-flex flex-column w-50'>
                                        <img className='roadmap_svg' src="/images/roadmap/svg/03.svg" alt=""/>
                                        <p>потенциальных угроз <br/> для территории - с расчётом экономической составляющей</p>
                                    </div>
                                    <div className='d-flex flex-column w-50'>
                                        <img className='roadmap_svg' src="/images/roadmap/svg/04.svg" alt=""/>
                                        <p>определение существующих проблем, их решения,<br/> а также предупреждение</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <img src="images/roadmap/png/03.png" alt=""/>
                            </div>
                        </div>
                        <div className="row third_block">
                            <div className="col-6"><img src="images/roadmap/png/04.png" alt=""/></div>
                            <div className="col-6 left_block">
                                <h2 className=''>
                                    Перед масштабным стартом компании, <br/>
                                    нашими специалистами был проведён <br/>
                                    мониторинг множества сегментов рынка:</h2>
                                <p>наличие компаний-конкурентов и их принципы <br/>и методы/методики работы</p>
                                <p>целевая аудитория, её поведенческие факторы, <br/>страхи и ожидания</p>
                                <p>проработана схема контактирования <br/>с потенциальными клиентами и партнёрами</p>
                                <p>выработана стратегия развития и продвижения <br/>на российский и мировой рынки</p>
                            </div>
                        </div>
                        <div className="row fourth_block">
                            <div className="col-7 d-flex flex-column">
                                <h2 className=''>
                                    Для качественной и эффективной работы, <br/>
                                    мы изначально искали специалистов высшей <br/>
                                    квалификации в сфере сельского хозяйства</h2>
                                <p className=''>Для нас было важно собрать команду, которая будет максимально долго находится в оригинальном составе, <br/>и единственное, что приемлемо для нас - это расширение штата сотрудников, с сохранением тех людей, кто уже работает в компании.</p>
                                <p className=''>В первое время существования AEROSPACE-AGRO, задача сотрудников состояла в разработке собственных методик <br/>(с использованием искусственного интеллекта), <br/>их тестировании, повышении эффективности качества <br/>анализа космических снимков и рекомендаций по ним.</p>
                            </div>
                            <div className="col-5">
                                <img src="images/roadmap/png/05.png" alt=""/>
                            </div>
                        </div>
                        <div className="row fifth_block">
                            <div className="col-6"><img src="images/roadmap/png/06.png" alt=""/></div>
                            <div className="col-6 left_block">
                                <h2 className=''>Апробация <br/>методов исследования</h2>
                                <p>Для того, чтобы проверить уровень собственной работы, <br/>мы абсолютно бесплатно тестировали и применяли свои технологии на сельскохозяйственных территориях. Необходимо было выяснить, насколько теоретическая часть соответствует практической, и насколько она применима <br/>в действительности.</p>
                                <p>С примерами данной работы вы можете ознакомиться <br/>в разделе «Кейсы»</p>
                                <a className=' btn-color_second'>
                                    Перейти в «Кейсы»
                                    <img src="images/icons/btn-lg-next.svg" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="row sixth_block">
                            <div className="col-7 d-flex flex-column">
                                <h2 className=''>Монетизирование <br/>услуг</h2>
                                <p>После данного успешного этапа, мы стали монетизировать данные услуги, причём как <br/>с полноценным запуском, так и в режиме <br/>тест-драйва, что позитивно отразилось на лояльности клиентов к нашей компании. Один из приоритетов нашей работы - клиентоориентированность <br/>и индивидуальный подход к каждому клиенту.</p>
                                <a className=' btn-color_second'>
                                    Узнать больше об услуге «Тест-драйв»
                                    <img src="images/icons/btn-lg-next.svg" alt=""/>
                                </a>
                            </div>
                            <div className="col-5">
                                <img src="images/roadmap/png/07.png" alt=""/>
                            </div>
                        </div>
                        <div className="row seventh_block">
                            <div className="col-6 d-flex align-items-center justify-content-center">
                                <img src="images/roadmap/png/08.png" alt=""/>
                            </div>
                            <div className="col-6 left_block">
                                <h1 className='road_title'>Июнь 2020</h1>
                                <p>Летом 2020 года, мы дополнительно провели анализ <br/>целевой аудитории, для повышения эффективности <br/>и развития собственных услуг. Дополнительно, <br/>мы стали активно принимать участие в выставках, <br/>форумах, конференциях, круглых столах, конкурсах.</p>
                            </div>
                        </div>
                        <div className="row eighth_block">
                            <div className="col-7 d-flex flex-column">
                                <h2 className=''>Cоздание отдела разработки <br/>искусственного интеллекта</h2>
                                <p>В 2020 году, кроме работы с целевой аудиторией, мы начали активно развивать и дорабатывать собственные методики.</p>
                                <p>Особым достижением стало создание отдела разработки искусственного интеллекта, укомплектованного высококлассными специалистами в России, которые доказали свою высокую квалификацию участием в проектах различной сложности.</p>
                                <p>Одним из доказательств эффективности данного отдела можно отметить попадание в ТОП-15 проекта «Архипелаг 20.35», <br/>что позволило нам привлечь грант на обучение алгоритмов искусственного интеллекта, в размере 3 млн. рублей.</p>
                            </div>
                            <div className="col-5">
                                <img src="images/roadmap/png/09.png" alt=""/>
                            </div>
                        </div>
                        <div className="row ninth_block">
                            <div className="col-6 d-flex align-items-center justify-content-center">
                                <img src="images/roadmap/png/10.png" alt=""/>
                            </div>
                            <div className="col-6 left_block">
                                <h2 className=''>Апробация <br/>методов исследования</h2>
                                <p>Ещё одним значимым достижением, в участиях <br/>в конкурсных программах, стало лидерство в «Агрохаке» <br/>- причём по многим параметрам, мы стоим на первом месте среди всех учатсников.</p>
                            </div>
                        </div>
                        <div className="row tenth_block">
                            <div className="col-7 d-flex flex-column">
                                <h2 className=''>Монетизирование <br/>услуг</h2>
                                <p>После данного успешного этапа, мы стали монетизировать данные услуги, причём как <br/>с полноценным запуском, так и в режиме <br/>тест-драйва, что позитивно отразилось на лояльности клиентов к нашей компании. Один из приоритетов нашей работы - клиентоориентированность <br/>и индивидуальный подход к каждому клиенту.</p>
                                <a className=' btn-color_second'>
                                    Узнать больше об услуге «Тест-драйв»
                                    <img src="images/icons/btn-lg-next.svg" alt=""/>
                                </a>
                            </div>
                            <div className="col-5">
                                <img src="images/roadmap/png/11.png" alt=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <img src="images/roadmap/png/12.png" alt=""/>
                            </div>
                            <div className="col-6 dop_block" >
                                <h2 className=''>Планы AEROSPACE-AGRO <br/>на ближайщее время</h2>
                                <p>Кроме этого, мы занялись <span className='under'>разработкой авторской</span> <span className='under'>цифровой платформы</span>   - инновационной технологии, упрощающей работу и повышающей качество итогового результата как для агропромышленного сектора, <br/>так и для нашей компании.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 d-flex flex-column serv_block">
                                <div className='svg_block'>
                                    <img className='roadmap_svg' src="/images/roadmap/svg/05.svg" alt=""/>
                                </div>
                                <p>запуск пилотных проектов <br/>для крупных агрохолдингов, <br/>пока что только на территории <br/> России</p>
                                <a className=' btn-color_second'>
                                    читать больше
                                    <img src="images/icons/btn-lg-next.svg" alt=""/>
                                </a>
                            </div>
                            <div className="col-4 d-flex flex-column serv_block">
                                <div className='svg_block'>
                                    <img className='roadmap_svg' src="/images/roadmap/svg/06.svg" alt=""/>
                                </div>
                                <p>разработка собственных математических моделей, <br/>их обучение и повышение эффективности до 98%</p>
                                <a className=' btn-color_second'>
                                    читать больше
                                    <img src="images/icons/btn-lg-next.svg" alt=""/>
                                </a>
                            </div>
                            <div className="col-4 d-flex flex-column serv_block pl-5">
                                <div className='svg_block'>
                                    <img className='roadmap_svg' src="/images/roadmap/svg/07.svg" alt=""/>
                                </div>
                                <p>создание собственных геоинформационных <br/>систем</p>
                                <a className=' btn-color_second'>
                                    читать больше
                                    <img src="images/icons/btn-lg-next.svg" alt=""/>
                                </a>
                            </div>
                            <div className="col-4 d-flex flex-column serv_block">
                                <div className='svg_block'>
                                    <img className='roadmap_svg' src="/images/roadmap/svg/08.svg" alt=""/>
                                </div>
                                <p>ведутся активные переговоры <br/>
                                    о создании собственных спутниковых систем (малых космических аппаратов до 300 кг.), на базе компании AEROSPACE</p>
                                <a className=' btn-color_second'>
                                    читать больше
                                    <img src="images/icons/btn-lg-next.svg" alt=""/>
                                </a>
                            </div>
                            <div className="col-4 d-flex flex-column serv_block">
                                <div className='svg_block'>
                                    <img className='roadmap_svg' src="/images/roadmap/svg/09.svg" alt=""/>
                                </div>
                                <p>разработка новых алгоритмов работы искусственного интеллекта конкурентоспособных для рынка как России, так и всего мира в целом</p>
                                <a className=' btn-color_second'>
                                    читать больше
                                    <img src="images/icons/btn-lg-next.svg" alt=""/>
                                </a>
                            </div>
                            <div className="col-4 d-flex flex-column serv_block pl-5">
                                <div className='svg_block'>
                                    <img className='roadmap_svg' src="/images/roadmap/svg/10.svg" alt=""/>
                                </div>
                                <p>работа над улучшением <br/>качества существующих <br/>методик и их применения</p>
                                <a className=' btn-color_second'>
                                    читать больше
                                    <img src="images/icons/btn-lg-next.svg" alt=""/>
                                </a>
                            </div>
                            <div className="col-4 d-flex flex-column serv_block">
                                <div className='svg_block'>
                                    <img className='roadmap_svg' src="/images/roadmap/svg/11.svg" alt=""/>
                                </div>
                                <p>ведутся переговоры <br/>о сотрудничестве со страховыми компаниями, в случае неудачного применения уже готовых рекомендаций</p>
                                <a className=' btn-color_second'>
                                    читать больше
                                    <img src="images/icons/btn-lg-next.svg" alt=""/>
                                </a>
                            </div>
                            <div className="col-4 d-flex flex-column serv_block">
                                <div className='svg_block'>
                                    <img className='roadmap_svg' src="/images/roadmap/svg/12.svg" alt=""/>
                                </div>
                                <p>планируется выход <br/>на международный рынок, сейчас <br/>в приоритете такие страны, как: Италия, ОАЭ, Тайвань, Индия, США</p>
                                <a className=' btn-color_second'>
                                    читать больше
                                    <img src="images/icons/btn-lg-next.svg" alt=""/>
                                </a>
                            </div>
                            <div className="col-4 d-flex flex-column serv_block pl-5">
                                <div className='svg_block'>
                                    <img className='roadmap_svg' src="/images/roadmap/svg/13.svg" alt=""/>
                                </div>
                                <p>мы активно готовимся <br/>к тому, чтобы стать резидентами Сколково, <br/>и для достижения этой цели осталось совсем немного</p>
                                <a className=' btn-color_second'>
                                    читать больше
                                    <img src="images/icons/btn-lg-next.svg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <RoadmapSmall />
            }

            <Footer />
        </div>
    );
};

export default Roadmap;