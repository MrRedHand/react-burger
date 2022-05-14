import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import styles from './ingredient-card.module.css';
import {ConstructorElement, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDrag, useDrop} from "react-dnd";
import {useSelector} from "react-redux";
import {store} from "../../services/store";
import {removeIngredient} from "../../services/actions/remove-ingredient";

const IngredientCard = ({id, ingredientType,  text, thumbnail, type, isLocked, price, board, onClick, moveCard, index}) => {

    const [count, setCount] = useState(0)

    const currentBoard = board;

    const {constructorIngredients, currentBun} = useSelector(state => state.main)

    const ref = useRef(null)

    const [{ ingrDragging}, dragIngr] = useDrag({
        type: 'ingredient',
        item: { id },
        collect: monitor => ({
            ingrDragging: monitor.isDragging(),
        }),
    });





    const [, drop] = useDrop({
        accept : 'ingredient-in-constructor',
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'ingredient-in-constructor',
        item: () => {
            return { id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    drag(drop(ref))


    const deleteIngredient = () => {
       store.dispatch(removeIngredient(index))
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
        <section style={{opacity : ingrDragging ? '0.5' : '1'}} className={`${styles.ingredient_card} mt-6`} onClick={onClick} ref={dragIngr}>
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

    const opacity = isDragging ? 0 : 1

    const inConstructorView = (
        <div className={`${styles.constructor_elem_wrap} pl-8 mb-4 mr-4`} style={{opacity : opacity}} ref={ref}>
            {
                isLocked === false
                && <div className={styles.drag_icon}> <DragIcon /> </div>
            }
            <ConstructorElement
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
    id: PropTypes.string,
    ingredientType: PropTypes.string,
    text: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    price : PropTypes.number.isRequired,
    board : PropTypes.string,
    onClick: PropTypes.func,
    moveCard : PropTypes.func,
    index : PropTypes.number
}

export default IngredientCard