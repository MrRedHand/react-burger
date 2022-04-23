import React from 'react'
import PropTypes from 'prop-types';
import st from './ingredient-details.module.css';

const IngredientDetails = (props) => {


    const headClass = `${st.text_center} text text_type_main-default text_color_inactive`
    const dataClass = `${st.text_center} text text_type_digits-default text_color_inactive`
    return (
        <>
            <img src={props.image_large} className={st.img}/>
            <p className={`${st.text_center} text text_type_main-medium mt-4 mb-8`}>{props.name}</p>
            <div className={`${st.grid}`}>
                <div>
                    <p className={headClass}>Калории,ккал</p>
                    <p className={dataClass}>{props.calories}</p>
                </div>
                    
                <div>
                    <p className={headClass}>Белки, г</p>
                    <p className={dataClass}>{props.proteins}</p>
                </div>

                <div>
                    <p className={headClass}>Жиры, г</p>
                    <p className={dataClass}>{props.fat}</p>
                </div>

                <div>
                    <p className={headClass}>Углеводы, г</p>
                    <p className={dataClass}>{props.carbohydrates}</p>
                </div>
            </div>
        </>
    )
}

IngredientDetails.propTypes = {
    image_large : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    calories : PropTypes.number.isRequired,
    proteins : PropTypes.number.isRequired,
    fat : PropTypes.number.isRequired,
    carbohydrates : PropTypes.number.isRequired,
}


export default IngredientDetails