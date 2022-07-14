import React, {useEffect} from "react";
import styles from './feed.module.css'
import OverflowSection from "../../components/overflow-section/overflow-section";
import {OrderItem} from "../../components/OrderItem/OrderItem";
import {useDispatch, useSelector} from '../../hooks/redux-hooks';
import {wsConnectionClose, wsConnectionStart, wsSendMessage} from "../../services/actions/wsOrderActions";
import {TOrder} from "../../utils/types";
import {v4 as uuidv4} from "uuid";

export const OrderFeedPage = () => {
    const dispatch = useDispatch()

    const { wsConnected,orders, total, totalToday } = useSelector(store => store.websocket)

    useEffect(() => {
        !wsConnected && dispatch(wsConnectionStart('wss://norma.nomoreparties.space/orders/all'))

        return () => {
            dispatch(wsConnectionClose)
        };

    }, [wsConnected]);
    return (
        <>
            <h1 className={`${styles.heading} text text_type_main-large mb-5`}>Лента заказов</h1>
            <section className={styles.orderFeedLayout}>
                <div className={styles.ordersList}>
                    <OverflowSection height={500}>
                        {
                            orders?.map((order : TOrder, index : number) => {
                                return (
                                    <OrderItem key={uuidv4()} {...order}/>
                                )
                            })
                        }

                    </OverflowSection>
                </div>
                <div>
                    <div className={styles.ordersStatuses}>
                        <div>
                            <p className="text text_type_main-default">Готовы:</p>
                            <OverflowSection height={200}>
                            <ul className={`${styles.green} text text_type_digits-default`}>
                                {
                                    orders?.map((order : TOrder, index : number) => {
                                        if (index % 10 === 0) {}
                                        return (
                                                order.status === "done"
                                                && (<li key={uuidv4()}>{order.number}</li>)
                                        )
                                    })
                                }
                            </ul>
                            </OverflowSection>
                        </div>
                        <div>
                            <p className="text text_type_main-default">В работе:</p>
                            <OverflowSection height={200}>
                            <ul className="text text_type_digits-default">
                                <li>034533</li>
                                <li>034533</li>
                                <li>034533</li>
                                <li>034533</li>
                            </ul>
                            </OverflowSection>
                        </div>
                    </div>

                    <div className="mt-15">
                        <p className="text text_type_main-default">Выполнено за все время:</p>
                        <p className="text text_type_digits-large">{total}</p>

                        <p className="text text_type_main-default mt-6">Выполнено за сегодня:</p>
                        <p className="text text_type_digits-large">{totalToday}</p>
                    </div>
                </div>
            </section>
        </>
    )
}