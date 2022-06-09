import React, {useEffect} from "react";
import styles from "./main.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useHistory, useLocation} from "react-router-dom";



const Main = () => {

    return (
        <main className={`${styles.main} wrap pb-20 mx-auto`}>
            <DndProvider backend={HTML5Backend}>
                <section>
                    <BurgerIngredients/>    
                </section>
                <section>
                    <BurgerConstructor/>
                </section>
            </DndProvider>
        </main>
    )
}

export default Main