import React, {useEffect} from "react";
import styles from './order-feed-details.module.css'
import {OrderItemAvatar} from "../OrderItemAvatar/OrderItemAvatar";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OverflowSection from "../overflow-section/overflow-section";
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "../../hooks/redux-hooks";
import {wsConnectionClose, wsConnectionStart} from "../../services/actions/wsOrderActions";
import {TOrder} from "../../utils/types";

export const OrderFeedDetails = () => {

    const params = useParams<{id : string}>()

    const {allIngredients} = useSelector(store => store.main)

    const { orders, wsConnected } = useSelector(store => store.websocket)

    const order : TOrder | undefined = orders?.find(order => { return order._id === params.id})

    const dispatch = useDispatch()

    useEffect(() => {
        !wsConnected && dispatch(wsConnectionStart('wss://norma.nomoreparties.space/orders/all'))

        console.log('order.ingredients', order?.ingredients)

        return () => {
            dispatch(wsConnectionClose)
        };

    }, [wsConnected, order]);

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

                            {
                                order.ingredients?.map(ingredient => {

                                    const ingrToShow = allIngredients.find(ingr => {return ingr._id === ingredient})
                                    return (
                                        <section className={styles.component}>
                                            <OrderItemAvatar ingredientId={ingrToShow?._id}/>
                                            <div className={`${styles.name} text text_type_main-small`}>{ingrToShow?.name}</div>
                                            <div className={`${styles.price} text text_type_digits-default`}>2 x 20 <CurrencyIcon type="primary"/></div>
                                        </section>
                                    )
                                })
                            }

                        </OverflowSection>

                        <div className={styles.total}>
                            <p className="text text_type_main-default text_color_inactive">{order.updatedAt}</p>
                            <p className="text text_type_digits-medium">512 <CurrencyIcon type="primary"/></p>
                        </div>
                    </>
                )
            }

        </section>
    )
}