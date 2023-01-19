import React, {useEffect, useState} from 'react';
import logo from './../../assets/img/logo-it.svg'
import {NavLink} from "react-router-dom";
import {FaRegBell} from "react-icons/fa";
import HeaderBurger from "./headerBurger/HeaderBurger";
import Modal from "./log_in/modal/Modal";
import Log_in from "./log_in/Log_in";


const Header = () => {
    const [burger, setBurger] = useState(false)

    const [modalActive, setModalActive] = useState(false)

    const scroll = () => {
        if (burger === true) {
            return document.body.style.overflow = "hidden"
        } else document.body.style.overflow = "aut o"
    }

    useEffect(() => {
        scroll()
    }, [burger, scroll()])
    return (
        <div>
            <HeaderBurger burger={burger} setBurger={setBurger}/>
            <header id="header">
                <div className="container">
                    <div className="header">
                        <div className="header-left">
                            <NavLink to="/" className="header-left-logo">
                                <img src={logo} alt=""/>
                            </NavLink>
                            <div className="header-left-nav">
                                <NavLink to="/school">О школе</NavLink>
                                <NavLink to={"/our_curses"}>Наши курсы</NavLink>
                                <NavLink to="/about">О нас</NavLink>
                            </div>
                        </div>
                        <div className="header-btn">
                            <NavLink to="/notification">
                            <span className="header-btn-icon">
                                {/*<FaRegBell className="header-btn-icon-i"/>*/}
                            </span>
                            </NavLink>
                            {/*<NavLink to="log_in">*/}
                            <div>
                                <button className="header-btn-come" onClick={() => setModalActive(true)}>Войти</button>
                                <Log_in active={modalActive} setActive={setModalActive}>
+                                    <div className="modal--block">
                                        <div className="modal--block--inputs">

                                        </div>
                                    </div>
                                </Log_in>
                            </div>
                            {/*</NavLink>*/}
                            <NavLink to="/register">
                                <button className="header-btn-register">Подписаться</button>
                            </NavLink>

                        </div>
                    </div>
                    <div className="burger">
                        <NavLink to="/" className="header-left-logo">
                            <img src={logo} alt=""/>
                        </NavLink>
                        <div onClick={() => setBurger(!burger)} className="burger-menu">

                        </div>

                    </div>
                </div>
            </header>

        </div>
    );
};

export default Header;