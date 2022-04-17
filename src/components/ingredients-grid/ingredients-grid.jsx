import React from "react";
import PropTypes from 'prop-types';

const IngredientsGrid = (props) => {
    return(
        <div className={props.className}>
            {props.children}
        </div>
    )
}


IngredientsGrid.propTypes = {
  children : PropTypes.node.isRequired
}

export default IngredientsGrid