import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Texnology from "../components/main/Texnology";
import Whereuse from "../components/main/Whereuse";
import Whytop from "../components/main/Whytop";
import Partners from "../components/main/Partners";
import Media from "../components/main/Media";
import Services from "../components/main/Services";
import AboutCarusel from "../components/main/AboutCarusel/AboutCarusel";
import BannerCarusel from "../components/main/BannerCarusel/BannerCarusel";
import NewsCarusel from "../components/main/NewCarusel/NewsCarusel";
import About from "../components/main/About/About";

const getWidth  = () => {
    return window.innerWidth;
};
const Main = () => {
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
        <div>
            <div className="main-bg">
                {width > 1024?
                    <div className='position-relative vh-100 mb-5'>
                        <NavBar width={width}/>
                        <NewsCarusel width={width}/>
                    </div>
                    :
                    width > 758?
                    <div className='position-relative mb-5'>
                        <NavBar width={width}/>
                        <NewsCarusel width={width}/>
                    </div>
                    :
                    <div className='position-relative'>
                        <NavBar width={width}/>
                        <NewsCarusel width={width}/>
                    </div>
                }
                <BannerCarusel width={width}/>
                <About width={width}/>
                <AboutCarusel width={width}/>
                <Texnology width={width} />
                <Whereuse width={width}/>
                <Services width={width}/>
                <Whytop width={width}/>
                {width < 1024?
                    <div>
                        <Media />
                        <Partners />
                        <Footer />
                    </div>

                    :null}
            </div>
            {width > 1024?
                <div className="bot-bg">
                    <Media />
                    <Partners />
                    <Footer />
                </div>
                :null}
        </div>
    );
};

export default Main;