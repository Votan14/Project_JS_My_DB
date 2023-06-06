/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


document.querySelector('.promo__adv').remove();

document.querySelector('.promo__genre').textContent = 'Драма';

document.querySelector('.promo__bg').style.cssText = 'background: url(./img/bg.jpg) center center/cover no-repeat;';

movieDB.movies.sort();

let deleteItem = document.querySelectorAll('.promo__interactive-item');
deleteItem.forEach(item => {
    item.remove();
});

movieDB.movies.forEach(item => {
    let list = document.querySelector('.promo__interactive-list'),
        listItem = document.createElement('li');
    listItem.classList.add('promo__interactive-item');
    listItem.innerHTML = item;
    list.prepend(listItem);
});