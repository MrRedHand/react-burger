import React from 'react'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './appheader.module.css';

export default function AppHeader() {

    const btnConstrClss = `${appHeaderStyles.btn} ${appHeaderStyles.nav__btn} p-5`
    const constrClss = 'text text_type_main-small text_color_active ml-2'
    const btnOrderClss = `${appHeaderStyles.btn} ${appHeaderStyles.nav__btn} p-5 ml-2`
    const ordersClss = 'text text_type_main-small text_color_inactive ml-2'
    const btnLkClss = `${appHeaderStyles.btn} ${appHeaderStyles.nav__btn} p-5`
    const lkClss = 'text text_type_main-small text_color_inactive ml-2'

    return (
        <>
        <header className='m-4 mb-0'>
            <nav className={`${appHeaderStyles.navigation} wrap pt-4 pb-4`}>
                <div className='align-left flex-block'>
                    <button className={btnConstrClss}>
                        <BurgerIcon type="primary" />
                        <span className={constrClss}>Конструктор</span>
                    </button>

                    <button className={btnOrderClss}>
                        <ListIcon type='primary' />
                        <span className={ordersClss}>Лента заказов</span>
                    </button>
                </div>

                <div className='align-middle flex-block' style={{alignItems: 'center'}}>
                    <Logo />
                </div>

                <div className='align-right flex-block'>
                    <button className={btnLkClss}>
                        <ProfileIcon type='primary' />
                        <span className={lkClss}>Личный кабинет</span>
                    </button>
                </div>
            </nav>
        </header>
            
        </>
    )
}