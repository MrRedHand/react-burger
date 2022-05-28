import React from "react";
import PropTypes from "prop-types";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import st from './login.module.css'

const LoginForm = ({register, forgot}) => {
    return (
        <section className={st.form_wrap}>
            <p className="text text_type_main-medium">Вход</p>
            <Input type="email" placeholder="E-mail" value="" onChange={() => {}}/>
            <Input type="password" placeholder="Пароль" value="" onChange={() => {}}/>
            <Button>Войти</Button>
            <div className={`${st.form__footer} mt-20`}>
                <div className="d-flex mb-4">
                    <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</p>
                    <button className={`${st.link_btn} text text_type_main-default ml-2`} onClick={() => register()}>Зарегистрироваться</button>
                </div>
                <div className="d-flex">
                    <p className="text text_type_main-default text_color_inactive">Забыли пароль?</p>
                    <button className={`${st.link_btn} text text_type_main-default ml-2`} onClick={() => forgot()}>Восстановить пароль</button>
                </div>
            </div>
        </section>
    )
}


LoginForm.propTypes = {
    register: PropTypes.func.isRequired,
    forgot: PropTypes.func.isRequired,
}


export default LoginForm