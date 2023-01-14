import React from 'react';
import image from "./../../../assets/img/logo-it.svg"
import {NavLink} from "react-router-dom";

const Log_in = () => {
    return (
        <>
            <div id="logIn">
                <div className="logIn--page">
                    <img className="logIn--page__img" src={image} alt='img'/>
                    <div className="logIn--page__inputs">
                        <div className="logIn--page__inputs--item">
                            <div className="logIn--page__inputs--item__email">
                                <h1> Email*</h1>
                                <label>
                                    <input className="input--email" type="text" placeholder=""/>
                                </label>
                            </div>
                            <div className="logIn--page__inputs--item__email">
                                <h2>Пароль*</h2>
                                <label>
                                    <input  className="input--password" type="password" placeholder=""/>
                                </label>
                            </div>
                            <div className='logIn--page__inputs--item__btn'>
                                <NavLink to='/log_in/profile'>
                                    <button>Войти</button>
                                </NavLink>
                                <NavLink to="/">Забыли пароль?</NavLink>
                            </div>
                            <div className="register--page__input--main__error">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Log_in;