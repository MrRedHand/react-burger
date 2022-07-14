import React, {useCallback, useEffect} from "react";
import UserProfile from "../../../components/forms/user-profile";
import ProfileNav from "../../../components/profile-nav/profile-nav";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from '../../../hooks/redux-hooks';
import {OrderItem} from "../../../components/OrderItem/OrderItem";
import OverflowSection from "../../../components/overflow-section/overflow-section";
import {wsConnectionClose, wsConnectionStart} from "../../../services/actions/wsOrderActions";


const ProfileOrdersPage = () => {

    const dispatch = useDispatch()

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

    const token = localStorage.getItem('accessToken')
    const userOrders = `wss://norma.nomoreparties.space/orders?token=${token}`

    useEffect(() => {
        dispatch(wsConnectionStart(userOrders))

        return () => {
            dispatch(wsConnectionClose)
        };
    }, []);


    return (
        <section className="wrap mt-20 mx-auto">
            <div className="profile_grid">
                <ProfileNav profile={profile} ordersHistory={ordersHistory} userExit={userExit} />
                <div>
                    <OverflowSection height={800}>
                        {/*<OrderItem/>*/}
                        {/*<OrderItem/>*/}
                        {/*<OrderItem/>*/}
                        {/*<OrderItem/>*/}
                        {/*<OrderItem/>*/}
                    </OverflowSection>

                </div>
            </div>
        </section>
    )
}

export  default  ProfileOrdersPage