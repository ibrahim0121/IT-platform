import React, {useState} from 'react';

const Request = () => {

    // const [loop, setLoop] = useState(false)
    const [email, setEmail] = useState(false)
    const [phone, setPhone] = useState(false)
    const [userName, setUserName] = useState(false)


    const [users, setUsers] = useState({
        email: " ",
        userName: " ",
        phone: " ",
    })
    const anUserName = () => {
        // const anUserName =users.userName.length ===0 ? setUserName(true)?users.userName.length>=0:setUserName(false):false
        if (users.userName.length === 0) return setUserName(true)
        else if (users.userName.length >= 0) return setUserName(false)
        else return false
    }
    const anEmail = () => {
        if (users.email.length === 0) return setEmail(true)
        else if (users.email.length >= 0) return setEmail(false)
        else return false
    }
    const anPhone = () => {
        if (users.phone.length === 0) return setPhone(true)
        else if (users.phone.length >= 0) return setPhone(false)
        else return false
    }
    const onChangeEmail = (e) => {
        anEmail()
        setUsers({...users, [e.target.name]: e.target.value})
    }
    const onChangeUserName = (e) => {
        anUserName()
        setUsers({...users, [e.target.name]: e.target.value})
    }
    const onChangePhone = (e) => {
        anPhone()
        setUsers({...users, [e.target.name]: e.target.value})
    }

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
                                    <input
                                        style={{border: userName ? " red 1px solid" : " "}}
                                        onBlur={anUserName}
                                        onChange={onChangeUserName}
                                        name="userName"
                                        value={users.userName}
                                        type="text"
                                    />
                                </div>
                            </label>
                            <label>
                                <div className="request--right__blockInput">
                                    <p>Номер телефон*</p>
                                    <input
                                        style={{border: phone ? " red 1px solid" : " "}}
                                        onBlur={anPhone}
                                        onChange={onChangePhone}
                                        name="phone"
                                        value={users.phone}
                                        type="text"
                                    />
                                </div>
                            </label>
                            <label>
                                <div className="request--right__blockInput">
                                    <p>Email*</p>
                                    <input
                                        style={{border: email ? " red 1px solid" : " "}}
                                        onBlur={anEmail}
                                        onChange={onChangeEmail}
                                        name="email"
                                        value={users.email}
                                        type="tel:+996"/>
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