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

    const viewIngredient = allIngredients.filter((ingredient : TIngredient) => ingredient._id === params.id)

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
                            <img src={viewIngredient[0].image_large} className={st.img}/>
                            <p className={`${st.text_center} text text_type_main-medium mt-4 mb-8`}>{viewIngredient[0].name}</p>
                            <div className={`${st.grid}`}>
                                <div>
                                    <p className={headClass}>Калории,ккал</p>
                                    <p className={dataClass}>{viewIngredient[0].calories}</p>
                                </div>

                                <div>
                                    <p className={headClass}>Белки, г</p>
                                    <p className={dataClass}>{viewIngredient[0].proteins}</p>
                                </div>

                                <div>
                                    <p className={headClass}>Жиры, г</p>
                                    <p className={dataClass}>{viewIngredient[0].fat}</p>
                                </div>

                                <div>
                                    <p className={headClass}>Углеводы, г</p>
                                    <p className={dataClass}>{viewIngredient[0].carbohydrates}</p>
                                </div>
                            </div>
                        </section>
                )
            }

        </>
    )
}



export default IngredientDetails