context('Проверка интерфейса конструктора', () => {

    it('Очищаю LocalStorage', () => {
        cy.clearLocalStorage()
    })

    it('Проверяю доступность апи и джейсона', () => {
        cy.visit('http://localhost:3000');
        cy.intercept('GET', 'https://norma.nomoreparties.space/api/ingredients', {
            fixture: 'ingredients.json',
        });
    })

    it('localhost:3000 доступен', () => {
        cy.visit('http://localhost:3000');
    });

    it('Попытка входа', () => {
        cy.wait(1000);
        cy.visit('http://localhost:3000/login')
        cy.wait(1000);
        cy.get('[type="email"]').type('somename@yandex.ru')
        cy.get('[type="password"]').type('asdasdasd')
        cy.get('.buttonSumbit button').click()
        cy.wait(1000)
        cy.visit('http://localhost:3000/')
    })

    it("Загрузка ингредиентов", () => {
        cy.wait(1000)
        cy.get('[data-test="ingredient"]').eq(0).as('first');
    })

    it('Проверка модала ингредиента', () => {
        cy.get('[data-test="ingredient"]').eq(0).as('first').click()
        cy.wait(500)
        cy.get('[data-test="modal-body"]');
        cy.wait(500)
        cy.get('[data-test="modal-close"]').click();
    })

    it('Дроп булки', () => {
        cy.get('[data-test="ingredient"]').first().trigger('dragstart')
        cy.get('[data-test="constructor"]').trigger('drop')
    })

    it('Дроп еще нескольких ингредиентов', () => {
        cy.get('[data-test="ingredient"]').contains('Филе').trigger('dragstart')
        cy.get('[data-test="constructor"]').trigger('drop')
        cy.wait(500)

        cy.get('[data-test="ingredient"]').contains('Мини-салат').trigger('dragstart')
        cy.get('[data-test="constructor"]').trigger('drop')
        cy.wait(500)
    })

    it('Отправка заказа', () => {
        cy.get('[data-test="order-button-wrap"]').find('button').click()
        cy.wait(500)
        cy.get('[data-test="modal-close"]').click();
    })



    // it('Ингредиенты загружены', function () {
    //     cy.get('[data-test="ingredient"]').eq(0).as('first');
    // });
    //
    // it('Дроп булки', function () {
    //     cy.get('[data-test-id="ingredient-name"]')
    //         .eq(0)
    //         .as('first')
    //         .parent()
    //         .find('[data-test-id="ingredient"]')
    //         .eq(0)
    //         .as('bun');
    //
    //     cy.get('@bun').trigger('dragstart');
    //     cy.get('[data-test-id="burder-constructor"]').trigger('drop');
    // });
    // it('Дроп ингредиента', function () {
    //     cy.get('[data-test-id="ingredient-name"]')
    //         .eq(1)
    //         .as('first')
    //         .parent()
    //         .find('[data-test-id="ingredient"]')
    //         .eq(0)
    //         .as('item');
    //     cy.get('[data-test-id="ingredient-name"]')
    //         .eq(1)
    //         .as('first')
    //         .parent()
    //         .find('[data-test-id="ingredient"]')
    //         .eq(3)
    //         .as('item-next');
    //
    //     cy.get('@item').trigger('dragstart');
    //     cy.get('[data-test-id="burder-constructor"]').trigger('drop');
    //     cy.get('@item-next').trigger('dragstart');
    //     cy.get('[data-test-id="burder-constructor"]').trigger('drop');
    // });
    // it('Модальное окно ингредиента', function () {
    //     cy.get('[data-test-id="ingredient-name"]')
    //         .eq(1)
    //         .as('first')
    //         .parent()
    //         .find('[data-test-id="ingredient"]')
    //         .eq(0)
    //         .as('item');
    //
    //     cy.get('@item').click();
    // });
    // it('Модальное окно ингредиента (открытие)', function () {
    //     cy.get('.modal-wrap');
    // });
    // it('Модальное окно ингредиента (закрытие)', function () {
    //     cy.get('.btn-close-modal').click();
    // });
});
