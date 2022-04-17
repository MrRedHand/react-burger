import React from "react";
import PropTypes from 'prop-types';

const IngredientsTitle = (props) => {
    return (
        <h2 className="text text_type_main-medium mt-10 mb-6">
            {props.children}
        </h2>
    )
}

IngredientsTitle.propTypes = {
    children : PropTypes.node.isRequired
}

export default IngredientsTitle