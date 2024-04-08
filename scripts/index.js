import { initialCards } from './cards.js';
// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template');
// @todo: DOM узлы

const placeList =  document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard (cardDate, cardCallDelite) {
    const cardLi = cardTemplate.content.querySelector('.places__item').cloneNode(true);

    cardLi.querySelector('.card__image').src = cardDate.link;
    cardLi.querySelector('.card__image').alt = cardDate.name;
    cardLi.querySelector('.card__title').textContent = cardDate.name;

    cardLi.querySelector('.card__delete-button').addEventListener('click', function(){
        cardCallDelite(cardLi);
    })

    return cardLi;
}
// @todo: Функция удаления карточки
function deleteCard(cardLi) {
    cardLi.remove();
}
// @todo: Вывести карточки на страницу
function renderCard() {
    initialCards.forEach(cardData => {
        const card = createCard(cardData, deleteCard);
        placeList.appendChild(card);
    });
}

renderCard();