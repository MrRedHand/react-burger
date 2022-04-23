import React from 'react'
import st from './order-details.module.css';
import checkBg from '../../images/order-details-check-bg.svg';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails = () => {
    return (
        <>
            <section className='text-center'>
                <p className={`${st.order_number} text text_type_digits-large`}>
                    034536
                </p>
                <p className='text text_type_main-medium mb-15'>идентификатор заказа</p>
                <div className={`${st.check_wrap}`}>
                    <div className={st.check_svg}>
                        <CheckMarkIcon />
                    </div>
                    <img src={checkBg} className={st.check_bg}/>
                </div>
                <p className='text text_type_main-default mb-2 mt-15'>
                    Ваш заказ начали готовить
                </p>
                <p className='text text_type_main-default text_color_inactive mb-10'>
                    Дождитесь готовности на орбитальной станции
                </p>
            </section>
        </>
    )
}


export default OrderDetails