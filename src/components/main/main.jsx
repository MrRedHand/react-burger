import React from "react";
import PropTypes from 'prop-types';
import styles from "./main.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { ProductsContext } from "../../services/productsContext";



const Main = ({data}) => {

    const products = data;

    return (
        <main className={`${styles.main} wrap pb-20`}>
            <ProductsContext.Provider value={products}> 
                <section>
                    <BurgerIngredients/>    
                </section>
                <section>     
                    <BurgerConstructor/>
                </section>
            </ProductsContext.Provider> 
        </main>
    )
}

Main.propTypes = {
    data : PropTypes.array.isRequired
}

export default Main