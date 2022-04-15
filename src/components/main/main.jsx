import React from "react";
import mainStyles from "./main.module.css";
import Ingredients from "../ingredients/ingredients";
import Constructor from "../constructor/constructor";

export default function Main(props) {

    console.log(props)
    return (
        <>
            <main className={`${mainStyles.main} wrap`}>
                <section>
                    <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
                    <Ingredients data={props.data}/>
                </section>
                <section></section>
                <section>
                    <Constructor />
                </section>
            </main>
        </>
    )
}