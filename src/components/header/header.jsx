import React from 'react'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './header.module.css';

export default function Header() {

    const btnConstrClss = `${styles.btn} ${styles.nav__btn} p-5`
    const constrClss = 'text text_type_main-small text_color_active ml-2'
    const btnOrderClss = `${styles.btn} ${styles.nav__btn} p-5 ml-2`
    const ordersClss = 'text text_type_main-small text_color_inactive ml-2'
    const btnLkClss = `${styles.btn} ${styles.nav__btn} p-5`
    const lkClss = 'text text_type_main-small text_color_inactive ml-2'

    return (
        <>
        <header className='m-4 mb-0'>
            <nav className={`${styles.navigation} wrap pt-4 pb-4`}>
                <div className='align-left flex-block'>
                    <button className={btnConstrClss}>
                        <BurgerIcon type="primary" />
                        <span className={constrClss}>Конструктор</span>
                    </button>

                    <button className={btnOrderClss}>
                        <ListIcon type='secondary' />
                        <span className={ordersClss}>Лента заказов</span>
                    </button>
                </div>

                <div className='align-middle flex-block' style={{alignItems: 'center'}}>
                    <Logo />
                </div>

                <div className='align-right flex-block'>
                    <button className={btnLkClss}>
                        <ProfileIcon type='secondary' />
                        <span className={lkClss}>Личный кабинет</span>
                    </button>
                </div>
            </nav>
        </header>
            
        </>
    )
}