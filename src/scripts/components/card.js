import { cardTemplate, placeList, popupImage, popupCaption, popupTypeImage, closeAddButton } from '../../index';
import { openModal } from './modal'
import { initialCards } from './cards'

function createCard (cardDate, cardCallDelite, toggleCallLike) {
  const cardLi = cardTemplate.content.querySelector('.places__item').cloneNode(true);

  cardLi.querySelector('.card__image').src = cardDate.link;
  cardLi.querySelector('.card__image').alt = cardDate.name;
  cardLi.querySelector('.card__title').textContent = cardDate.name;
 
  cardLi.querySelector('.card__like-button').addEventListener('click', function(){
    toggleCallLike(cardLi.querySelector('.card__like-button'));
  })

  cardLi.querySelector('.card__delete-button').addEventListener('click', function(){
      cardCallDelite(cardLi);
  })

  cardLi.querySelector('.card__image').addEventListener('click', function(){
    onImageClick(cardDate);
})

  return cardLi;
}

function deleteCard(cardLi) {
  cardLi.remove();
}

export function renderCard() {
  placeList.innerHTML = '';
  initialCards.forEach(cardData => {
      const card = createCard(cardData, deleteCard, toggleLike, onImageClick);
      placeList.appendChild(card);
  });
}

export function toggleLike(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}

function onImageClick(cardData) {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;

  openModal(popupTypeImage);
}

