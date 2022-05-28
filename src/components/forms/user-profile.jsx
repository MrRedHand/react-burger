import React from "react";
import PropTypes from "prop-types";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import st from './login.module.css'

const UserProfile = () => {

    return (
        <section className="form_grid">
            <Input type="text" placeholder="Имя" value="Марк" icon="EditIcon" onChange={() => {}}/>
            <Input type="text" placeholder="Логин" value="momo@gmail.com" icon="EditIcon" onChange={() => {}}/>
            <Input type="text" placeholder="Пароль" value="*****" icon="EditIcon" onChange={() => {}}/>
        </section>
    )
}


// RegisterForm.propTypes = {
//     register: PropTypes.func.isRequired,
//     forgot: PropTypes.func.isRequired,
// }


export default UserProfile