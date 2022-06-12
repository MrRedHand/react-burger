import React, {useEffect, useState} from "react";
import st from "./profile-nav.module.css"
import {useLocation} from "react-router-dom";

const ProfileNav = ({profile, ordersHistory, userExit}) => {

    const location = useLocation()

    const [activeLink, setActiveLink] = useState('/profile')

    useEffect(() => {

        setActiveLink(location.pathname)

    }, [location])
    return (
        <section>
            <ul className={st.nav}>
                <li><button className={`${st.profile_btn} text text_type_main-medium ${activeLink === '/profile' ? 'text_color_active' : 'text_color_inactive'}  pt-3 pb-3`} onClick={() => profile()}>Профиль</button></li>
                <li><button className={`${st.profile_btn} text text_type_main-medium ${activeLink === '/profile/orders' ? 'text_color_active' : 'text_color_inactive'} pt-3 pb-3`} onClick={() => ordersHistory()}>История заказов</button></li>
                <li><button className={`${st.profile_btn} text text_type_main-medium ${activeLink === '/profile/exit' ? 'text_color_active' : 'text_color_inactive'} pt-3 pb-3`} onClick={() => userExit()}>Выход</button></li>
            </ul>

            <p className="text text_type_main-default text_color_inactive mt-20">
                В этом разделе вы можете
                изменить свои персональные данные
            </p>
        </section>
    )
}

export default ProfileNav