import React from 'react';
import logo from './../../assets/img/logo-it.svg'

import {FaTelegramPlane} from "react-icons/fa"
import {AiOutlineInstagram} from "react-icons/ai";
import {FiTwitter, FiYoutube} from "react-icons/fi";
import {RiFacebookCircleLine} from "react-icons/ri";
import {SiTiktok} from "react-icons/si";
import {GoMail} from "react-icons/go";
import {BsTelephoneOutbound} from "react-icons/bs";
import {IoLocationOutline} from "react-icons/io5"
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <section id="footer">
                <div className="container">
                    <div className="footer">
                        <div className="footer--logo">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="footer--block__two">
                            <h2>Быстрые ссылки</h2>
                            <NavLink className="link" to="/">О школе</NavLink>
                            <NavLink className="link" to="/">Наши курсы</NavLink>
                            <NavLink classN  ame="link" to="/">О нас</NavLink>
                        </div>
                        <div className="footer--block">
                            <h2>Социальные сети</h2>
                            <div className="footer--block__icons">
                                <AiOutlineInstagram className="icon"/>
                                <FiYoutube className="icon"/>
                                <RiFacebookCircleLine className="icon"/>
                            </div>
                            <div className="footer--block__icons">
                                <FiTwitter className="icon"/>
                                <SiTiktok className="icon"/>
                                <FaTelegramPlane className="icon"/>
                            </div>
                        </div>
                        <div className="footer--block">
                            <h2>Контакты</h2>
                            <div className="footer--block__contact">
                                <GoMail className="icon"/>
                                <span>@motionwebteam@gmail.com</span>
                            </div>
                            <div className="footer--block__contact">
                                <BsTelephoneOutbound className="icon"/>
                                <span>+996 559-69-26-26</span>
                            </div>
                        </div>
                        <div className="footer--block">
                            <h2>Адреса</h2>
                            <div className="footer--block__location">
                                <IoLocationOutline className="icon"/>
                                <span>Турусбекова 109 / 3</span>
                            </div>
                            <p>Идентификационный <br/>код: 1234567890</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;