import React from "react";
import styles from './feed-details.module.css'
import {OrderItemAvatar} from "../../components/OrderItemAvatar/OrderItemAvatar";

export const FeedDetails = () => {
    return (
        <section className={styles.feedDetailsWrap}>
            <p className={`${styles.orderId} text text_type_digits-default`}>#034533</p>
            <p className="text text_type_main-medium">Black Hole Singularity острый бургер</p>
            <p className={`${styles.status} text text_type_main-small`}>Выполнен</p>

            <p className={`${styles.comps} text text_type_main-medium`}>Состав:</p>
            <section className={styles.component}>
                <OrderItemAvatar/>
                <div className={`${styles.name} text text_type_main-small`}>Флюоресцентная булка R2-D3</div>
                <div className={`${styles.price} text text_type_digits-default`}>2 x 20</div>
            </section>

            <section className={styles.total}>
                <div className="text text_type_main-small text_color_inactive">Вчера, 13:50 i-GMT+3</div>
                <div className="text text_type_digits-default">510</div>
            </section>
        </section>
    )
}