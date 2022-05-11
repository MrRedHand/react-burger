import React, {createRef, useEffect, useRef, useState} from "react";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import OverflowSection from "../overflow-section/overflow-section";
import styles from './burger-ingredients.module.css';
import IngredientCard from "../ingredient-card/ingredient-card";
import IngredientsTitle from "../ingredients-title/ingredients-title";
import IngredientsGrid from "../ingredients-grid/ingredients-grid";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {SET_INGREDIENT_INFO} from "../../services/actions/main";


const BurgerIngredients = () => {

    const one = useRef();
    const two = useRef();
    const three = useRef();
    const scrollPane = useRef();

    const {allIngredients,viewIngredient} = useSelector(state => state.main)

    const dispatch = useDispatch();

    const [modalState, setModal] = React.useState({
        active : false,
        content: '',
    })

    const showModal = (props) => {
        dispatch({type : SET_INGREDIENT_INFO, payload: props})
        setModal({
            active : true,
            content : <IngredientDetails {...props}/>
        })
    }

    let [current, setCurrent] = useState('one')

    function scrollTo(where) {
        setCurrent(
            current = where,
        )
    }
    //
    // useEffect(() => {
    //
    //     if (scroller && scroller.current) {
    //         scroller.current.addEventListener("scroll",e => updateScrollPosition(e));
    //         return function cleanup() {
    //             scroller.current.removeEventListener("scroll", e => updateScrollPosition(e));
    //         };
    //     }
    // }, [])


    function updateScrollPosition() {
        if (scrollPane && scrollPane.current) {
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
            <OverflowSection height={450} onScroll={e => updateScrollPosition()}>

                <div className="pr-2" ref={scrollPane}>

                <div ref={one}>
                    <IngredientsTitle>Булки</IngredientsTitle>

                <IngredientsGrid className={styles.ingredients__grid}>
                    {
                        allIngredients.map(elem => {
                            if (elem.type === 'bun') {
                                return ( <IngredientCard
                                            board={'default'}
                                            thumbnail={elem.image}
                                            text={elem.name}
                                            key={elem._id}
                                            id={elem._id}
                                            ingredientType={elem.type}
                                            {...elem}
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
                        allIngredients.map(elem => {
                            if (elem.type === 'sauce') {
                                return ( <IngredientCard
                                        board={'default'}
                                        thumbnail={elem.image}
                                        text={elem.name}
                                        key={elem._id}
                                        id={elem._id}
                                        {...elem}
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
                        allIngredients.map(elem => {
                            if (elem.type === 'main') {
                                return ( <IngredientCard
                                        board={'default'}
                                        thumbnail={elem.image}
                                        text={elem.name}
                                        key={elem._id}
                                        id={elem._id}
                                        {...elem}
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


export default BurgerIngredients