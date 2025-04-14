# ui-admin-panel

## Опис

Цей проєкт є адміністративною панеллю для керівництва дитячого садочку. Панель дозволяє керувати інформацією на сайті, включаючи додавання та редагування меню, активностей та іншої інформації, що відображається на сайті.

Адмінпанель побудована на базі React, з використанням CSS-модулів для стилізації компонентів.

## Технології

- **React**: Основна бібліотека для створення інтерфейсу користувача
- **TypeScript**: Для типізації компонентів і забезпечення безпеки коду
- **CSS-модулі**: Модульна стилізація компонентів
- **Prettier**: Форматування коду
- **ESLint**: Статичний аналіз коду
- **Husky + lint-staged**: Перевірка коду перед комітом
- **Commitlint**: Валідація повідомлень комітів за Conventional Commits

## Встановлення

Клонуйте репозиторій:

```bash
git clone git@github.com:WebKidsTeam/adminpanel-ui.git
cd adminpanel-ui
```

## Встановіть залежності:

npm install

## Запустіть збірку:

npm run build

## Запустіть проєкт у режимі розробки:

npm run dev

Проєкт буде доступний за адресою: http://localhost:4000/

# Скрипти

npm run lint

 <!-- // Запускає ESLint для перевірки коду -->

npm run format

 <!-- Форматує весь код за допомогою Prettier -->

npm run prepare

<!-- # Ініціалізує husky (викликається автоматично після npm install) -->

## Коміт-повідомлення

## ВАЖЛИВО

Коміт-повідомлення обов'язково повинно містити JIRA ID у дужках (наприклад, WK-54).

Тип Для чого використовується
feat Додано нову фічу
fix Виправлення бага
refactor Переписування коду без зміни поведінки
chore Технічні зміни (залежності, конфігурації тощо)
docs Зміни в документації
style Зміни, що не впливають на логіку (пробіли, коми)
test Додано або змінено тести
build Зміни, що впливають на білд-систему або залежності
ci Зміни в CI-конфігурації

## Структура проєкту

src/components: Усі компоненти адміністративної панелі

src/pages: Основні сторінки панелі

## Основні функції

Авторизація: Доступ до панелі мають лише авторизовані користувачі

Керування меню: Додавання, редагування та видалення пунктів меню

Керування активностями: Робота з інформацією про активності для дітей

Редагування основної інформації: Контакти, відомості про садочок тощо

## Розробка та розширення

Додайте нові компоненти до папки src/components

Використовуйте CSS-модулі (.module.scss) для стилізації

Пишіть компоненти з використанням TypeScript

Дотримуйтесь єдиного стилю написання коду (ESLint + Prettier)
