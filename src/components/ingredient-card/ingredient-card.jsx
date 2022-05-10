import React from "react";
import PropTypes from 'prop-types';
import styles from './ingredient-card.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDrag} from "react-dnd";
import {ItemTypes} from "../../utils/item-types";
import {useSelector} from "react-redux";

const IngredientCard = (props) => {

    const {constructorIngredients} = useSelector(state => state.main)

    let count = 0;

    const id = props._id

    const [{ isDragging }, dragRef] = useDrag({
        type: 'ingredient',
        item: { id },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    return (
        <section style={{opacity : isDragging ? '0.5' : '1'}} className={`${styles.ingredient_card} mt-6`} onClick={props.onClick} ref={dragRef}>
            {
                count > 0
                && (
                    <span className={`${styles.ingredient_count} text text_type_main-small`}>
                        {props.count}
                    </span>
                )
            }
            <img src={props.image} className="card__avatar ml-4 mr-4" />
            <div className={`${styles.card__price}  mt-1 mb-1`}>
                <span className="price text text_type_digits-default mr-1">{props.price}</span>
                <CurrencyIcon />
            </div>
            <div className={`${styles.card__title} text text_type_main-small text-center`}>{props.name}</div>
        </section>
    );
}


IngredientCard.propTypes = {
    // image: PropTypes.string.isRequired,
    // price: PropTypes.number.isRequired,
    // name: PropTypes.string.isRequired,
    // onClick : PropTypes.func.isRequired,
    // count : PropTypes.number.isRequired,
}

export default IngredientCard