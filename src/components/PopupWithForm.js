function PopupWithForm(props) {
  return (
    <section className={`popup ${props.isOpen&&'popup_opened'}`} id={`popup-${props.name}`}>
      <div className={`popup__container popup__container_type_${props.name}`}>
        <button type="button" className="popup__close-btn" aria-label="Закрыть окно" onClick={props.onClose}></button>
        <h2 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h2>
        <form className="popup__form" name={props.name} id={`form-${props.name}`} >
          {props.children}
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
