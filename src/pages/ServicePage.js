import React, {useEffect, useState} from 'react';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ServicesCarusel from "../components/ServicesCarusel/ServicesCarusel";
import AerospaceServices from "../components/ServicePage/AerospaceServices";
import ServicesCaruselMobail from "../components/ServicesCarusel/ServicesCaruseMobail";


class MainServices extends React.Component {
    render() {
        if (window.innerWidth >= 700) {
            return (
                <div className="serv-bg">
                    <div>
                        <NavBar width={window.innerWidth}/>
                        <ServicesCarusel/>
                        <AerospaceServices/>
                    </div>
                    <div className="">
                        <Footer/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="serv-bg">
                    <div>
                        <NavBar width={window.innerWidth}/>
                        <ServicesCaruselMobail/>
                        <AerospaceServices/>
                    </div>
                    <div className="">
                        <Footer width={window.innerWidth}/>
                    </div>
                </div>)
        }
    };
}

export default MainServices;