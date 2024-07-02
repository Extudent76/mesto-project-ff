import {placeNameInput, linkInput, nameInput, descriptionInput, profileTitle, profileDescription} from '../../index';

import { renderCard } from './card';
import { initialCards } from './cards';

export function openModal(modal) {
    modal.classList.add("popup_is-opened");
    document.addEventListener('keydown', handleEscClose);
    modal.addEventListener('click', closeModalOverlay)
}

export function closeModal(modal) {
    modal.classList.add("popup_is-animated");
    modal.classList.remove("popup_is-opened");
    document.removeEventListener('keydown', handleEscClose);
}

function handleEscClose(event) {
    if (event.key === 'Escape') {
      const openModal = document.querySelector('.popup_is-opened');
      if (openModal) {
        closeModal(openModal);
      }
    }
  }

function closeModalOverlay(evt) {
  if (evt.target.classList.contains("popup_is-opened")) {
    closeModal(evt.target);
  }
}


 export function handleFormSubmitEdit(evt) {
    evt.preventDefault(); 
    profileTitle.textContent =  nameInput.value;
    profileDescription.textContent = descriptionInput.value
    const openModal = document.querySelector('.popup_is-opened');
      if (openModal) {
        closeModal(openModal);
      }

}

 function addCard(name, link) {
    initialCards.unshift({ name, link });
  }

  export function handleFormSubmitAdd(event) {
    event.preventDefault();
  
    const placeName = placeNameInput.value;
    const link = linkInput.value;
  
    addCard(placeName, link);
  
    const openModal = document.querySelector('.popup_is-opened');
      if (openModal) {
        closeModal(openModal);
      }

      renderCard();
  }