import React from "react";
import styles from "./main.module.css";
import Ingredients from "../ingredients/ingredients";
import Constructor from "../constructor/constructor";

export default function Main(props) {

    console.log(props)
    return (
        <>
            <main className={`${styles.main} wrap pb-20`}>
                <section style={{height : '912px'}}>
                    <Ingredients data={props.data}/>
                </section>
                <section style={{height : '912px'}}>
                    <Constructor data={props.data}/>
                </section>
            </main>
        </>
    )
}