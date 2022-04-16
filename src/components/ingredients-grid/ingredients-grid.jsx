import React from "react";

export default function IngredientsGrid(props) {
    return(
        <div className={props.className}>
            {props.children}
        </div>
    )
}