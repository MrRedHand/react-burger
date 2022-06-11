import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import st from './login.module.css'
import {registerUser, resetPassword} from "../../services/to-server-requests";
import {useDispatch, useSelector} from "react-redux";
import {  Redirect } from 'react-router-dom';

const RegisterForm = ({login}) => {

    const dispatch = useDispatch()

    const {registered} = useSelector(state => state.user)

    const [userData, setUserData] = useState({
        email : "",
        password : "",
        name : ""
    })

    const setName = (value) => {
        setUserData(prevState => ({
            ...prevState,
            name :  value
        }))
    }

    const setPassword = (value) => {
        setUserData(prevState => ({
            ...prevState,
            password :  value
        }))
    }

    const setEmail = (value) => {
        setUserData(prevState => ({
            ...prevState,
            email :  value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(registerUser(userData))
    }

    return (
        registered
        ? <Redirect to='/' />
        : (
            <section className={st.form_wrap}>
                <p className="text text_type_main-medium">Регистрация</p>
                <form onSubmit={e => handleSubmit(e)}>
                    <Input type="text" placeholder="Ваше имя"  value={userData.name} onChange={(e) => setName(e.target.value)}/>
                    <Input type="email" placeholder="E-mail"  value={userData.email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input type="password" placeholder="Пароль"  value={userData.password} onChange={(e) => setPassword(e.target.value)}/>
                    <Button>Зарегистрироваться</Button>
                </form>
                <div className={`${st.form__footer} mt-20`}>
                    <div className="d-flex mb-4">
                        <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
                        <button className={`${st.link_btn} text text_type_main-default ml-2`} onClick={() => login()}>Войти</button>
                    </div>
                </div>
            </section>
        )

    )
}


// RegisterForm.propTypes = {
//     register: PropTypes.func.isRequired,
//     forgot: PropTypes.func.isRequired,
// }


export default RegisterForm