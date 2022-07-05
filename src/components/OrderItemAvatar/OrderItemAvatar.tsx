import React, {FC} from "react";
import styles from './OrderItemAvatar.module.css'

type TOrderItemAvatar = {
    style? : React.CSSProperties
}

export const OrderItemAvatar : FC<TOrderItemAvatar> = ({style}) => {
    return (
        <section className={styles.avatarWrap} style={style}>

        </section>
    )
}