import React from 'react'
import st from './ingredient-details.module.css';
import {useSelector} from "react-redux";

const IngredientDetails = () => {

    const {viewIngredient} = useSelector(state => state.main)

    const headClass = `${st.text_center} text text_type_main-default text_color_inactive`
    const dataClass = `${st.text_center} text text_type_digits-default text_color_inactive`
    return (
        <>
            {
                viewIngredient !== null
                && (
                    <>
                        <img src={viewIngredient.image_large} className={st.img}/>
                        <p className={`${st.text_center} text text_type_main-medium mt-4 mb-8`}>{viewIngredient.name}</p>
                        <div className={`${st.grid}`}>
                            <div>
                                <p className={headClass}>Калории,ккал</p>
                                <p className={dataClass}>{viewIngredient.calories}</p>
                            </div>

                            <div>
                                <p className={headClass}>Белки, г</p>
                                <p className={dataClass}>{viewIngredient.proteins}</p>
                            </div>

                            <div>
                                <p className={headClass}>Жиры, г</p>
                                <p className={dataClass}>{viewIngredient.fat}</p>
                            </div>

                            <div>
                                <p className={headClass}>Углеводы, г</p>
                                <p className={dataClass}>{viewIngredient.carbohydrates}</p>
                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}



export default IngredientDetails