import React from 'react';
import profileAvatar from '../images/profile-avatar.jpg';
import api from '../utils/api';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState('................................................'); //значение по умолчанию для отрисовки анимации загрузки
  const [userDescription , setUserDescription] = React.useState('................................................');
  const [userAvatar, setUserAvatar] = React.useState(profileAvatar);
  const [cards , setCards] = React.useState([]);
  const [loading, setState] = React.useState(true);

  React.useEffect(() => {
    Promise.all([api.loadUserInfo(), api.loadInitialCards()])
    .then(([newUserInfo, initialCards]) => {
        setUserName(newUserInfo.name);
        setUserDescription(newUserInfo.about);
        setUserAvatar(newUserInfo.avatar);
        setCards(initialCards);
    })
    .catch(err => console.log(`Ошибка: ${err}`))
    .finally(()=>setState(false));
  }, []);

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar-container">
          <img src={userAvatar} alt="Аватар" className="profile__avatar"/>
          <button type="button" className="profile__avatar-btn" aria-label="Изменить аватар" onClick={onEditAvatar} />
        </div>
        <div className="profile__info">
          <h1 className={`profile__info-title ${loading&&'placeholder-loading'}`}>{userName}</h1>
          <button type="button" className="profile__edit-btn" aria-label="Редактировать профиль" onClick={onEditProfile} />
          <h2 className={`profile__info-subtitle ${loading&&'placeholder-loading'}`}>{userDescription}</h2>
        </div>
        <button type="button" className="profile__add-btn" aria-label="Добавить фото" onClick={onAddPlace} />
      </section>

      <section className="elements" aria-label="Места">
        {cards.map(card => <Card key={card._id} card={card} onCardClick={onCardClick} />)}
      </section>

    </main>
  );
};

export default Main;
