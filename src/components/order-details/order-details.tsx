import React, {useEffect} from 'react'
import st from './order-details.module.css';
import checkBg from '../../images/order-details-check-bg.svg';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {fetchOrder} from "../../services/to-server-requests";
import {useDispatch, useSelector} from "../../hooks/redux-hooks";
import { TIngredient } from "../../utils/types";


const OrderDetails = () => {

    const dispatch = useDispatch();

    const {orderDetails, currentBun, constructorIngredients, orderDetailsRecieved} = useSelector(state => state.main)


    useEffect(() => {

        if (currentBun !== null && constructorIngredients.length > 0 && !orderDetailsRecieved) {

            let ingredientsArr : Array<string> = []

            constructorIngredients.map((ingredient : TIngredient) => {
                ingredientsArr = [...ingredientsArr, ingredient._id]
                return ingredientsArr
            })

            ingredientsArr.unshift(currentBun._id)
            ingredientsArr.push(currentBun._id)

            dispatch(fetchOrder(ingredientsArr))
        }

    }, [currentBun, constructorIngredients, orderDetailsRecieved])

    return (
        <section className='text-center'>
            {
                orderDetailsRecieved
                ? (
                    <>
                        <p className={`${st.order_number} text text_type_digits-large`}>
                            {orderDetails && orderDetails.number}
                        </p>
                        <p className='text text_type_main-medium mb-15'>идентификатор заказа</p>
                        <div className={`${st.check_wrap}`}>
                            <div className={st.check_svg}>
                                <CheckMarkIcon type="primary"/>
                            </div>
                            <img src={checkBg} className={st.check_bg}/>
                        </div>
                        <p className='text text_type_main-default mb-2 mt-15'>
                            {`Ваш заказ "${orderDetails && orderDetails.name}" начали готовить`}
                        </p>
                        <p className='text text_type_main-default text_color_inactive mb-10'>
                            Дождитесь готовности на орбитальной станции
                        </p>
                    </>
                )
                : 'ФОРМИРУЕМ ЗАКАЗ'


            }

        </section>
    )
}


export default OrderDetails