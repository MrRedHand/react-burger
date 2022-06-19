import {ReactNode} from "react";
import IngredientCard from "../components/ingredient-card/ingredient-card";

export type TModal = {
    activity? : boolean;
    children? : ReactNode;
    heading? : string;
    onCloseEvent? : () => void;
}

export type TModalState = {
    active : boolean,
    content : ReactNode
}

export type TIngredient = {
    _id : string;
    name : string;
    uuid? : string;
    type? : string;
    price? : number;
    image? : string;
}

export type TIngredientCard = {
    id? : string;
    ingredientType? : string;
    text? : string;
    thumbnail? : string;
    type? : "top" | "bottom" | undefined;
    isLocked? : boolean;
    price? : number;
    board? : "default" | undefined;
    onClick? : () => void;
    moveCard? : (dragIndex : number, hoverIndex : number) => void;
    index? : number;
    [x:string]: any;
}

export type TOverflowSection = {
    height : number;
    children? : ReactNode;
    className? :  string;
    onScroll? : () => void;
}

export type TIngredientsGrid = {
    className? : string;
    children? : ReactNode;
}

export type TIngredientsTitle = {
    children? : ReactNode;
}

export type TLinkToLoginForm = {
    login : () => void
}

export type TForgotForm = {

} & TLinkToLoginForm

export type TRegisterFrom = {

} & TLinkToLoginForm

export type TLoginForm = {
    register : () => void;
    forgot : () => void;
}


export type TResetFrom = {

}  & TLinkToLoginForm

export type TRegisterFormState = {
    email : string;
    password : string;
    name : string;
}

export type TResetFormState = {
    password : string;
    token : string;
}
