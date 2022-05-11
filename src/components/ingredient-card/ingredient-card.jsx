import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import styles from './ingredient-card.module.css';
import {ConstructorElement, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDrag} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {REMOVE_INGREDIENT} from "../../services/actions/main";

const IngredientCard = ({id, ingredientType,  text, thumbnail, type, isLocked, price, board, onClick, index}) => {

    const [count, setCount] = useState(0)

    const dispatch = useDispatch();

    const currentBoard = board;

    const {constructorIngredients, currentBun} = useSelector(state => state.main)


    const [{ isDragging}, dragRef] = useDrag({
        type: 'ingredient',
        item: { id },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const deleteIngredient = () => {
       dispatch({type : REMOVE_INGREDIENT, payload : index})
    }

    useEffect(() => {

        if (ingredientType === 'bun') {
            (currentBun !== null && currentBun._id === id)
            ? setCount(2)
            : setCount(0)
        } else {
            setCount(constructorIngredients.filter(x => x._id === id).length)
        }
    }, [constructorIngredients, currentBun])

    const inIngredientsView = (
        <section style={{opacity : isDragging ? '0.5' : '1'}} className={`${styles.ingredient_card} mt-6`} onClick={onClick} ref={dragRef}>
            {
                count > 0
                && (
                    <span className={`${styles.ingredient_count} text text_type_main-small`}>
                        {count}
                    </span>
                )
            }
            <img src={thumbnail} className="card__avatar ml-4 mr-4" />
            <div className={`${styles.card__price}  mt-1 mb-1`}>
                <span className="price text text_type_digits-default mr-1">{price}</span>
                <CurrencyIcon />
            </div>
            <div className={`${styles.card__title} text text_type_main-small text-center`}>{text}</div>
        </section>
    )

    const inConstructorView = (
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
                price={price}
                handleClose={deleteIngredient}
            />
        </div>
    )

    return (
        currentBoard === 'default' ? inIngredientsView : inConstructorView
    );
}


IngredientCard.propTypes = {
    id: PropTypes.string.isRequired,
    ingredientType : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    thumbnail : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
}

export default IngredientCard