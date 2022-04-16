import React, { state, useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import OverflowSection from "../overflow-section/overflow-section";
import styles from './burger-ingredients.module.css';
import IngredientCard from "../ingredient-card/ingredient-card";
import IngredientsTitle from "../ingredients-title/ingredients-title";
import IngredientsGrid from "../ingredients-grid/ingredients-grid";


const BurgerIngredients = (props) => {

    let [current, setCurrent] = useState('one')

    function scrollTo(where) {
        setCurrent(
            current = where,
        )
    }

    const [popupInfo, setPopup] = React.useState({
        image : 'https://dummyimage.com/300',
        title : 'Placeholder',
        price : 99999,
        active: false,
    })

    const showPopup = (newImage, newTitle, newPrice) => {
        
        setPopup({
            image : newImage,
            title : newTitle,
            price : newPrice,
            active : true,
        })

        console.log(popupInfo)
    }

    function closePopup() {
        setPopup(
            popupInfo.active = false,
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
                        props.data.map(elem => {
                            if (elem.type === 'bun') {
                                return ( <IngredientCard 
                                            key={elem._id}
                                            imglink={elem.image}
                                            title={elem.name}
                                            price={elem.price}
                                            count={1}
                                            onClick={() => showPopup(elem.image, elem.name, elem.price)}
                                        /> 
                                )  
                            }
                        })
                    }
                </IngredientsGrid>

                <IngredientsTitle>Соусы</IngredientsTitle>

                <IngredientsGrid className={styles.ingredients__grid}>
                    {
                        props.data.map(elem => {
                            if (elem.type === 'sauce') {
                                return ( <IngredientCard 
                                            key={elem._id}
                                            imglink={elem.image}
                                            title={elem.name}
                                            price={elem.price}
                                            onClick={() => showPopup(elem.image, elem.name, elem.price)}
                                            />
                                )  
                            }
                        })
                    }
                </IngredientsGrid>


                <IngredientsTitle>Начинки</IngredientsTitle>

                <IngredientsGrid className={styles.ingredients__grid}>
                    {
                        props.data.map(elem => {
                            if (elem.type === 'main') {
                                return ( <IngredientCard 
                                            key={elem._id}
                                            imglink={elem.image}
                                            title={elem.name}
                                            price={elem.price}
                                            onClick={() => showPopup(elem.image, elem.name, elem.price)}
                                        /> 
                                )  
                            }
                        })
                    }
                </IngredientsGrid>

                </div>
            </OverflowSection>         
        </section>

        <section className={`${styles.ingredient_popup} ${popupInfo.active === true ? 'show' : 'hide'}`}>
            <section className={`${styles.popup__body} p-10`}>
                <p className="text text_type_main-medium">Детали ингредиента</p>
                <button onClick={() => {closePopup()}}></button>
                <img src={popupInfo.image} />
                <p className="text text_type_main-default">
                    {popupInfo.title}
                </p>
                <div className="info">
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">244,4</p>
                </div>

                
            </section>
        </section>
        </>
    )
}

BurgerIngredients.propTypes = {
    props: PropTypes.shape({
        imglink: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        props: PropTypes.arrayOf.isRequired,
    })
}

export default BurgerIngredients