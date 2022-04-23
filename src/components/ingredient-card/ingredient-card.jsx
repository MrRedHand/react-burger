import React from "react";
import PropTypes from 'prop-types';
import styles from './ingredient-card.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCard = (props) => {

    const countStyle = props.count > 0 ? 'visible' : 'hidden'

    return (
        <section className={`${styles.ingredient_card} mt-6`} onClick={props.onClick}>

            <span className={`${styles.ingredient_count} text text_type_main-small`} style={{visibility : countStyle}}>
                {props.count}
            </span>

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
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired,
    count : PropTypes.number.isRequired,
}

export default IngredientCard