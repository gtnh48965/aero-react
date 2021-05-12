import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss'
import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import AboutStore from "./store/AboutStore";
import BannerStore from "./store/BannerStore";
import NewsStore from "./store/NewsStore";
import ServicesStore from "./store/ServicesStore";
import ServiceStore from "./store/ServiceStore";


export const Context = createContext(null)
ReactDOM.render(
    <Context.Provider value = {{
        about: new AboutStore(),
        news: new NewsStore(),
        services: new ServicesStore(),
        service: new ServiceStore(),

        banner: new BannerStore()}}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);