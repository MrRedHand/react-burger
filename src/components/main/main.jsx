import React from "react";
import PropTypes from 'prop-types';
import styles from "./main.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";



const Main = () => {

    return (
        <main className={`${styles.main} wrap pb-20`}>
                <section>
                    <BurgerIngredients/>    
                </section>
                <section>     
                    <BurgerConstructor/>
                </section>
        </main>
    )
}

export default Main