//1.1 Напиши проверку на позитивный кейс авторизации:
describe('autotests for authorization', function () {
    it('Верный логин + верный пароль', function () {
         cy.visit('https://login.qa.studio/');// зайти на сайт...
         cy.get('#loginButton') .should('be.disabled');//кнопка "Войти" - задизейблена(неактивна)
         cy.get('#mail') .type('german@dolnikov.ru');// заполнить поле "E-mail" валидными данными
         cy.get('#loginButton') .should('be.disabled');//кнопка "Войти" - задизейблена(неактивна)
         cy.get('#pass') .type('iLoveqastudio1');// заполнить поле "Пароль" валидными данными
         cy.get('#loginButton') .should('be.enabled');//кнопка "Войти" - раздизейблена(активна)
         cy.get('#loginButton') .click();// кнопка "Войти"- нажать
         cy.contains('Авторизация прошла успешно');// в открывшемся окне содержится текст "Авторизация прошла успешно"
         cy.get('#exitMessageButton > .exitIcon')// есть "крестик" (закрыть)
              })
 })

// 1.2 Напиши автотест на проверку логики восстановления пароля:
 describe('autotests for authorization', function () {
     it('Восстановление пароля', function ()
      {cy.reload();// сбросить состояние страницы для нового теста
          cy.visit('https://login.qa.studio/');// зайти на сайт /
          cy.get('#loginButton') .should('be.disabled');//кнопка "Войти" - задизейблена(неактивна)
          cy.get('#mail') .type('german@dolnikov.ru');// заполнить поле "E-mail" валидными данными
          cy.get('#loginButton') .should('be.disabled');//кнопка "Войти" - задизейблена(неактивна)
          cy.get('#pass') .type('iLoveqastudio2');// заполнить поле "Пароль" НЕвалидными данными
          cy.get('#loginButton') .should('be.enabled') .click();//кнопка "Войти" - раздизейблена(активна)//кликнуть кнопку "Войти"
          cy.contains('Такого логина или пароля нет');// в открывшемся окне содержится текст "Такого логина или пароля нет"
          cy.get('#exitMessageButton > .exitIcon') .click();//есть "крестик" (закрыть)// кликнуть по крестику
          cy.get('#forgotEmailButton') .click()// в открывшемся окне есть кнопка "Забыли пароль?"// кликнуть кнопку "Забыли пароль?"
          cy.contains('Восстановите пароль');// в открывшемся окне содержится текст "Восстановите пароль"
          cy.get('#mailForgot') .type('german@dolnikov.ru');// заполнить поле "E-mail" валидными данными
          cy.get('#restoreEmailButton') .click();//найти кнопку "Отправить код"// кликнуть ее
          cy.contains('Успешно отправили пароль на e-mail');//в открывшемся окне содержится текст "Успешно отправили пароль на e-mail"
          cy.get('#exitMessageButton > .exitIcon') .click();//есть "крестик" (закрыть)// кликнуть по крестику
                         })                        
  })
 

// 1.3 Напиши проверку на негативный кейс валидации:
  describe('autotests for authorization', function () {
     it('Верный логин + Неверный пароль', function ()
      {cy.reload();// сбросить состояние страницы для нового теста
          cy.visit('https://login.qa.studio/');// зайти на сайт /
          cy.get('#loginButton') .should('be.disabled');//кнопка "Войти" - задизейблена(неактивна)
          cy.get('#mail') .type('german@dolnikov.ru');// заполнить поле "E-mail" валидными данными
          cy.get('#loginButton') .should('be.disabled');//кнопка "Войти" - задизейблена(неактивна)
          cy.get('#pass') .type('iLoveqastudio2');// заполнить поле "Пароль" НЕвалидными данными
          cy.get('#loginButton') .should('be.enabled') .click();//кнопка "Войти" - раздизейблена(активна)//кликнуть кнопку "Войти"
          cy.contains('Такого логина или пароля нет');// в открывшемся окне содержится текст "Такого логина или пароля нет"
          cy.get('#exitMessageButton > .exitIcon') .click();//есть "крестик" (закрыть)// кликнуть по крестику
     })                        
})

// 1.4 Напиши проверку на негативный кейс валидации:
describe('autotests for authorization', function () {
     it('НЕерный логин + верный пароль', function ()
      {cy.reload();// сбросить состояние страницы для нового теста
          cy.visit('https://login.qa.studio/');// зайти на сайт /
          cy.get('#loginButton') .should('be.disabled');//кнопка "Войти" - задизейблена(неактивна)
          cy.get('#mail') .type('123german@dolnikov.ru');// заполнить поле "E-mail" НЕвалидными данными
          cy.get('#loginButton') .should('be.disabled');//кнопка "Войти" - задизейблена(неактивна)
          cy.get('#pass') .type('iLoveqastudio1');// заполнить поле "Пароль" валидными данными
          cy.get('#loginButton') .should('be.enabled') .click();//кнопка "Войти" - раздизейблена(активна)//кликнуть кнопку "Войти"
          cy.contains('Такого логина или пароля нет');// в открывшемся окне содержится текст "Такого логина или пароля нет"
          cy.get('#exitMessageButton > .exitIcon');//есть "крестик" (закрыть)//
     })                        
})


// 1.5  Напиши проверку на негативный кейс валидации:
describe('autotests for authorization', function () {
     it('Логин без @ + верный пароль', function ()
      {cy.reload();// сбросить состояние страницы для нового теста
          cy.visit('https://login.qa.studio/');// зайти на сайт /
          cy.get('#loginButton') .should('be.disabled');//кнопка "Войти" - задизейблена(неактивна)
          cy.get('#mail') .type('123german_dolnikov.ru');// заполнить поле "E-mail" НЕвалидными данными, без @
          cy.get('#loginButton') .should('be.disabled');//кнопка "Войти" - задизейблена(неактивна)
          cy.get('#pass') .type('iLoveqastudio1');// заполнить поле "Пароль" валидными данными
          cy.get('#loginButton') .should('be.enabled') .click();//кнопка "Войти" - раздизейблена(активна)//кликнуть кнопку "Войти"
          cy.contains('Нужно исправить проблему валидации');// в открывшемся окне содержится текст "Нужно исправить проблему валидации"
          cy.get('#exitMessageButton > .exitIcon');//есть "крестик" (закрыть)//
     })                        
})

//1.6 Напиши проверку на привидение к строчным буквам в логине:
//Разработчик допустил баг и это не реализовал. Тест должен упасть — и это ок (то есть мы поймали баг, который допустил разработчик)

describe('autotests for authorization', function () {
     it('Верный логин  с использ Заглавн букв + верный пароль', function () 
     {cy.reload();// сбросить состояние страницы для нового теста
          cy.visit('https://login.qa.studio/');// зайти на сайт...
          cy.get('#loginButton') .should('be.disabled');//кнопка "Войти" - задизейблена(неактивна)
          cy.get('#mail') .type('GerMan@Dolnikov.ru');// заполнить поле "E-mail" валидными данными с использ Заглавн букв
          cy.get('#loginButton') .should('be.disabled');//кнопка "Войти" - задизейблена(неактивна)
          cy.get('#pass') .type('iLoveqastudio1');// заполнить поле "Пароль" валидными данными
          cy.get('#loginButton') .should('be.enabled');//кнопка "Войти" - раздизейблена(активна)
          cy.get('#loginButton') .click();// кнопка "Войти"- нажать
          cy.contains('Авторизация прошла успешно');// в открывшемся окне содержится текст "Авторизация прошла успешно"
          cy.get('#exitMessageButton > .exitIcon')// есть "крестик" (закрыть)
               })
  })

