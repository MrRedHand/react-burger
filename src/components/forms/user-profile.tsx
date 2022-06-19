import React from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";

const UserProfile = () => {

    const {userName, userEmail} = useSelector<any>(state => state.user) as any

    return (
        <section className="form_grid">
            <Input type="text" placeholder="Имя" value={userName} icon="EditIcon" onChange={() => {}}/>
            <Input type="text" placeholder="Логин" value={userEmail} icon="EditIcon" onChange={() => {}}/>
            <Input type="text" placeholder="Пароль" value="*****" icon="EditIcon" onChange={() => {}}/>
        </section>
    )
}

export default UserProfile