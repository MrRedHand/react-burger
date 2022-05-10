import React from "react";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../burger-constructor/burger-constructor.module.css";
import {useDispatch} from "react-redux";

const ConstructorIngredient = ({id, text, thumbnail, type, isLocked, price}) => {

    const dispatch = useDispatch()


    const deleteIngredient = () => {
        console.log(id)
        //dispatch({type: REMOVE_INGREDIENT, payload : elem})
    }

    return (
        <div className={`${styles.constructor_elem_wrap} pl-8 mb-4 mr-4`}>
            {
                isLocked === false
                && <div className={styles.drag_icon}> <DragIcon /> </div>
            }

            <ConstructorElement
                key={id}
                text={text}
                type={type}
                thumbnail={thumbnail}
                isLocked={isLocked}
                handleClose={deleteIngredient}
                price={price}
            />
        </div>
    )
}

export default ConstructorIngredient