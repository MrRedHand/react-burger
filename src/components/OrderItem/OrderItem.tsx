import React, {FC, useEffect, useState} from "react";
import styles from './OrderItem.module.css'
import {OrderItemAvatar} from "../OrderItemAvatar/OrderItemAvatar";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useHistory, useLocation} from 'react-router-dom';
import {TOrder, TOrderIngredient} from "../../utils/types";
import {useSelector} from "../../hooks/redux-hooks";
import {v4 as uuidv4} from "uuid";
import {convertDate} from "../../services/convert-date";

export const OrderItem : FC<TOrder> = ({_id, number, name, createdAt, ingredients, status, updatedAt}) => {

    const [price, setPrice] = useState(0)

    const location = useLocation()

    const history = useHistory();

    const { allIngredients } = useSelector(store => store.main)

    useEffect(() => {
        ingredients.map(ingr => {
            allIngredients.find(elem => {
                if (elem._id === ingr) {
                    setPrice(prevState => prevState + elem.price)
                }

            })
        })
    }, [])


    const onOpenItem = () => {
        if (location.pathname === "/feed") {
            history.push(`/feed/${_id}`, {background : location})
        } else if (location.pathname === "/profile/orders") {
            history.push(`/profile/orders/${_id}`, {background : location})
        }
    }


    return (
        <section className={styles.orderItemWrap} onClick={() => {onOpenItem()}}>

            <div className={styles.orderHeader}>
                <p className="text text_type_digits-default">#{number}</p>
                <p className="text text_type_main-default text_color_inactive">{convertDate(createdAt)}</p>
            </div>

            <div className={`${styles.orderTitle} text text_type_main-medium`}>{name}</div>

            <div className={styles.footer}>
                <div className={styles.orderIngredients}>
                    {
                        ingredients.map((ingredientId, index) => {
                            const zIndex = ingredients.length - index
                            if (index < 5) {
                                return (
                                    <OrderItemAvatar key={uuidv4()} style={{zIndex : zIndex}} ingredientId={ingredientId}/>
                                )
                            } else if (index === 5) {
                                return <OrderItemAvatar key={uuidv4()} ingredientId={ingredientId} style={{zIndex : zIndex}} type={'end'} hiddenIngredients={zIndex}/>
                            }

                        })
                    }
                </div>
                <div className={`${styles.price} text text_type_digits-default`}>
                    <div>
                        {price}
                    </div>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>

        </section>
    )
}