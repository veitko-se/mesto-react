function PopupWithForm({isOpen, onClose, name, title, buttonText, children}) {
  return (
    <section className={`popup ${isOpen&&'popup_opened'}`} id={`popup-${name}`}>
      <div className={`popup__container popup__container_type_${name}`}>
        <button type="button" className="popup__close-btn" aria-label="Закрыть окно" onClick={onClose} />
        <h2 className={`popup__title popup__title_type_${name}`}>{title}</h2>
        <form className="popup__form" name={name} id={`form-${name}`} >
          {children}
          <button type="submit" className="popup__save-btn">{buttonText}</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
