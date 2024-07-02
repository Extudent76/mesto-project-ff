
import './pages/index.css';
import {renderCard} from './scripts/components/card.js';

import {openModal, closeModal,  handleFormSubmitEdit, handleFormSubmitAdd} from './scripts/components/modal.js'

export const cardTemplate = document.querySelector('#card-template');
export const placeList =  document.querySelector('.places__list');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const editModal = document.querySelector('.popup_type_edit');
const newCardModal = document.querySelector('.popup_type_new-card');
const ImageModal = document.querySelector('.popup_type_image');

const closeEditButton = editModal.querySelector('.popup__close');
const closeAddButton = newCardModal.querySelector('.popup__close');
const closeImageButton = ImageModal.querySelector('.popup__close');

const formElementEdit = editModal.querySelector('.popup__form');
const formElementAdd = newCardModal.querySelector('.popup__form');

export const placeNameInput = formElementAdd.querySelector('input[name="place-name"]');
export const linkInput = formElementAdd.querySelector('input[name="link"]');

export const nameInput = editModal.querySelector('input[name="name"]');
export const descriptionInput = editModal.querySelector('input[name="description"]');

export const profileTitle = document.querySelector('.profile__title');
export const profileDescription = document.querySelector('.profile__description');

export const popupImage = document.querySelector(".popup__image");
export const popupCaption = document.querySelector(".popup__caption");
export const popupTypeImage = document.querySelector(".popup_type_image");



renderCard();

editButton.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent;
    descriptionInput.value = profileDescription.textContent;
    openModal(editModal);
});

closeEditButton.addEventListener('click', () => {
    closeModal(editModal);
});

addButton.addEventListener('click', () => {
    openModal(newCardModal);
});

closeAddButton.addEventListener('click', () => {
    closeModal(newCardModal);
});

closeImageButton.addEventListener('click', () => {
    closeModal(ImageModal);
});

formElementEdit.addEventListener('submit', handleFormSubmitEdit);

formElementAdd.addEventListener('submit', handleFormSubmitAdd);


