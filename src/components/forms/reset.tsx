import React, {useState, FC, FormEvent} from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import st from './login.module.css'
import {useDispatch} from "../../hooks/redux-hooks";
import {forgotPassword, resetPassword} from "../../services/to-server-requests";
import { TResetFrom , TResetFormState } from "../../utils/types";

const ResetForm : FC<TResetFrom>= ({login}) => {
    const dispatch = useDispatch()

    const [formValues, setFormValues] = useState<TResetFormState>({
        password : '',
        token : ''
    })

    const setNewPassword = (value : string) => {
        setFormValues(prevState => ({
            ...prevState,
            password :  value
        }))
    }

    const setToken = (value : string) => {
        setFormValues(prevState => ({
            ...prevState,
            token :  value
        }))
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(resetPassword(formValues))
    }

    return (
        <section className={st.form_wrap}>
            <p className="text text_type_main-medium">Восстановление пароля</p>
            <form onSubmit={e => handleSubmit(e)}>
                <Input type="text" placeholder="Введите новый пароль"  value={formValues.password} onChange={(e) => setNewPassword(e.target.value)}/>
                <Input type="text" placeholder="Введите код из письма"  value={formValues.token} onChange={(e) => setToken(e.target.value)}/>
                <Button>Сохранить</Button>
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


// RegisterForm.propTypes = {
//     register: PropTypes.func.isRequired,
//     forgot: PropTypes.func.isRequired,
// }


export default ResetForm