import React from 'react'
import PropTypes from 'prop-types';
import st from './ingredient-details.module.css';

const IngredientDetails = (details) => {

    const headClass = `${st.text_center} text text_type_main-default text_color_inactive`
    const dataClass = `${st.text_center} text text_type_digits-default text_color_inactive`
    return (
        <>
            <img src={details.image_large} className={st.img}/>
            <p className={`${st.text_center} text text_type_main-medium mt-4 mb-8`}>{details.name}</p>
            <div className={`${st.grid}`}>
                <div>
                    <p className={headClass}>Калории,ккал</p>
                    <p className={dataClass}>{details.calories}</p>
                </div>
                    
                <div>
                    <p className={headClass}>Белки, г</p>
                    <p className={dataClass}>{details.proteins}</p>
                </div>

                <div>
                    <p className={headClass}>Жиры, г</p>
                    <p className={dataClass}>{details.fat}</p>
                </div>

                <div>
                    <p className={headClass}>Углеводы, г</p>
                    <p className={dataClass}>{details.carbohydrates}</p>
                </div>
            </div>
        </>
    )
}

IngredientDetails.propTypes = {
    details: PropTypes.array.isRequired
}


export default IngredientDetails