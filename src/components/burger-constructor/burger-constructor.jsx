import React, {useEffect,useCallback} from "react";
import OverflowSection from "../overflow-section/overflow-section";
import styles from './burger-constructor.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../ingredient-card/ingredient-card";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {store} from "../../services/store";
import {addBunToConstructor} from "../../services/actions/add-bun-to-constructor";
import {addIngredientToConstructor} from "../../services/actions/add-ingredient-to-constructor";
import {resortIngredients} from "../../services/actions/resort-ingredients";
import {v4 as uuidv4} from "uuid";
import {refreshTotal} from "../../services/actions/refresh-total";

const BurgerConstructor = () => {

    const {constructorIngredients, currentBun, allIngredients, totalPrice} = useSelector(state => state.main)

    const [modalState, setModal] = React.useState({
        active : false,
        content: '',
    })


    const [{isHover},  drop] = useDrop({
        accept: 'ingredient',
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
        drop: (item) => {
            const itemToAdd = allIngredients.find(x => x._id === item.id)
            const clone = {...itemToAdd};
            clone.uuid = uuidv4()
            clone.type === 'bun'
            ? store.dispatch(addBunToConstructor(clone))
            : store.dispatch(addIngredientToConstructor(clone))
        },
    });


    useEffect(() => {

        let bunPrice = 0;

        currentBun !== null
        && (bunPrice += currentBun.price * 2)

        let ingredientsPrice = 0;

        constructorIngredients.length > 0
        && constructorIngredients.map(elem => {
            ingredientsPrice += elem.price
        })

        store.dispatch(refreshTotal(bunPrice + ingredientsPrice))

    }, [currentBun, constructorIngredients])


    const moveCard = (dragIndex, hoverIndex) => {
        const dragCard = constructorIngredients[dragIndex]
        const newCards = [...constructorIngredients]
        newCards.splice(dragIndex, 1)
        newCards.splice(hoverIndex, 0 , dragCard)

        store.dispatch(resortIngredients(newCards))
    }



    return (
        <>
        <section className="relative-filler">

        </section>
        <section className={styles.constructor_area}>
            <section className={`${styles.top_locked}`}>
                {
                    currentBun !== null
                    && <IngredientCard
                        key={currentBun.uuid}
                        id={currentBun._id}
                        type="top"
                        isLocked={true}
                        text={`${currentBun.name} (верх)`}
                        thumbnail={currentBun.image}
                        price={currentBun.price}
                        />
                }
            </section>
            <div ref={drop} className={isHover ? styles.drop_area__hover: styles.drop_area__nonhovered}>
            <OverflowSection height={420}>
                {
                    constructorIngredients
                        .map((elem, index) => {
                            return (<IngredientCard
                                    key={elem.uuid}
                                    isLocked={false}
                                    text={elem.name}
                                    thumbnail={elem.image}
                                    price={elem.price}
                                    index={index}
                                    moveCard={moveCard}
                                />
                            )
                        })
                }

            </OverflowSection>
            </div>

            <section className={`${styles.bottom_locked}`}>
                {
                    currentBun !== null
                    && <IngredientCard
                        key={currentBun.uuid}
                        id={currentBun._id}
                        type="bottom"
                        isLocked={true}
                        text={`${currentBun.name} (низ)`}
                        thumbnail={currentBun.image}
                        price={currentBun.price}
                    />
                }
            </section>
        </section>
        
        

        <section className={styles.total}>
            <div className={`${styles.total__price} mr-10`}>
                <p className="text text_type_digits-medium">
                    {totalPrice}
                </p>
                <CurrencyIcon />
            </div>
            <Button type="primary" size="large" onClick={() => {
                setModal({
                    active : true,
                    content : <OrderDetails />
                })
            }}>Оформить заказ</Button>
        </section>

        <Modal
            active={modalState.active}
            setActive={setModal}
            children={modalState.content}
            />
        </>
    )
}

BurgerConstructor.propTypes = {
}

export default BurgerConstructor


