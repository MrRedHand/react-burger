import React, {FC, useEffect, useMemo, useState} from "react";
import styles from './order-feed-details.module.css'
import {OrderItemAvatar} from "../OrderItemAvatar/OrderItemAvatar";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OverflowSection from "../overflow-section/overflow-section";
import {useLocation, useParams, useRouteMatch} from "react-router-dom";
import {useDispatch,useSelector} from "../../hooks/redux-hooks";
import {wsConnectionClose, wsConnectionStart} from "../../services/actions/wsOrderActions";
import {TOrder} from "../../utils/types";
import {v4 as uuidv4} from "uuid";
import {convertDate} from "../../services/convert-date";

export const OrderFeedDetails = () => {

    const [order, setOrder] = useState<TOrder>()

    const params = useParams<{id : string}>()

    const location = useLocation()

    const isProfile = useRouteMatch("/profile/orders/:id" || '/profile/orders/')

    const {allIngredients} = useSelector(store => store.main)

    const { orders, wsConnected } = useSelector(store => store.websocket)

    const dispatch = useDispatch()

    useEffect(() => {

        if (!wsConnected || orders === null) {
            if (isProfile?.isExact) {
                const token = localStorage.getItem('accessToken')

                const userOrders = `wss://norma.nomoreparties.space/orders?token=${token}`
                dispatch(wsConnectionStart(userOrders))
            } else {
                dispatch(wsConnectionStart('wss://norma.nomoreparties.space/orders/all'))
            }
        }

        if (wsConnected && orders !== null) {
            setOrder(orders?.find((order) => order._id === params.id))
        }


        return () => {
            dispatch(wsConnectionClose())
        };

    }, [order, orders, wsConnected]);





    const statusName = (status: string) : JSX.Element | undefined => {
        let text;

        switch (status) {
            case 'done':
                text = (<span className={styles.done}>Выполнен</span>);
                break;
            case 'created':
                text = (<span className={styles.created}>Создан</span>);
                break;
            case 'pending':
                text = (<span className={styles.process}>Готовится</span>);
                break;
            default:
        }

        return text;
    };

    return (
        <section className={styles.feedDetailsWrap}>
            {
                order && (
                    <>
                        <p className={`${styles.orderId} text text_type_digits-default`}>#{order.number}</p>
                        <p className="text text_type_main-medium">{order.name}</p>
                        <p className={`${styles.status} text text_type_main-small`}>{statusName(order.status)}</p>

                        <p className={`${styles.comps} text text_type_main-medium`}>Состав:</p>

                        <OverflowSection height={300}>

                            {
                                order.ingredients?.map(ingredient => {

                                    const ingrToShow = allIngredients.find(ingr => {return ingr._id === ingredient})
                                    return (
                                        <section className={styles.component} key={uuidv4()}>
                                            <OrderItemAvatar ingredientId={ingrToShow?._id}/>
                                            <div className={`${styles.name} text text_type_main-small`}>{ingrToShow?.name}</div>
                                            <div className={`${styles.price} text text_type_digits-default`}>2 x 20 <CurrencyIcon type="primary"/></div>
                                        </section>
                                    )
                                })
                            }

                        </OverflowSection>

                        <div className={styles.total}>
                            <p className="text text_type_main-default text_color_inactive">{convertDate(order.updatedAt)}</p>
                            <p className="text text_type_digits-medium">512 <CurrencyIcon type="primary"/></p>
                        </div>
                    </>
                )
            }

        </section>
    )
}