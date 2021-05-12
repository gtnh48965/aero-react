import React, {useState} from 'react';
import Who from "./Who";
import Advantage from "./Advantage";

const About = ({width}) => {
    const [flag, setFlag] = useState(true);

    function changeActive() {
        setFlag(!flag)
        document.getElementById("who").classList.toggle("active");
        document.getElementById("advantage").classList.toggle("active");

    }
    function tabs() {
        if(flag) {
            return <Who />
        } else {
            return <Advantage />
        }
    }
    return (
        <div className="container about mb-80">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="container-title">
                        <h1>О компании aerospace-agro</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <ul className="nav">
                    <li className="nav-item">
                        <button id='who' className={width>1000? 'nav-link btn_about active':'nav-link btn_about_small active'} onClick={changeActive}>Кто мы</button>
                    </li>
                    <li className="nav-item">
                        <button id='advantage' className={width>1000? 'nav-link btn_about':'nav-link btn_about_small'} onClick={changeActive}>Преимущества</button>
                    </li>
                </ul>
            </div>
            <div className={width>1000? 'row': 'row about_small'}>
                {tabs()}
            </div>
        </div>
    );
};

export default About;