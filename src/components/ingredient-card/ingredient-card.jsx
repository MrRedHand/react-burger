import React from "react";
import PropTypes from 'prop-types';
import styles from './ingredient-card.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCard = (cardData) => {

    const countStyle = cardData.count > 0 ? 'visible' : 'hidden'

    return (
        <section className={`${styles.ingredient_card} mt-6`} onClick={cardData.onClick}>

            <span className={`${styles.ingredient_count} text text_type_main-small`} style={{visibility : countStyle}}>{cardData.count}</span>

            <img src={cardData.image} className="card__avatar ml-4 mr-4" />
            <div className={`${styles.card__price}  mt-1 mb-1`}>
                <span className="price text text_type_digits-default mr-1">{cardData.price}</span>
                <CurrencyIcon />
            </div>
            <div className={`${styles.card__title} text text_type_main-small text-center`}>{cardData.name}</div>
        </section>
    );
}


IngredientCard.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}

export default IngredientCard