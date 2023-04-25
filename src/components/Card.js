function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <>
      <article className="element">
        <img src={props.card.link} alt="Изображение" className="element__image" onClick={handleClick} />
        <button type="button" className="element__trash-btn" aria-label="Удалить"></button>
        <div className="element__footer">
          <h3 className="element__text">{props.card.name}</h3>
          <div className="element__like">
            <button type="button" className="element__like-btn" aria-label="Нравится"></button>
            <p className="element__like-count">{props.card.likes.length}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
