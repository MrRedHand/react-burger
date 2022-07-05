import React, {useCallback} from 'react'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import {Link, useHistory} from 'react-router-dom';
import {useSelector} from "react-redux";


export default function AppHeader() {

    const {isAuthenticated, userName} = useSelector<any>(state => state.user) as any

    const history = useHistory();

    const btnConstrClss = `${styles.btn} ${styles.nav__btn} p-5`
    const constrClss = 'text text_type_main-small text_color_active ml-2'
    const btnOrderClss = `${styles.btn} ${styles.nav__btn} p-5 ml-2`
    const ordersClss = 'text text_type_main-small text_color_inactive ml-2'
    const btnLkClss = `${styles.btn} ${styles.nav__btn} p-5`
    const lkClss = 'text text_type_main-small text_color_inactive ml-2'

    const login = useCallback(
        () => {
            history.push('/login');
        },
        [history]
    );

    const profile = useCallback(
        () => {
            history.push('/profile');
        },
        [history]
    );

    const mainPage = useCallback(
        () => {
            history.push('/');
        },
        [history]
    );

    const feedPage = useCallback(
        () => {
            history.push('/feed');
        },
        [history]
    );


    return (
        <header className='m-4 mb-0'>
            <nav className={`${styles.navigation} wrap pt-4 pb-4 mx-auto`}>
                <div className='align-left flex-block'>
                        <button className={btnConstrClss} onClick={() => mainPage()}>
                            <BurgerIcon type="primary" />
                            <span className={constrClss}>Конструктор</span>
                        </button>

                    <button className={btnOrderClss} onClick={() => feedPage()}>
                        <ListIcon type='secondary' />
                        <span className={ordersClss}>Лента заказов</span>
                    </button>
                </div>

                <div className='align-middle align-center flex-block'>
                    <Link to={'/'}>
                        <Logo />
                    </Link>
                </div>

                <div className='align-right flex-block'>
                    <button className={btnLkClss} onClick={() => profile()}>
                        <ProfileIcon type='secondary' />
                        {
                            isAuthenticated
                            ? (<span className={lkClss}>{userName}</span>)
                                : (<span className={lkClss}>Личный кабинет</span>)
                        }
                    </button>
                </div>
            </nav>
        </header>
    )
}