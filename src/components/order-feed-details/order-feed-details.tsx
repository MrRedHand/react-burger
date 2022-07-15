import React, {useEffect} from "react";
import styles from './order-feed-details.module.css'
import {OrderItemAvatar} from "../OrderItemAvatar/OrderItemAvatar";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OverflowSection from "../overflow-section/overflow-section";
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "../../hooks/redux-hooks";
import {wsConnectionClose, wsConnectionStart} from "../../services/actions/wsOrderActions";

export const OrderFeedDetails = () => {

    const params = useParams<{id : string}>()

    const { orders, wsConnected } = useSelector(store => store.websocket)

    const order = orders?.find(order => { return order._id === params.id})

    const dispatch = useDispatch()

    useEffect(() => {
        !wsConnected && dispatch(wsConnectionStart('wss://norma.nomoreparties.space/orders/all'))

        return () => {
            dispatch(wsConnectionClose)
        };

    }, [wsConnected]);

    return (
        <section className={styles.feedDetailsWrap}>
            {
                order && (
                    <>
                        <p className={`${styles.orderId} text text_type_digits-default`}>#{order.number}</p>
                        <p className="text text_type_main-medium">{order.name}</p>
                        <p className={`${styles.status} text text_type_main-small`}>{order.status}</p>

                        <p className={`${styles.comps} text text_type_main-medium`}>Состав:</p>

                        <OverflowSection height={300}>
                            <section className={styles.component}>
                                {/*<OrderItemAvatar/>*/}
                                <div className={`${styles.name} text text_type_main-small`}>Флюоресцентная булка R2-D3</div>
                                <div className={`${styles.price} text text_type_digits-default`}>2 x 20 <CurrencyIcon type="primary"/></div>
                            </section>

                            <section className={styles.component}>
                                {/*<OrderItemAvatar/>*/}
                                <div className={`${styles.name} text text_type_main-small`}>Флюоресцентная булка R2-D3</div>
                                <div className={`${styles.price} text text_type_digits-default`}>2 x 20 <CurrencyIcon type="primary"/></div>
                            </section>

                            <section className={styles.component}>
                                {/*<OrderItemAvatar/>*/}
                                <div className={`${styles.name} text text_type_main-small`}>Флюоресцентная булка R2-D3</div>
                                <div className={`${styles.price} text text_type_digits-default`}>2 x 20 <CurrencyIcon type="primary"/></div>
                            </section>

                            <section className={styles.component}>
                                {/*<OrderItemAvatar/>*/}
                                <div className={`${styles.name} text text_type_main-small`}>Флюоресцентная булка R2-D3</div>
                                <div className={`${styles.price} text text_type_digits-default`}>2 x 20 <CurrencyIcon type="primary"/></div>
                            </section>
                        </OverflowSection>

                        <div className={styles.total}>
                            <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
                            <p className="text text_type_digits-medium">512 <CurrencyIcon type="primary"/></p>
                        </div>
                    </>
                )
            }

        </section>
    )
}