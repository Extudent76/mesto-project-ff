import "./pages/index.css";
import { initialCards } from "./scripts/components/cards.js";
import { createCard, deleteCard, toggleLike } from "./scripts/components/card.js";
import { openModal, closeModal } from "./scripts/components/modal.js";

const nameElement = document.querySelector(".profile__title");
const jobElement = document.querySelector(".profile__description");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupsClose = document.querySelectorAll(".popup__close");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");

const editProfileForm = document.querySelector(".popup__form_type_edit");

const nameInput = editProfileForm.querySelector(".popup__input_type_name");
const jobInput = editProfileForm.querySelector(".popup__input_type_description");

const addCardForm = popupTypeNewCard.querySelector(".popup__form");
const cardNameInput = addCardForm.querySelector(".popup__input_type_card-name");
const cardLinkInput = addCardForm.querySelector(".popup__input_type_url");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const popupTypeImage = document.querySelector(".popup_type_image");
const cardsContainer = document.querySelector(".places__list");

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  const newName = nameInput.value;
  const newJob = jobInput.value;

  nameElement.textContent = newName;
  jobElement.textContent = newJob;

  closeModal(popupTypeEdit);
}

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const cardName = cardNameInput.value;
  const cardLink = cardLinkInput.value;
  const newCard = createCard(
    { name: cardName, link: cardLink },
    deleteCard,
    onImageClick,
    toggleLike
  );

  cardsContainer.prepend(newCard);
  addCardForm.reset();
  closeModal(popupTypeNewCard);
}

addCardForm.addEventListener("submit", handleAddCardSubmit);

profileEditButton.addEventListener("click", () => {
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
  openModal(popupTypeEdit);
});

profileAddButton.addEventListener("click", () => openModal(popupTypeNewCard));

function onImageClick(cardData) {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;

  openModal(popupTypeImage);
}

popupsClose.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closeModal(popup);
  });
});

function showInitialCards() {
  initialCards.forEach((cardData) => {
    cardsContainer.append(
      createCard(cardData, deleteCard, onImageClick, toggleLike)
    );
  });
}
showInitialCards();