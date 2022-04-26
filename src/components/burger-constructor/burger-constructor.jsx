import React, {useReducer, useContext} from "react";
import PropTypes from 'prop-types';
import OverflowSection from "../overflow-section/overflow-section";
import styles from './burger-constructor.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { ProductsContext } from "../../services/productsContext";




const BurgerConstructor = () => {

    function reducer(state, action) {
        switch (action.type) {
          case "plus":
            return { totalPrice: state.totalPrice + action.payload };
          case "minus":
            return { totalPrice: state.totalPrice - action.payload };
          default:
            throw new Error(`Wrong type of action: ${action.type}`);
        }
      }

    const [state, dispatch] = useReducer(reducer, 0);


    const plusTotal = (price) => {
        dispatch({ type: "plus" , payload : price });
    };

    const minusTotal = (price) => {
        dispatch({ type: "minus", payload : price });
    };

    const products = useContext(ProductsContext);

    const [modalState, setModal] = React.useState({
        active : false,
        content: '',
    })


    return (
        <>
        <section className="relative-filler">
            
        </section>
        <section className={styles.constructor_area}>
            <section className={`${styles.top_locked} pl-8`}>
                <ConstructorElement 
                type="top"
                isLocked={true}
                text={`${products[0].name} (верх)`}
                thumbnail={products[0].image} 
                />  
            </section>
            
            <OverflowSection height={420}>
                {

                    products.map(elem => {
                        if (elem.type !== 'bun') {
                            return (
                                <div key={elem._id}  className={`${styles.constructor_elem_wrap} pl-8 mb-4 mr-4`}>
                                    <div className={styles.drag_icon}>
                                        <DragIcon />
                                    </div>
                                    <ConstructorElement 
                                        key={elem._id} 
                                        text={elem.name} 
                                        thumbnail={elem.image} 
                                        price={elem.price}
                                        />
                                    
                                    </div>
                                    
                            )
                        }
                    })
                }
                
            </OverflowSection>  

            <section className={`${styles.bottom_locked} pl-8`}>
                <ConstructorElement 
                    type="bottom"
                    isLocked={true}
                    text={`${products[0].name} (низ)`}
                    thumbnail={products[0].image} 
                    />
            </section>
        </section>   
        
        

        <section className={styles.total}>
            <div className={`${styles.total__price} mr-10`}>
                <p className="text text_type_digits-medium">
                    {state}
                </p>
                <CurrencyIcon />
            </div>
            <Button type="primary" size="large" onClick={() => {
                setModal({
                    active : true,
                    content : <OrderDetails />
                })
            }}>Оформить заказ</Button>
        </section>

        <Modal 
            active={modalState.active} 
            setActive={setModal} 
            children={modalState.content}
            />  
        </>
    )
}

BurgerConstructor.propTypes = {
    //data: PropTypes.array.isRequired
}

export default BurgerConstructor


