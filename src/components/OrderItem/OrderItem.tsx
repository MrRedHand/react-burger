import React from "react";
import styles from './OrderItem.module.css'
import {OrderItemAvatar} from "../OrderItemAvatar/OrderItemAvatar";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useHistory} from 'react-router-dom';

export const OrderItem = () => {

    const history = useHistory();

    return (
        <section className={styles.orderItemWrap} onClick={() => {history.push('/feed/123')}}>

            <div className={styles.orderHeader}>
                <p className="text text_type_digits-default">#034535</p>
                <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
            </div>

            <div className={`${styles.orderTitle} text text_type_main-medium`}>Death Star Starship Main бургер</div>

            <div className={styles.footer}>
                <div className={styles.orderIngredients}>
                    <OrderItemAvatar style={{zIndex : '5'}}/>
                    <OrderItemAvatar style={{zIndex : '4'}}/>
                    <OrderItemAvatar style={{zIndex : '3'}}/>
                    <OrderItemAvatar style={{zIndex : '2'}}/>
                    <OrderItemAvatar style={{zIndex : '1'}}/>
                </div>
                <div className={`${styles.price} text text_type_digits-default`}>
                    480
                    <CurrencyIcon type="primary"/>
                </div>
            </div>

        </section>
    )
}