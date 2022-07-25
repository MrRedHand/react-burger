import React, {useEffect, useState, FC, FormEvent} from "react";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import st from './login.module.css'
import {useDispatch, useSelector} from "../../hooks/redux-hooks";
import {Redirect, useHistory, useLocation} from "react-router-dom";
import {loginUser} from "../../services/to-server-requests";
import * as H from 'history';
import { TLoginForm } from "../../utils/types";

const LoginForm : FC<TLoginForm> = ({register, forgot}) => {

    const history = useHistory()

    const location = useLocation<{from: H.Location<unknown>}>();

    const dispatch = useDispatch()

    const { isAuthenticated } = useSelector(state => state.user)


    const [userData, setUserData] = useState({
        email : "",
        password : "",
    })

    const setEmail = (value : string) => {
        setUserData(prevState => ({
            ...prevState,
            email :  value
        }))
    }

    const setPassword = (value : string) => {
        setUserData(prevState => ({
            ...prevState,
            password :  value
        }))
    }


    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(loginUser(userData))
    }

    useEffect(() => {

        isAuthenticated && history.push(location.state?.from.pathname || "/")

    }, [isAuthenticated])

    return (
        <section className={st.form_wrap}>
            <p className="text text_type_main-medium">Вход</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Input type="email" placeholder="E-mail"  value={userData.email} onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Пароль" value={userData.password} onChange={(e) => setPassword(e.target.value)}/>
                <div className='buttonSumbit'>
                    <Button>Войти</Button>
                </div>
            </form>
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

export default LoginForm