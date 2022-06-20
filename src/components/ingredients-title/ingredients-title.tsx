import React, {FC} from "react";
import { TIngredientsTitle } from "../../utils/types";

const IngredientsTitle : FC<TIngredientsTitle> = ({children}) => {
    return (
        <h2 className="text text_type_main-medium mt-10 mb-6">
            {children}
        </h2>
    )
}

export default IngredientsTitle