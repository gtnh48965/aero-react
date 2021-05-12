import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ServicesDetailed from "../components/ServicesDetailed";


const KeysMain = () => {
    return (
        <div>
            <div className='roadmap_bg_serv'>
                <NavBar />
               <ServicesDetailed />
            </div>
            <div className="bot-bg">
                <Footer />
            </div>
        </div>
    );
};

export default KeysMain;