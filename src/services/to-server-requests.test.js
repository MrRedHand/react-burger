import {getFullData} from "./to-server-requests";

describe('Получена ли вся первичная дата с сервера', () => {
    it('Должен прийти массив ингредиентов', () => {
        expect(getFullData())
    });
})