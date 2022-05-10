import React, {useContext, useEffect} from "react";
import OverflowSection from "../overflow-section/overflow-section";
import styles from './burger-constructor.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorIngredient from "../constructor-ingredient/constructor-ingredient";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {
    ADD_BUN_TO_CONSTRUCTOR,
    ADD_INGREDIENT_TO_CONSTRUCTOR,
    REFRESH_TOTAL,
    REMOVE_INGREDIENT
} from "../../services/actions/main";



const BurgerConstructor = ({children, onDropHandler}) => {

    const dispatch = useDispatch()

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
            itemToAdd.type === 'bun'
            ? dispatch({type : ADD_BUN_TO_CONSTRUCTOR, payload : itemToAdd})
            : dispatch({type : ADD_INGREDIENT_TO_CONSTRUCTOR, payload : itemToAdd})
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

        dispatch({type : REFRESH_TOTAL, payload : (bunPrice + ingredientsPrice)})

    }, [currentBun, constructorIngredients])


    return (
        <>
        <section className="relative-filler">

        </section>
        <section className={styles.constructor_area}>
            <section className={`${styles.top_locked}`}>
                {
                    currentBun !== null
                    && <ConstructorIngredient
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
                        .map(elem => {
                            return (<ConstructorIngredient
                                    key={elem._id + Math.random()}
                                    id={elem._id}
                                    isLocked={false}
                                    text={elem.name}
                                    thumbnail={elem.image}
                                    price={elem.price}
                                />
                            )
                        })
                }

            </OverflowSection>
            </div>

            <section className={`${styles.bottom_locked}`}>
                {
                    currentBun !== null
                    && <ConstructorIngredient
                        id={currentBun._id}
                        type="bottom"
                        isLocked={true}
                        text={`${currentBun.name} (низ)`}
                        thumbnail={currentBun.image}
                        price={currentBun.price}
                        {...currentBun}
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
    //data: PropTypes.array.isRequired
}

export default BurgerConstructor


