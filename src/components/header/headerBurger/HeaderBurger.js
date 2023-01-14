import React from 'react';
import {NavLink} from "react-router-dom";
import {GrClose} from "react-icons/gr";
import {IoMdClose} from "react-icons/io";

const HeaderBurger = ({burger, setBurger}) => {
    return (
        <div>
            <div className={burger ?  "burgerMenu menu" : "burgerMenu "}>
                <div className="burger">
                    <div className="burger-link">
                        <button onClick={() => setBurger(false)} className="burger-link-span">
                            <IoMdClose className="burger-link-span-icon"/>
                        </button>
                        <NavLink onClick={() => setBurger(false)} className="burger-link-come" href="#" to="/school">О школе</NavLink>
                        <NavLink onClick={() => setBurger(false)} className="burger-link-come" href="#" to={"/homeCourse"}>Наши курсы</NavLink>
                        <NavLink onClick={() => setBurger(false)} className="burger-link-come" to="/about">О нас</NavLink>
                        <NavLink onClick={() => setBurger(false)} className="burger-link-come" to="/log_in">
                            <button className="burger-link-come-btn" >Войти</button>
                        </NavLink>

                        <button className="burger-link-come-reg" >
                            <NavLink onClick={() => setBurger(false)} to="/register">
                                Подписаться
                            </NavLink>
                        </button>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default HeaderBurger;