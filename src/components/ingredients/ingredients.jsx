import React, { useEffect } from "react";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import OverflowSection from "../overflow-section/overflow-section";
import styles from './ingredients.module.css';
import IngredientCard from "../ingredient-card/ingredient-card";
import IngredientsTitle from "../ingredients-title/ingredients-title";
import IngredientsGrid from "../ingredients-grid/ingredients-grid";

export default function Ingredients(props) {

    const [current, setCurrent] = React.useState('one')
    

    return(
        <>
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

        <section className={`${styles.ingredients}`}>
            <OverflowSection height={600}>

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


                <IngredientsTitle anchor={'two'}>Начинки</IngredientsTitle>

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
        </>
    )
}