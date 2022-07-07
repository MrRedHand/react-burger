import React from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";

const UserProfile = () => {

    const {user} = useSelector<any>(state => state.user) as any

    return (
        <section className="form_grid" style={{maxWidth : "400px"}}>
            <Input type="text" placeholder="Имя" value={user.name} icon="EditIcon" onChange={() => {}}/>
            <Input type="text" placeholder="Логин" value={user.email} icon="EditIcon" onChange={() => {}}/>
            <Input type="text" placeholder="Пароль" value="*****" icon="EditIcon" onChange={() => {}}/>
        </section>
    )
}

export default UserProfile