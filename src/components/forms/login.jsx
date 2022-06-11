import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import st from './login.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Redirect, useHistory, useLocation} from "react-router-dom";
import {loginUser} from "../../services/to-server-requests";

const LoginForm = ({register, forgot}) => {
    const location = useLocation()

    const history = useHistory();

    const dispatch = useDispatch()

    const { isAuthenticated } = useSelector(state => state.user)

    //const from = location.state.from.pathname

    const [userData, setUserData] = useState({
        email : "",
        password : "",
    })

    const setEmail = (value) => {
        setUserData(prevState => ({
            ...prevState,
            email :  value
        }))
    }

    const setPassword = (value) => {
        setUserData(prevState => ({
            ...prevState,
            password :  value
        }))
    }

    useEffect(() => {

        isAuthenticated && history.replace({ pathname: '/' });

    }, [isAuthenticated])

    //console.log('from ', from)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(loginUser(userData))
    }

    return (
        isAuthenticated
        ? <Redirect to={'/'} />
        : (
            <section className={st.form_wrap}>
                <p className="text text_type_main-medium">Вход</p>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Input type="email" placeholder="E-mail"  value={userData.email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input type="password" placeholder="Пароль" value={userData.password} onChange={(e) => setPassword(e.target.value)}/>
                    <Button>Войти</Button>
                </form>
                {/*<Input type="email" placeholder="E-mail"  value={userData.email} onChange={(e) => setEmail(e.target.value)}/>*/}
                {/*<Input type="password" placeholder="Пароль" value={userData.password} onChange={(e) => setPassword(e.target.value)}/>*/}
                {/*<Button onClick={() => dispatch(loginUser(userData))}>Войти</Button>*/}
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

    )
}


LoginForm.propTypes = {
    register: PropTypes.func.isRequired,
    forgot: PropTypes.func.isRequired,
}


export default LoginForm