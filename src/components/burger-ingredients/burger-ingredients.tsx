import React, {useRef, useState} from "react";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import OverflowSection from "../overflow-section/overflow-section";
import styles from './burger-ingredients.module.css';
import IngredientCard from "../ingredient-card/ingredient-card";
import IngredientsTitle from "../ingredients-title/ingredients-title";
import IngredientsGrid from "../ingredients-grid/ingredients-grid";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {setIngredientInfo} from "../../services/actions/actions-creators";
import {useHistory, useLocation} from "react-router-dom";
import { TIngredient } from "../../utils/types";


const BurgerIngredients = () => {

    const location = useLocation()

    const history = useHistory()

    const dispatch = useDispatch();

    const one = useRef<HTMLDivElement>(null);
    const two = useRef<HTMLDivElement>(null);
    const three = useRef<HTMLDivElement>(null);
    const scrollPane = useRef<HTMLDivElement>(null);

    const {allIngredients,viewIngredient} = useSelector<any>(state => state.main) as any

    const showModal = (element  : TIngredient) => {
        dispatch(setIngredientInfo(element))
        history.push(`/ingredients/${element._id}`, {background : location})
    }

    let [current, setCurrent] = useState('one')

    function scrollTo(where : string) {
        setCurrent(
            current = where,
        )
    }


    function updateScrollPosition() {
        if (scrollPane && scrollPane.current && one.current && two.current && three.current) {
            let scrollPaneOffset = scrollPane.current.getBoundingClientRect();
            let oneOffset = one.current.getBoundingClientRect();
            let twoOffset = two.current.getBoundingClientRect();
            let threeOffset = three.current.getBoundingClientRect();

            const scrollPosition = scrollPaneOffset.top + window.scrollY - scrollPane.current.offsetTop
            const onePosition = oneOffset.top + window.scrollY - scrollPane.current.offsetTop
            const twoPosition = twoOffset.top + window.scrollY - scrollPane.current.offsetTop
            const threePosition = threeOffset.top + window.scrollY - scrollPane.current.offsetTop

            if (onePosition > -20 && onePosition < 20) {
                scrollTo('one')
            } else if (twoPosition > -20 && twoPosition < 20) {
                scrollTo('two')
            } else if (threePosition  > -20 && threePosition < 20) {
                scrollTo('three')
            }
        }
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
            <div >
            <OverflowSection height={450} onScroll={() => updateScrollPosition()}>

                <div className="pr-2" ref={scrollPane}>

                <div ref={one}>
                    <IngredientsTitle>Булки</IngredientsTitle>

                <IngredientsGrid className={styles.ingredients__grid}>
                    {
                        allIngredients.map((elem : TIngredient) => {
                            if (elem.type === 'bun') {
                                return ( <IngredientCard
                                            price={elem.price}
                                            board={'default'}
                                            thumbnail={elem.image}
                                            text={elem.name}
                                            key={elem._id}
                                            id={elem._id}
                                            ingredientType={elem.type}
                                            onClick={() => showModal(elem)}
                                            />
                                )  
                            }
                        })
                    }
                </IngredientsGrid>
                </div>

                <div ref={two}>
                    <IngredientsTitle>Соусы</IngredientsTitle>

                <IngredientsGrid className={styles.ingredients__grid}>
                    {
                        allIngredients.map((elem : TIngredient) => {
                            if (elem.type === 'sauce') {
                                return ( <IngredientCard
                                        board={'default'}
                                        thumbnail={elem.image}
                                        text={elem.name}
                                        key={elem._id}
                                        id={elem._id}
                                        onClick={() => showModal(elem)}
                                    />
                                )   
                            }
                        })
                    }
                </IngredientsGrid>
                </div>

                <div ref={three}>
                    <IngredientsTitle>Начинки</IngredientsTitle>

                <IngredientsGrid className={styles.ingredients__grid}>
                    {
                        allIngredients.map((elem : TIngredient) => {
                            if (elem.type === 'main') {
                                return ( <IngredientCard
                                        board={'default'}
                                        thumbnail={elem.image}
                                        text={elem.name}
                                        key={elem._id}
                                        id={elem._id}
                                        onClick={() => showModal(elem)}
                                    />
                                )  
                            }
                        })
                    }
                </IngredientsGrid>
                </div>

                </div>
            </OverflowSection>
            </div>

        </section>

        
        </>
    )
}


export default BurgerIngredients