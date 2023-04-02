//а) Открой главную страницу
//б) Открой карточку любую товара
//в) Измени количество на 2шт. и положи в корзину
//г) Перейди в корзину
//д) Нажми оформить заказ

describe('Тестирование [HuntingPony]', function () {
    it('Проверка оформления заказа', function () {
         cy.visit('https://huntingpony.com/');// зайти на сайт [HuntingPony]
         cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link') .click();// Выбрать в меню под поиском "Лежанки"
         cy.contains('Лежанки');// в открывшемся окне содержится текст "Лежанки"
         cy.get('[data-product-id="350328854"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a') .click();//выбрать "Лежанка "Пони-Колосони" Терракот, кликнуть "Выбрать"
         cy.get('.add-cart-counter__btn') .click();// выбрать кнопку "В корзину", Кликнуть
         cy.get('[data-add-cart-counter-plus=""]') .click();// добавить еще 1 товар в корзину
         cy.get('.add-cart-counter__detail') .click();// получить кнопку "В корзину", Кликнуть
         cy.contains('Корзина');// в открывшемся окне содержится текст "Корзина" 
         cy.get('.cart-controls > .button') .click();//получить кнопку "Оформить заказ", кликнуть ее 
         cy.contains('Оформление заказа');// в открывшемся окне содержится текст "Оформление заказа"
        })                        
    })