import React from "react";
import OverflowSection from "../overflow-section/overflow-section";
import styles from './constructor.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Constructor(props) {

    return (
        <>
        <section style={{height : '196px'}}>
            
        </section>
        <section className={styles.constructor_area}>
            <section className={`${styles.top_locked} pl-8`}>
                <ConstructorElement 
                type="top"
                isLocked={true}
                text={`${props.data[0].name} (верх)`}
                thumbnail={props.data[0].image} 
                />
            </section>
            
            <OverflowSection height={420}>
                {

                    props.data.map((elem, index) => {  
                        
                        return <div key={elem._id}  className={`${styles.constructor_elem_wrap} pl-8 mb-4 mr-4`}>
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
                    })
                }
                
            </OverflowSection>  

            <section className={`${styles.bottom_locked} pl-8`}>
                <ConstructorElement 
                    type="bottom"
                    isLocked={true}
                    text={`${props.data[0].name} (низ)`}
                    thumbnail={props.data[0].image} 
                    />
            </section>
        </section>   
        
        

        <section className={styles.total}>
            <div className={`${styles.total__price} mr-10`}>
                <p className="text text_type_digits-medium">
                    610
                </p>
                <CurrencyIcon />
            </div>
            <Button type="primary" size="large">Оформить заказ</Button>
        </section> 
        </>
    )
}


