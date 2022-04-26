import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import styles from "./main.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { BurgerContext } from "../../services/burgerContext";



const Main = ({data}) => {

    const products = data;

    return (
        <main className={`${styles.main} wrap pb-20`}>
            <section>
            <BurgerContext.Provider value={products}>
                <BurgerIngredients/>
            </BurgerContext.Provider>    
            </section>
            <section>
                <BurgerConstructor data={data}/>
            </section>
        </main>
    )
}

Main.propTypes = {
    data : PropTypes.array.isRequired
}

export default Main