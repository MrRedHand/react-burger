import {initialState, mainReducer} from "./main";
import {
    addBunToConstructor,
    addIngredientToConstructor,
    refreshTotal, removeIngredient,
    resortIngredients
} from "../actions/actions-creators";
import {testBun, testIngredient, testIngredient2, testIngredientsArray} from "./mocks/ingredients";

describe('MainReducer', () => {
    it('Установка initialState', () => {
        const result = mainReducer(undefined, {})
        expect(result).toEqual(initialState)
    })

    it('Добавление булки в конструктор', () => {
        const result = mainReducer(
            initialState,
            addBunToConstructor(testBun)
        );

        expect(result).toEqual({
            ...initialState,
            currentBun : testBun
        });
    });

    it('Добавление ингредиента в конструктор', () => {
        const result = mainReducer(
            initialState,
            addIngredientToConstructor(testIngredient)
        );

        expect(result).toEqual({
            ...initialState,
            constructorIngredients : [{ ...testIngredient}],
        });
    });

    it('Удаление ингредиента из конструктора', () => {
        const indexToRemove = 2;
        const newInitialState = {
            ...initialState,
            constructorIngredients : testIngredientsArray
        }
        const result = mainReducer(newInitialState, removeIngredient(indexToRemove));
        expect(result).toEqual({
            ...initialState,
            constructorIngredients : [...testIngredientsArray.filter((value, index) => {return index !== indexToRemove})]
        });
    });



    it('Сортировка ингредиентов в конструкторе', () => {
        const result = mainReducer(
            initialState, resortIngredients(testIngredientsArray)
        );
        expect(result).toEqual({
            ...initialState,
            constructorIngredients : testIngredientsArray
        });
    });

    it('Проверка на добавление цены', () => {
        const price = 1000;
        expect(mainReducer(initialState, refreshTotal(price))).toEqual({
            ...initialState,
            totalPrice : price
        });
    });
})
