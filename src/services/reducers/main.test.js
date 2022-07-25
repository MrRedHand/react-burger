import {initialState, mainReducer} from "./main";
import {addIngredientToConstructor} from "../actions/actions-creators";
import {TMainActions} from "../actions/action-types";

describe('MainReducer', () => {
    it('Установка initialState', () => {
        const result = mainReducer(undefined, {})
        expect(result).toEqual(initialState)
    })
    it('Добавление ингредиента', () => {
        const state = mainReducer(undefined, {})
        const action = addIngredientToConstructor({
            name : 'name',
            type : "bun"
        })
        const result = mainReducer(state, action)
        // expect(result).toEqual({
        //     ...initialState,
        //     ingredients: dataIngredients,
        // });
    })
})
