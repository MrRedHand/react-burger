import React, {useState, FC, FormEvent} from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import st from './login.module.css'
import {forgotPassword, loginUser} from "../../services/to-server-requests";
import {useDispatch} from "../../hooks/redux-hooks";
import {useHistory, useLocation} from "react-router-dom";
import { TForgotForm } from "../../utils/types";

const ForgotForm : FC<TForgotForm> = ({login}) => {

    const history = useHistory()

    const dispatch = useDispatch()

    const [userData, setUserData] = useState<{email : string}>({
        email : "",
    })

    const setEmail = (value : string) => {
        setUserData(prevState => ({
            ...prevState,
            email :  value
        }))
    }


    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(forgotPassword(userData))
        history.push('/reset-password')
    }

    return (
        <section className={st.form_wrap}>
            <p className="text text_type_main-medium">Восстановление пароля</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Input type="email" placeholder="Укажите e-mail" value={userData.email} onChange={(e) => setEmail(e.target.value)}/>
                <Button>Восстановить</Button>
            </form>
            <div className={`${st.form__footer} mt-20`}>
                <div className="d-flex mb-4">
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                    <button className={`${st.link_btn} text text_type_main-default ml-2`} onClick={() => login()}>Войти</button>
                </div>
            </div>
        </section>
    )
}


export default ForgotForm