import React from "react";
import PropTypes from 'prop-types';
import styles from "./main.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const Main = (props) => {

    console.log(props)
    return (
        <main className={`${styles.main} wrap pb-20`}>
            <section style={{height : '912px'}}>
                <BurgerIngredients data={props.data}/>
            </section>
            <section style={{height : '912px'}}>
                <BurgerConstructor data={props.data}/>
            </section>
        </main>
    )
}


export default Main