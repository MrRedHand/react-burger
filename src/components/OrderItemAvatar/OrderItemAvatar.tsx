import React, {FC, useEffect} from "react";
import styles from './OrderItemAvatar.module.css'
import {useSelector} from '../../hooks/redux-hooks';

type TOrderItemAvatar = {
    ingredientId : string,
    style? : React.CSSProperties,
    type? : 'end',
    hiddenIngredients? : number
}

export const OrderItemAvatar : FC<TOrderItemAvatar> = ({ingredientId, style, type, hiddenIngredients}) => {

    const { allIngredients } = useSelector(store => store.main)

    const inrg = allIngredients.find(ingr => {
        return ingr._id === ingredientId
    });

    return (
        <section className={styles.avatarWrap} style={style}>
            {
                (type === 'end') && (<span>+ {hiddenIngredients}</span>)

            }
            {inrg && <img src={inrg.image_mobile}/>}
        </section>
    )
}