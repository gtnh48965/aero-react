import React from 'react';
import WhereuseCarusel from "./WhereuseCarusel";

const Whereuse = ({width}) => {
    return (
        <div>
            <div className="container where_use">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="container-title">
                            <h1>Где можно применять наши технологии</h1>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className="top-info">Наши технологии будут полезны как крупным агрохолдингам, так и частным
                            компаниям и фермерам, кто заботятся о благополучии своей территории и желают увеличить
                            рентабельность своего бизнеса. Мы будем вам полезны, если необходимо провести исследования в
                            следующих сферах.</p>
                    </div>
                </div>
            </div>
            {width > 1024?
                <div className="container where_use mb-160">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex where_use-block flex-wrap">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="18" height="18" viewBox="0 0 18 18">
                                        <image id="Vector_Smart_Object" data-name="Vector Smart Object" width="18" height="18"
                                               xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAS0lEQVQ4jWMgBP7//38EhAkoIwz+////AYQJKWTCECETjBpER4MYoWlEB0MGAfihrI8YMghwhWouIghGE+RwNoiFCDVXCKpgYGAAAJvBHetlffywAAAAAElFTkSuQmCC"/>
                                    </svg>
                                    <p>Точное (цифровое) земледелие</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="18" height="18" viewBox="0 0 18 18">
                                        <image id="Vector_Smart_Object" data-name="Vector Smart Object" width="18" height="18"
                                               xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAS0lEQVQ4jWMgBP7//38EhAkoIwz+////AYQJKWTCECETjBpER4MYoWlEB0MGAfihrI8YMghwhWouIghGE+RwNoiFCDVXCKpgYGAAAJvBHetlffywAAAAAElFTkSuQmCC"/>
                                    </svg>
                                    <p>Расчёт внесения удобрений</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="18" height="18" viewBox="0 0 18 18">
                                        <image id="Vector_Smart_Object" data-name="Vector Smart Object" width="18" height="18"
                                               xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAS0lEQVQ4jWMgBP7//38EhAkoIwz+////AYQJKWTCECETjBpER4MYoWlEB0MGAfihrI8YMghwhWouIghGE+RwNoiFCDVXCKpgYGAAAJvBHetlffywAAAAAElFTkSuQmCC"/>
                                    </svg>
                                    <p>Засоление земель, уровень их минерального истощения</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="18" height="18" viewBox="0 0 18 18">
                                        <image id="Vector_Smart_Object" data-name="Vector Smart Object" width="18" height="18"
                                               xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAS0lEQVQ4jWMgBP7//38EhAkoIwz+////AYQJKWTCECETjBpER4MYoWlEB0MGAfihrI8YMghwhWouIghGE+RwNoiFCDVXCKpgYGAAAJvBHetlffywAAAAAElFTkSuQmCC"/>
                                    </svg>
                                    <p>Расчёт погодных условий и борьба с засухой</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="18" height="18" viewBox="0 0 18 18">
                                        <image id="Vector_Smart_Object" data-name="Vector Smart Object" width="18" height="18"
                                               xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAS0lEQVQ4jWMgBP7//38EhAkoIwz+////AYQJKWTCECETjBpER4MYoWlEB0MGAfihrI8YMghwhWouIghGE+RwNoiFCDVXCKpgYGAAAJvBHetlffywAAAAAElFTkSuQmCC"/>
                                    </svg>
                                    <p>Лечение и предупреждение заболеваний растений</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="18" height="18" viewBox="0 0 18 18">
                                        <image id="Vector_Smart_Object" data-name="Vector Smart Object" width="18" height="18"
                                               xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAS0lEQVQ4jWMgBP7//38EhAkoIwz+////AYQJKWTCECETjBpER4MYoWlEB0MGAfihrI8YMghwhWouIghGE+RwNoiFCDVXCKpgYGAAAJvBHetlffywAAAAAElFTkSuQmCC"/>
                                    </svg>
                                    <p>Исследование состояния культуры, пригодности экологических условий для её произрастания и
                                        комфортность её роста при наличии других культур на участке</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="18" height="18" viewBox="0 0 18 18">
                                        <image id="Vector_Smart_Object" data-name="Vector Smart Object" width="18" height="18"
                                               xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAS0lEQVQ4jWMgBP7//38EhAkoIwz+////AYQJKWTCECETjBpER4MYoWlEB0MGAfihrI8YMghwhWouIghGE+RwNoiFCDVXCKpgYGAAAJvBHetlffywAAAAAElFTkSuQmCC"/>
                                    </svg>
                                    <p>Учёт, изучение и соотношение агроклиматических ресурсов (солнечный свет, осадки, водные
                                        ресурсы, общее состояние климата)</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="18" height="18" viewBox="0 0 18 18">
                                        <image id="Vector_Smart_Object" data-name="Vector Smart Object" width="18" height="18"
                                               xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAS0lEQVQ4jWMgBP7//38EhAkoIwz+////AYQJKWTCECETjBpER4MYoWlEB0MGAfihrI8YMghwhWouIghGE+RwNoiFCDVXCKpgYGAAAJvBHetlffywAAAAAElFTkSuQmCC"/>
                                    </svg>
                                    <p>Наличие, размножение и распределение вредителей по территории</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <WhereuseCarusel />
            }

        </div>
    );
};

export default Whereuse;