import React from 'react';

import icon from '../assets/favicon.png'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'

const HomeComponent = () => {
    return <div className={"main-container"}>
        <div className={"content"}>
            <header className={"header"}>
                <img src={icon} alt="Logo" className="logo"/>
                <a href="#" className="all">See all <i className="fas fa-arrow-right all__icon"></i></a>
            </header>
            <main className="main">
                <h1 className="heading">Discover <span className="heading__emphasis">events</span> anywhere</h1>
                <div className="form">
                    <input type="text" className="form__input" placeholder="Location..."/>
                    <button className="form__btn">
                        <i className="fas fa-search form__icon"></i>
                    </button>
                </div>
                <section className="suggestions">
                    <a href="#" className="suggestions__link">NYC</a>
                    <a href="#" className="suggestions__link">Atlanta</a>
                    <a href="#" className="suggestions__link">Houston</a>
                    <a href="#" className="suggestions__link">Chicago</a>
                    <a href="#" className="suggestions__link">LA</a>
                    <a href="#" className="suggestions__link">Dallas</a>
                    <a href="#" className="suggestions__link">Phoenix</a>
                    <a href="#" className="suggestions__number">+149</a>
                </section>
            </main>
            <footer className="footer">
                <small className="copyright">
                    &copy; All rights reserved.
                </small>
                <ul className="legal">
                    <li className="legal__item">
                        <a href="#" className="legal__link">Terms</a>
                    </li>
                    <li className="legal__item">
                        <a href="#" className="legal__link">Privacy</a>
                    </li>
                </ul>
            </footer>
        </div>

        <section className={"showcase"}>
            <img src={img1} alt="Category image" className="showcase__img"/>
            <img src={img2} alt="Category image" className="showcase__img"/>
            <img src={img3} alt="Category image" className="showcase__img"/>
            <img src={img4} alt="Category image" className="showcase__img"/>
            <img src={img5} alt="Category image" className="showcase__img"/>
            <img src={img6} alt="Category image" className="showcase__img"/>
        </section>
    </div>
}

export default HomeComponent;