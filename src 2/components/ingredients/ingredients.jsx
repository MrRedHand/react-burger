import React from "react";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './ingredients.module.css';
import IngredientCard from "../ingredientcard/ingredientcard";

export default function Ingredients(props) {

    console.log(props.data)

    const [current, setCurrent] = React.useState('one')

    return(
        <>
        <div style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>

        <div>   
            <SimpleBar style={{ maxHeight: 400 }}>

                {
                    props.data.map(elem => {
                        return <IngredientCard 
                                    key={elem.id}
                                    imglink={elem.image}
                                    title={elem.name}
                                    price={elem.price}
                                />;
                    })
                }
            </SimpleBar>
        </div>
        </>
    )
}