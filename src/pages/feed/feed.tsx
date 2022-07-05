import React from "react";
import styles from './feed.module.css'
import OverflowSection from "../../components/overflow-section/overflow-section";
import {OrderItem} from "../../components/OrderItem/OrderItem";

export const OrderFeedPage = () => {
    return (
        <>
            <h1 className={`${styles.heading} text text_type_main-large mb-5`}>Лента заказов</h1>
            <section className={styles.orderFeedLayout}>
                <div className={styles.ordersList}>
                    <OverflowSection height={500}>
                        <OrderItem/>
                        <OrderItem/>
                        <OrderItem/>
                        <OrderItem/>
                        <OrderItem/>
                    </OverflowSection>
                </div>
                <div>
                    <div className={styles.ordersStatuses}>
                        <div>
                            <p className="text text_type_main-default">Готовы:</p>

                            <ul className={`${styles.green} text text_type_digits-default`}>
                                <li>034533</li>
                                <li>034533</li>
                                <li>034533</li>
                                <li>034533</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text text_type_main-default">В работе:</p>

                            <ul className="text text_type_digits-default">
                                <li>034533</li>
                                <li>034533</li>
                                <li>034533</li>
                                <li>034533</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-15">
                        <p className="text text_type_main-default">Выполнено за все время:</p>
                        <p className="text text_type_digits-large">28 752</p>

                        <p className="text text_type_main-default mt-6">Выполнено за сегодня:</p>
                        <p className="text text_type_digits-large">138</p>
                    </div>
                </div>
            </section>
        </>
    )
}