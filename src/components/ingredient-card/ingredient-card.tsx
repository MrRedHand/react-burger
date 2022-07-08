import React, {useEffect, useState, useRef, FC} from "react";
import styles from './ingredient-card.module.css';
import {ConstructorElement, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDrag, useDrop} from "react-dnd";
import {useDispatch, useSelector} from "../../hooks/redux-hooks";
import {removeIngredient} from "../../services/actions/actions-creators";
import {TIngredient , TIngredientCard} from "../../utils/types";

const IngredientCard : FC<TIngredientCard> = ({id, ingredientType,  text, thumbnail, type, isLocked, price, board, onClick, moveCard, index}) => {

    const dispatch = useDispatch()

    const [count, setCount] = useState<number>(0)

    const currentBoard = board;

    const {constructorIngredients, currentBun} = useSelector(state => state.main)

    const ref = useRef<HTMLDivElement>(null)

    const [{ ingrDragging}, dragIngr] = useDrag({
        type: 'ingredient',
        item: { id },
        collect: monitor => ({
            ingrDragging: monitor.isDragging(),
        }),
    });





    const [, drop] = useDrop({
        accept : 'ingredient-in-constructor',
        hover(item : any, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex : number | undefined = item.index
            const hoverIndex : number | undefined = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect : {bottom : number, top : number} = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset : { x : number, y : number} | null = monitor.getClientOffset()
            const hoverClientY = clientOffset !== null && clientOffset.y - hoverBoundingRect.top

            if (dragIndex !== undefined && hoverIndex !== undefined) {
                if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                    return
                }

                if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                    return
                }

                moveCard && moveCard(dragIndex, hoverIndex)
            }

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
        (index !== undefined) && dispatch(removeIngredient(index))
    }

    useEffect(() => {
        if (ingredientType === 'bun') {
            (currentBun !== null && currentBun._id === id)
            ? setCount(2)
            : setCount(0)
        } else {
            setCount(constructorIngredients.filter((ingredient  : TIngredient)=> ingredient._id === id).length)
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
                <CurrencyIcon type="primary"/>
            </div>
            <div className={`${styles.card__title} text text_type_main-small text-center`}>{text}</div>
        </section>
    )

    const opacity = isDragging ? 0 : 1

    const inConstructorView = (
        <div className={`${styles.constructor_elem_wrap} pl-8 mb-4 mr-4`} style={{opacity : opacity}} ref={ref}>
            {
                isLocked === false
                && <div className={styles.drag_icon}> <DragIcon type="primary" /> </div>
            }
            <ConstructorElement
                text={text ? text : ''}
                type={type}
                thumbnail={thumbnail ? thumbnail : ''}
                isLocked={isLocked}
                price={price ? price : 0}
                handleClose={deleteIngredient}
            />
        </div>
    )

    return (
        currentBoard === 'default' ? inIngredientsView : inConstructorView
    );
}



export default IngredientCard