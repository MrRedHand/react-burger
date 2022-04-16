import React from "react";
import PropTypes from 'prop-types';
import styles from './ingredient-card.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCard = (props) => {

    const countStyle = props.count > 0 ? 'visible' : 'hidden'

    return (
        <section className={`${styles.ingredient_card} mt-6`} onClick={props.onClick}>

            <span className={`${styles.ingredient_count} text text_type_main-small`} style={{visibility : countStyle}}>{props.count}</span>

            <img src={props.imglink} className="card__avatar ml-4 mr-4" />
            <div className={`${styles.card__price}  mt-1 mb-1`}>
                <span className="price text text_type_digits-default mr-1">{props.price}</span>
                <CurrencyIcon />
            </div>
            <div className={`${styles.card__title} text text_type_main-small text-center`}>{props.title}</div>
        </section>
    );
}


IngredientCard.propTypes = {
    props: PropTypes.shape({
        imglink: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        props: PropTypes.arrayOf.isRequired,
    })
}

export default IngredientCard