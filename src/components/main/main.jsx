import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import styles from "./main.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { ProductsContext } from "../../services/productsContext";



const Main = ({data}) => {

    const products = data;

    return (
        <main className={`${styles.main} wrap pb-20`}>
            <section>
            <ProductsContext.Provider value={products}>   
                <BurgerIngredients/> 
            </ProductsContext.Provider>     
            </section>
            <section>
            <ProductsContext.Provider value={products}>       
                <BurgerConstructor/>
            </ProductsContext.Provider>      
            </section>
        </main>
    )
}

Main.propTypes = {
    data : PropTypes.array.isRequired
}

export default Main