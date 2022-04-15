import React from "react";

export default function IngredientsTitle(props) {
    return (
        <>
            <h2 className="text text_type_main-medium mt-10 mb-6" data-anchor={props.anchor}>
                {props.children}
            </h2>
        </>
    )
}