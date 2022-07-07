import {ReactNode} from "react";

export type TModal = {
    activity : boolean;
    children? : ReactNode;
    heading? : string;
    onCloseEvent? : () => void;
}

export type TModalHeader = {
    children? : ReactNode;
}

export type TModalOverlay = {
    onClick : () => void;
    activity : boolean;
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
    image_large?: string;
    image_mobile?: string;
    calories?: number;
    carbohydrates?: number;
    fat?: number;
    proteins?: number;
    __v?: number;
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

export type TRegisterFormFields = {} & TRegisterFormState

export type TForgotFormFields = {
    email : string;
}

export type TResetFormFields = {
    token : string;
}

export type TLoginFormFields = Omit<TRegisterFormState, "name">

export type TResetFormState = {
    password : string;
    token : string;
}

export type TProfileNav = {
    profile : () => void;
    ordersHistory : () => void;
    userExit : () => void;
}

export type TServerResponse = {
    [x : string] : any;
}

export type TServerRequestOptions = {
    headers : {
        'Content-Type' : 'application/json';
         authorization : string;
    }
}

export type TServerData = {
    accessToken? : string;
    refreshToken? : string;
}

