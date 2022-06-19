import React, {FC} from "react";
import { TIngredientsGrid} from "../../utils/types";

const IngredientsGrid : FC<TIngredientsGrid> = ({className, children}) => {
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default IngredientsGrid