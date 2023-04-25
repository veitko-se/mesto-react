import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">

      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      <PopupWithForm name="confirm" /*isOpen={}*/ onClose={closeAllPopups} title="Вы уверены?" buttonText="Да" />

      <PopupWithForm name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title="Обновить аватар" buttonText="Сохранить">
        <label className="popup__field">
          <input
            aria-label="Ссылка на аватар"
            type="url"
            className="popup__input"
            id="input-avatar-link"
            placeholder="Ссылка на аватар"
            required
            name="linkAvatar"
          />
          <span className="popup__error" id="input-avatar-link-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title="Редактировать профиль" buttonText="Сохранить">
        <label className="popup__field">
          <input
            aria-label="Имя"
            type="text"
            className="popup__input"
            id="input-profile-name"
            placeholder="Имя"
            required
            name="titleProfile"
            minLength="2"
            maxLength="40"
          />
          <span className="popup__error" id="input-profile-name-error"></span>
        </label>
        <label className="popup__field">
          <input
            aria-label="О себе"
            type="text"
            className="popup__input"
            id="input-profile-job"
            placeholder="О себе"
            required
            name="subtitleProfile"
            minLength="2"
            maxLength="200"
          />
          <span className="popup__error" id="input-profile-job-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title="Новое место" buttonText="Создать">
        <label className="popup__field">
          <input
            aria-label="Название"
            type="text"
            className="popup__input"
            id="input-place-name"
            placeholder="Название"
            required
            name="namePlace"
            minLength="2"
            maxLength="30"
          />
          <span className="popup__error" id="input-place-name-error"></span>
        </label>
        <label className="popup__field">
          <input
            aria-label="Ссылка на картинку"
            type="url"
            className="popup__input"
            id="input-place-link"
            placeholder="Ссылка на картинку"
            required
            name="linkPlace"
          />
          <span className="popup__error" id="input-place-link-error"></span>
        </label>
      </PopupWithForm>

    </div>
  );
}

export default App;