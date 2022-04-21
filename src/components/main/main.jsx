import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import styles from "./main.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const Main = (props) => {

    return (
        <main className={`${styles.main} wrap pb-20`}>
            <section>
                <BurgerIngredients data={props.data}/>
            </section>
            <section>
                <BurgerConstructor data={props.data}/>
            </section>
        </main>
    )
}

export default Main