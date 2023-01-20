import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

// ----image---
import logo from "../../../assets/img/logo-it.svg";

// ---icons---

import {BsFillEyeSlashFill} from "react-icons/bs";
import {BiShow} from "react-icons/bi"

const Log_in = ({active, setActive}) => {
    const [loop, setLoop] = useState(false)
    const [email, setEmail] = useState(false)

    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const anEmail = () => {
        if (user.email.length === 0) return setEmail(true)
        else if (user.email.length >= 0) return setEmail(false)
        else return false
    }
    const onChange = (e) => {
        anEmail()
        setUser({...user, [e.target.name]: e.target.value})
    }

// ----PASSWORD-----

    const password = () => {
        setLoop(!loop)
    }
    let long = user.password.length
    const passwordError = () => {
        if (long >= 2 && long < 4) {
            return <div className="line"
                        style={{width: "25%", height: "2px", background: "red"}}
            ></div>

        } else if (long >= 4 && long < 6) {
            return <div className="line"
                        style={{width: "50%", height: "2px", background: "rgb(201, 61, 61)"}}
            ></div>
        } else if (user.password.length >= 6 && long < 8) {
            return <div className="line"
                        style={{width: "75%", height: "0px", background: "#45b94c", boxShadow: "0 0 1px 1px  "}}
            ></div>
        } else if (long >= 8) {
            return <div className="line"
                        style={{width: "100%", height: "2px", background: "#00ff0d"}}
            ></div>

        } else return <div className="line"
                           style={{width: "0px", height: "2px", background: "#00ff0d"}}
        ></div>

    }
    return (
        <>
            <div className={active ? "modal active" : "modal"}>
                <div className={active ? "modal__content active" : "modal__content"}>
                    <div id="logIn">
                        <div className="logIn--page">
                            <NavLink to="/home" className="logIn--page__img"><img src={logo} alt=""/></NavLink>
                            <div className="logIn--page__inputs">
                                <div className="logIn--page__inputs--item">
                                    <div className="logIn--page__inputs--item__email">
                                        <h1> Email*</h1>
                                        <label>
                                            <input
                                                style={{border: email ? " red 1px solid" : " "}}
                                                onBlur={anEmail}
                                                onChange={onChange}
                                                name="email"
                                                value={user.email}
                                                className="input--email"
                                                type="text" placeholder=""/>
                                        </label>
                                    </div>
                                    <div className="logIn--page__inputs--item__email">
                                        <h2>Пароль*</h2>
                                        <label>
                                            <input
                                                onChange={onChange}
                                                name="password"
                                                value={user.password}
                                                type={loop ? `text` : "password"} placeholder="Password..."/>
                                            <div
                                                style={{color: "white"}}
                                                onClick={password}
                                                className="iconPassword">
                                                {loop ?  <BsFillEyeSlashFill/> : <BiShow/>}
                                            </div>
                                            <div>
                                                {passwordError()}
                                            </div>
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
                </div>
            </div>
        </>
    )
};

export default Log_in;