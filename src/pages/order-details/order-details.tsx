import React from "react";
import styles from './order-details.module.css'
import {OrderItemAvatar} from "../../components/OrderItemAvatar/OrderItemAvatar";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OverflowSection from "../../components/overflow-section/overflow-section";

export const OrderDetailsPage = () => {
    return (
        <section className={styles.feedDetailsWrap}>
            <p className={`${styles.orderId} text text_type_digits-default`}>#034533</p>
            <p className="text text_type_main-medium">Black Hole Singularity острый бургер</p>
            <p className={`${styles.status} text text_type_main-small`}>Выполнен</p>

            <p className={`${styles.comps} text text_type_main-medium`}>Состав:</p>

            <OverflowSection height={300}>
                <section className={styles.component}>
                    <OrderItemAvatar/>
                    <div className={`${styles.name} text text_type_main-small`}>Флюоресцентная булка R2-D3</div>
                    <div className={`${styles.price} text text_type_digits-default`}>2 x 20 <CurrencyIcon type="primary"/></div>
                </section>

                <section className={styles.component}>
                    <OrderItemAvatar/>
                    <div className={`${styles.name} text text_type_main-small`}>Флюоресцентная булка R2-D3</div>
                    <div className={`${styles.price} text text_type_digits-default`}>2 x 20 <CurrencyIcon type="primary"/></div>
                </section>

                <section className={styles.component}>
                    <OrderItemAvatar/>
                    <div className={`${styles.name} text text_type_main-small`}>Флюоресцентная булка R2-D3</div>
                    <div className={`${styles.price} text text_type_digits-default`}>2 x 20 <CurrencyIcon type="primary"/></div>
                </section>

                <section className={styles.component}>
                    <OrderItemAvatar/>
                    <div className={`${styles.name} text text_type_main-small`}>Флюоресцентная булка R2-D3</div>
                    <div className={`${styles.price} text text_type_digits-default`}>2 x 20 <CurrencyIcon type="primary"/></div>
                </section>

                <section className={styles.component}>
                    <OrderItemAvatar/>
                    <div className={`${styles.name} text text_type_main-small`}>Флюоресцентная булка R2-D3</div>
                    <div className={`${styles.price} text text_type_digits-default`}>2 x 20 <CurrencyIcon type="primary"/></div>
                </section>
            </OverflowSection>

            <div className={styles.total}>
                <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
                <p className="text text_type_digits-medium">512 <CurrencyIcon type="primary"/></p>
            </div>
        </section>
    )
}