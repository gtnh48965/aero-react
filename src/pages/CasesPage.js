import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Cases from "../components/Cases";

const getWidth  = () => {
    return window.innerWidth;
};
const CasesPage = () => {
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
            <div className="main-keys">
                <NavBar width={width}/>
                <Cases/>
            </div>
            <div className="bot-bg">
                <Footer />
            </div>
        </div>
    );
};

export default CasesPage;