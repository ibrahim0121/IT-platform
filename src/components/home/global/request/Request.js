import React from 'react';

const Request = () => {
    return (
        <>
            <section id="request">
                <div className="container">
                    <div className="request">
                        <div className="request--left">
                            <h1>Оставить заявку</h1>
                            <p>Заполните краткую форму с ключевым <br/> вопросами, и мы подготовимся к разговору
                                с <br/> вами </p>
                        </div>
                        <div className="request--right">
                            <label>
                                <div className="request--right__blockInput">
                                    <p>ФИО*</p>
                                    <input type="text"/>
                                </div>
                            </label>
                            <label>
                                <div className="request--right__blockInput">
                                    <p>Номер телефон*</p>
                                    <input type="text"/>
                                </div>
                            </label>
                            <label>
                                <div className="request--right__blockInput">
                                    <p>Email*</p>
                                    <input type="text"/>
                                </div>
                            </label>
                            <button>Отправить</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Request;