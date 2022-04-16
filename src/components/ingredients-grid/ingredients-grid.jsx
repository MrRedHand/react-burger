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
  props: PropTypes.shape({
      imglink: PropTypes.string.isRequired
  })
}

export default IngredientsGrid