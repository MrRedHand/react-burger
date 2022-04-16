import React, { state, useState, useEffect, useRef } from "react";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import OverflowSection from "../overflow-section/overflow-section";
import styles from './ingredients.module.css';
import IngredientCard from "../ingredient-card/ingredient-card";
import IngredientsTitle from "../ingredients-title/ingredients-title";
import IngredientsGrid from "../ingredients-grid/ingredients-grid";


const Ingredients = (props) => {

    const [current, setCurrent] = useState('one')

    return(
        <>
        <section style={{height : '196px', position: 'relative'}}>
            <section style={{position: 'absolute', bottom : '0'}}>
            <h1 className={`${styles.heading} text text_type_main-large mb-5`}>Соберите бургер</h1>
            <div style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            </section>
        </section>

        <section className={`${styles.ingredients}`}>
            <OverflowSection height={450}>

                <div style={{paddingRight : '20px'}}>

                <IngredientsTitle anchor={'one'}>Булки</IngredientsTitle>

                <IngredientsGrid className={styles.ingredients__grid}>
                    {
                        props.data.map(elem => {
                            if (elem.type === 'bun') {
                                return <IngredientCard 
                                        key={elem._id}
                                        imglink={elem.image}
                                        title={elem.name}
                                        price={elem.price}
                                        count={1}
                                        onClick={() => console.log('клик')}
                                    />;   
                            }
                        })
                    }
                </IngredientsGrid>

                <IngredientsTitle id='one' anchor={'two'}>Соусы</IngredientsTitle>

                <IngredientsGrid className={styles.ingredients__grid}>
                    {
                        props.data.map(elem => {
                            if (elem.type === 'sauce') {
                                return <IngredientCard 
                                        key={elem._id}
                                        imglink={elem.image}
                                        title={elem.name}
                                        price={elem.price}
                                    />;   
                            }
                        })
                    }
                </IngredientsGrid>


                <IngredientsTitle>Начинки</IngredientsTitle>

                <IngredientsGrid className={styles.ingredients__grid}>
                    {
                        props.data.map(elem => {
                            if (elem.type === 'main') {
                                return <IngredientCard 
                                        key={elem._id}
                                        imglink={elem.image}
                                        title={elem.name}
                                        price={elem.price}
                                    />;   
                            }
                        })
                    }
                </IngredientsGrid>

                </div>
            </OverflowSection>         
        </section>

        {/* <section className={styles.ingredient_popup}>
            <section className={`${styles.popup__body} p-10`}>
                <p className="text text_type_main-medium">Детали ингредиента</p>
                <img src={props.data[0].image_large} />
                <p className="text text_type_main-default">
                    {props.data[0].name}
                </p>
                <div className="info">
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">244,4</p>
                </div>
            </section>
        </section> */}
        </>
    )
}

export default Ingredients