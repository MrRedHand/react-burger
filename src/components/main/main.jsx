import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import styles from "./main.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const Main = ({data}) => {

    return (
        <main className={`${styles.main} wrap pb-20`}>
            <section>
                <BurgerIngredients data={data}/>
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