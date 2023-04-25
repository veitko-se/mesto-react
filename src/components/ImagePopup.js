function ImagePopup({card, isOpen, onClose}) {
  return (
    <section className={`popup popup_type_photo ${isOpen&&'popup_opened'}`} id="popup-photo">
      <div className="popup__container popup__container_type_photo">
        <button type="button" className="popup__close-btn" aria-label="Закрыть окно" onClick={onClose}></button>
        <img src={card ? card.link : ''} alt={card ? card.name : ''} className="popup__photo"/>
        <h2 className="popup__title popup__title_type_photo">{card ? card.name : ''}</h2>
      </div>
    </section>
  );
}

export default ImagePopup;
