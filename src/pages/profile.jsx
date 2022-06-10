import React, {useCallback, useEffect} from "react";
import UserProfile from "../components/forms/user-profile";
import ProfileNav from "../components/profile-nav/profile-nav";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfilePage = () => {

    const history = useHistory();

    const profile = useCallback(
        () => {
            history.replace({ pathname: '/profile' });
        },
        [history]
    );

    const ordersHistory = useCallback(
        () => {
            history.replace({ pathname: '/profile/orders' });
        },
        [history]
    );

    const userExit = useCallback(
        () => {
            history.replace({ pathname: '/profile/exit' });
        },
        [history]
    );



    return (
        <section className="wrap mt-20 mx-auto">
            <div className="profile_grid">
                <ProfileNav profile={profile} ordersHistory={ordersHistory} userExit={userExit} />
                <UserProfile/>
            </div>
        </section>
    )
}

export  default  ProfilePage