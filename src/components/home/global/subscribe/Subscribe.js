import React from 'react';
import {NavLink} from "react-router-dom";

const Subscribe = () => {
    return (
        <>
<section id="subscribe">
    <div className="container">
        <div className="subscribe">
            <div className="subscribe--block__title">
                <h2>Подпишитесь сейчас за 19,00 $ / мес</h2>
                <p>И получите доступ к материалам и кейсам, а также к новым <br/> мастер-классам </p>
            </div>
            <div className="subscribe--block__btns">
                <button>Оформить подписку</button>
               <NavLink to="" className="span"><p>Подробнее о пакетах </p></NavLink>
            </div>
        </div>
    </div>
</section>
        </>
    );
};

export default Subscribe;