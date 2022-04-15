import React from "react";
import cardStyle from './ingredientcard.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

export default function IngredientCard(props) {
    return (
        <>
            <section className="ingredient-card">
                <img src={props.imglink} className="card__avatar" />
                <div className="card__price">
                    <span className="price">{props.price}</span>
                    <CurrencyIcon />
                </div>
                <div className="card__title">{props.title}</div>
            </section>
        </>
    )
}