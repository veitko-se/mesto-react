function ImagePopup(props) {
  return (
    <section className={`popup popup_type_photo ${props.isOpen&&'popup_opened'}`} id="popup-photo">
      <div className="popup__container popup__container_type_photo">
        <button type="button" className="popup__close-btn" aria-label="Закрыть окно" onClick={props.onClose}></button>
        <img src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''} className="popup__photo"/>
        <h2 className="popup__title popup__title_type_photo">{props.card ? props.card.name : ''}</h2>
      </div>
    </section>
  );
}

export default ImagePopup;
