import React from "react";
import OverflowSection from "../overflow-section/overflow-section";
import style from './constructor.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Constructor(props) {
    return (
        <>
        <div>   
            <OverflowSection height={600}>
                {
                    props.data.map((elem, index) => {
                       
                       let curType;

                       if (index === 0)
                            curType = 'top'
                        else if (index === props.data.length)   
                            curType = 'bottom' 
                        else  
                            curType = undefined    
                        
                       return <div key={elem._id}  className={`${style.constructor_elem_wrap} mb-4`}>
                                <div className="mr-3">
                                    <DragIcon />
                                </div>
                                <ConstructorElement 
                                    key={elem._id} 
                                    text={elem.name} 
                                    thumbnail={elem.image} 
                                    price={elem.price}
                                    type={curType}/>
                                    
                              </div>
                    })
                }
                
            </OverflowSection>
        </div>
        </>
    )
}