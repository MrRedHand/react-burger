import React, {useState} from "react";
import PropTypes from "prop-types";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import st from './login.module.css'
import {forgotPassword, loginUser} from "../../services/to-server-requests";
import {useDispatch} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";

const ForgotForm = ({login}) => {

    const history = useHistory()

    const location = useLocation()

    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
        email : "",
    })

    const setEmail = (value) => {
        setUserData(prevState => ({
            ...prevState,
            email :  value
        }))
    }

    const requestReset = () => {
        dispatch(forgotPassword(userData))
        history.push('/reset-password')
    }

    return (
        <section className={st.form_wrap}>
            <p className="text text_type_main-medium">Восстановление пароля</p>
            <Input type="email" placeholder="Укажите e-mail" value={userData.email} onChange={(e) => setEmail(e.target.value)}/>
            <Button onClick={() => requestReset()}>Восстановить</Button>

            <div className={`${st.form__footer} mt-20`}>
                <div className="d-flex mb-4">
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
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


export default ForgotForm