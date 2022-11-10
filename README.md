# Lotus Field 
![alt text](https://github.com/qrxt/lotus-field/blob/master/public/img/lotus.png?raw=true)

![Node.js Build](https://github.com/qrxt/lotus-field/workflows/Node.js%20Build/badge.svg) [![Maintainability](https://api.codeclimate.com/v1/badges/0bf1a80c9b55f49de77a/maintainability)](https://codeclimate.com/github/qrxt/lotus-field/maintainability) ![Dependencies](https://david-dm.org/qrxt/lotus-field.svg) ![Work in Progress](https://img.shields.io/badge/WIP-%20-yellow)

Lotus field (WIP) - простое приложение для просмотра и формирования списка желаемых карт для Magic: The Gathering, построенное на React с использованием Redux.

![Single card preview](https://user-images.githubusercontent.com/46269438/97425997-e9ae5c00-1923-11eb-95fc-05fcef562579.gif)

## Возможности
- Поиск карт по различным критериям
- Просмотр правил и принтов для отдельных карт
- Просмотр цен на отдельные карты
- Добавление понравившихся карт в вишлист
- Просмотр случайных карт Magic: The Gathering
- Сохранение списка последних просмотренных карт и списка желаемого с помощью LocalStorage (временно)

## Технологии
- [React](https://reactjs.org/) - Библиотека для построения пользовательских интерфейсов.
- [Redux](https://redux.js.org/) - Менеджер состояний.
- [React Bootstrap](https://react-bootstrap.github.io/) - Библиотека компонентов Bootstrap, портированная для использования в экосистеме React
- [i18n](https://react.i18next.com/) - Интернационализация
- [PostCSS](https://postcss.org/) - Инструмент для трансформирования CSS
- [lint-staged](https://github.com/okonet/lint-staged) & [husky](https://typicode.github.io/husky/) - Инструменты для контроля качества кода

## Установка
1. Используйте в нужном пустом каталоге `git clone git@github.com:qrxt/lotus-field.git .`
2. Воспользуйтесь `make install` (или `npm install`) для установки зависимостей
3. Для запуска:
    * Воспользуйтесь `make watch` (или `npm run watch`) для запуска сервера, посетите http://localhost:3000/
    * Воспользуйтесь `make build` (или `npm run build`) для генерации бандла. Бандл будет лежать в ./dist

## Скриншоты и GIF

### Гифки
![Double card preview](https://user-images.githubusercontent.com/46269438/97426307-4f9ae380-1924-11eb-931e-7601ac63de24.gif) ![Other prints](https://user-images.githubusercontent.com/46269438/97426312-5164a700-1924-11eb-81c5-11d98e79ee4f.gif) ![search](https://user-images.githubusercontent.com/46269438/97431977-4ca3f100-192c-11eb-9684-4aff2e6f6f6d.gif)
![flip](https://user-images.githubusercontent.com/46269438/99426258-ed2a7700-2914-11eb-8fc0-7f53bc26d0e9.gif)

### Скриншоты
![card-example-1](https://user-images.githubusercontent.com/46269438/97600267-ed240f00-1a19-11eb-8a1b-993a4630f329.JPG) ![card-example-2](https://user-images.githubusercontent.com/46269438/97600271-edbca580-1a19-11eb-98ba-f6e0a148343e.JPG)
![found-cards](https://user-images.githubusercontent.com/46269438/97600268-ed240f00-1a19-11eb-9e60-a5712e61028f.JPG) ![recent](https://user-images.githubusercontent.com/46269438/97600262-ebf2e200-1a19-11eb-9e1d-84edb26965ca.JPG)
![prints](https://user-images.githubusercontent.com/46269438/97600275-ee553c00-1a19-11eb-8c15-e8086a0cd22b.JPG) ![prints-2](https://user-images.githubusercontent.com/46269438/97600276-ee553c00-1a19-11eb-830e-43d120053dca.JPG)
![prices](https://user-images.githubusercontent.com/46269438/97600278-eeedd280-1a19-11eb-8b1f-d6318f43c983.JPG) ![rulings](https://user-images.githubusercontent.com/46269438/97600274-ee553c00-1a19-11eb-90b1-fc858a76fda6.JPG)
![legalities](https://user-images.githubusercontent.com/46269438/97609004-25304f80-1a24-11eb-9ab6-68140d300a34.JPG)

## Прогресс
[Trello](https://trello.com/b/v2mW0LRI/lotus-field)

## Демо
На Vercel: [Тык!](https://lotus-field.vercel.app/)
