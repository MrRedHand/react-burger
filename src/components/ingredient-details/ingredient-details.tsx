import React, {useEffect} from 'react'
import st from './ingredient-details.module.css';
import {useDispatch, useSelector} from "../../hooks/redux-hooks";
import {useParams} from "react-router-dom";
import {getFullData} from "../../services/to-server-requests";
import { TIngredient } from "../../utils/types";

const IngredientDetails = () => {

    const dispatch = useDispatch();

    const params = useParams<{id : string}>()

    const {allIngredients, fullDataRecieved} = useSelector(state => state.main)

    const viewIngredient = allIngredients.find(ingredient => { return ingredient._id === params.id})

    console.log('viewIngredient', viewIngredient)


    useEffect(() => {
        !fullDataRecieved && dispatch(getFullData())
    }, [])

    const headClass = `${st.text_center} text text_type_main-default text_color_inactive`
    const dataClass = `${st.text_center} text text_type_digits-default text_color_inactive`
    return (
        <>
            {
                viewIngredient !== null
                && fullDataRecieved
                && (
                        <section className={st.ingredient_wrap}>
                            <img src={viewIngredient?.image_large} className={st.img}/>
                            <p className={`${st.text_center} text text_type_main-medium mt-4 mb-8`}>{viewIngredient?.name}</p>
                            <div className={`${st.grid}`}>
                                <div>
                                    <p className={headClass}>Калории,ккал</p>
                                    <p className={dataClass}>{viewIngredient?.calories}</p>
                                </div>

                                <div>
                                    <p className={headClass}>Белки, г</p>
                                    <p className={dataClass}>{viewIngredient?.proteins}</p>
                                </div>

                                <div>
                                    <p className={headClass}>Жиры, г</p>
                                    <p className={dataClass}>{viewIngredient?.fat}</p>
                                </div>

                                <div>
                                    <p className={headClass}>Углеводы, г</p>
                                    <p className={dataClass}>{viewIngredient?.carbohydrates}</p>
                                </div>
                            </div>
                        </section>
                )
            }

        </>
    )
}



export default IngredientDetails