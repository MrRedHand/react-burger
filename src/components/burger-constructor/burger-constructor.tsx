import React, {useEffect,useCallback} from "react";
import OverflowSection from "../overflow-section/overflow-section";
import styles from './burger-constructor.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../ingredient-card/ingredient-card";
import OrderDetails from "../order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {addBunToConstructor, addIngredientToConstructor, resortIngredients, refreshTotal} from "../../services/actions/actions-creators";
import {v4 as uuidv4} from "uuid";
import {Redirect, useHistory, useLocation} from "react-router-dom";
import {TIngredient, TModalState} from "../../utils/types";

const BurgerConstructor = () => {

    const location = useLocation()

    const dispatch = useDispatch();

    const history = useHistory();

    const {constructorIngredients, currentBun, allIngredients, totalPrice} = useSelector<any>(state => state.main) as any
    const { isAuthenticated } = useSelector<any>(state => state.user) as any

    const asdad = false

    const [modalState, setModal] = React.useState<TModalState>({
        active : false,
        content: '',
    })


    const [{isHover},  drop] = useDrop({
        accept: 'ingredient',
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
        drop: (item : {id : string}) => {
            const itemToAdd = allIngredients.find((ingredient : TIngredient) => ingredient._id === item.id)
            const clone = {...itemToAdd};
            clone.uuid = uuidv4()
            clone.type === 'bun'
            ? dispatch(addBunToConstructor(clone))
            : dispatch(addIngredientToConstructor(clone))
        },
    });


    useEffect(() => {

        let bunPrice = 0;

        currentBun !== null
        && (bunPrice += currentBun.price * 2)

        let ingredientsPrice = 0;

        constructorIngredients.length > 0
        && constructorIngredients.map((elem : TIngredient) => {
            elem.price && (ingredientsPrice += elem.price)
        })

        dispatch(refreshTotal(bunPrice + ingredientsPrice))

    }, [currentBun, constructorIngredients])


    const moveCard = (dragIndex : number, hoverIndex : number) => {
        const dragCard = constructorIngredients[dragIndex]
        const newCards = [...constructorIngredients]
        newCards.splice(dragIndex, 1)
        newCards.splice(hoverIndex, 0 , dragCard)

        dispatch(resortIngredients(newCards))
    }


    const redirectToLogin = useCallback(
        () => {
            history.replace({ pathname: '/login' });
        },
        [history]
    );

    const showModal = () => {
        setModal({
            active : true,
            content : <OrderDetails />
        })

        history.push('/order-details', {background: location})
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
                        .map((elem : TIngredient, index : number) => {
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
                <CurrencyIcon type="primary"/>
            </div>
            <Button type="primary" size="large"
                    onClick={
                () => {
                    isAuthenticated
                    ? showModal()
                    : redirectToLogin()
            }}>Оформить заказ</Button>
        </section>

        </>
    )
}


export default BurgerConstructor


