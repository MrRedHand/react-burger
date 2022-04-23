import React, { state, useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { Tab, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OverflowSection from "../overflow-section/overflow-section";
import styles from './burger-ingredients.module.css';
import IngredientCard from "../ingredient-card/ingredient-card";
import IngredientsTitle from "../ingredients-title/ingredients-title";
import IngredientsGrid from "../ingredients-grid/ingredients-grid";
import Modal from "../modal/modal";
import IngredientDetails from "../app/ingredient-details/ingredient-details";


const BurgerIngredients = ({data}) => {

    const [modalState, setModal] = React.useState({
        active : false,
        content: '',
    })

    let [current, setCurrent] = useState('one')

    function scrollTo(where) {
        setCurrent(
            current = where,
        )
    }

    return(
        <>
        <section className="relative-filler">
            <section className={styles.absolute_header}>
                <h1 className={`${styles.heading} text text_type_main-large mb-5`}>Соберите бургер</h1>
                <div className="flex-block">
                    <Tab value="one" active={current === 'one'} onClick={() => scrollTo('one')}>
                        Булки
                    </Tab>
                    <Tab value="two" active={current === 'two'} onClick={() => scrollTo('two')}>
                        Соусы
                    </Tab>
                    <Tab value="three" active={current === 'three'} onClick={() => scrollTo('three')}>
                        Начинки
                    </Tab>
                </div>
            </section>
        </section>

        <section className={`${styles.ingredients}`}>
            <OverflowSection height={450}>

                <div className="pr-2">

                <IngredientsTitle>Булки</IngredientsTitle>

                <IngredientsGrid className={styles.ingredients__grid}>
                    {
                        data.map(elem => {
                            if (elem.type === 'bun') {
                                return ( <IngredientCard 
                                            key={elem._id} 
                                            {...elem} 
                                            onClick={() => {
                                                    setModal({
                                                        active : true,
                                                        content : <IngredientDetails {...elem}/>
                                                    })
                                                }}
                                            />
                                )  
                            }
                        })
                    }
                </IngredientsGrid>

                <IngredientsTitle>Соусы</IngredientsTitle>

                <IngredientsGrid className={styles.ingredients__grid}>
                    {
                        data.map(elem => {
                            if (elem.type === 'sauce') {
                                return ( <IngredientCard 
                                    key={elem._id} 
                                    {...elem} 
                                    onClick={() => {
                                            setModal({
                                                active : true,
                                                content : <IngredientDetails {...elem}/>
                                            })
                                        }}
                                    />
                                )   
                            }
                        })
                    }
                </IngredientsGrid>


                <IngredientsTitle>Начинки</IngredientsTitle>

                <IngredientsGrid className={styles.ingredients__grid}>
                    {
                        data.map(elem => {
                            if (elem.type === 'main') {
                                return ( <IngredientCard 
                                    key={elem._id} 
                                    {...elem} 
                                    onClick={() => {
                                            setModal({
                                                active : true,
                                                content : <IngredientDetails {...elem}/>
                                            })
                                        }}
                                    />
                                )  
                            }
                        })
                    }
                </IngredientsGrid>

                </div>
            </OverflowSection>  

            <Modal 
            active={modalState.active} 
            setActive={setModal} 
            heading={'Детали ингредиента'} 
            children={modalState.content}
            />  
        </section>

        
        </>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.array.isRequired
}

export default BurgerIngredients