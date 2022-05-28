import React from "react";
import PropTypes from "prop-types";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import st from './login.module.css'

const RegisterForm = ({login}) => {
    return (
        <section className={st.form_wrap}>
            <p className="text text_type_main-medium">Регистрация</p>
            <Input type="text" placeholder="Ваше имя"  value="" onChange={() => {}}/>
            <Input type="email" placeholder="E-mail"  value="" onChange={() => {}}/>
            <Input type="password" placeholder="Пароль"  value="" onChange={() => {}}/>
            <Button>Зарегистрироваться</Button>
            <div className={`${st.form__footer} mt-20`}>
                <div className="d-flex mb-4">
                    <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
                    <button className={`${st.link_btn} text text_type_main-default ml-2`} onClick={() => login()}>Войти</button>
                </div>
            </div>
        </section>
    )
}


// RegisterForm.propTypes = {
//     register: PropTypes.func.isRequired,
//     forgot: PropTypes.func.isRequired,
// }


export default RegisterForm