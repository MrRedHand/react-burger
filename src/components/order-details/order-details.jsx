import React, {useContext, useEffect} from 'react'
import st from './order-details.module.css';
import checkBg from '../../images/order-details-check-bg.svg';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProductsContext } from "../../services/productsContext";


const OrderDetails = () => {

    const apiUrl = 'https://norma.nomoreparties.space/api/orders'

    const products = useContext(ProductsContext);

    const [order, setOrder] = React.useState({
        number : 0,
        name : ''
    })

    let ingredientsArr = []

    products.map(elem => {
        ingredientsArr = [...ingredientsArr, elem._id]
    })

    useEffect(() => {

        const getData = ()  => {
            fetch(apiUrl, {
                headers: {'Content-Type' : 'application/json'},
                method: 'POST',
                body: JSON.stringify({ingredients : ingredientsArr})
            })
            .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                return Promise.reject(`Ошибка ${response.status}`);
              }
            })
            .then((data) => {
              setOrder({
                number : data.order.number,
                name : data.name
              })  
              console.log('Получен ответ', data)
            })
            .catch((error) => {
              console.log(error)
            });
          }
        getData();

    }, [])

    return (
        <section className='text-center'>
            <p className={`${st.order_number} text text_type_digits-large`}>
                {order.number}
            </p>
            <p className='text text_type_main-medium mb-15'>идентификатор заказа</p>
            <div className={`${st.check_wrap}`}>
                <div className={st.check_svg}>
                    <CheckMarkIcon />
                </div>
                <img src={checkBg} className={st.check_bg}/>
            </div>
            <p className='text text_type_main-default mb-2 mt-15'>
                {`Ваш заказ "${order.name}" начали готовить`}
            </p>
            <p className='text text_type_main-default text_color_inactive mb-10'>
                Дождитесь готовности на орбитальной станции
            </p>
        </section>
    )
}


export default OrderDetails