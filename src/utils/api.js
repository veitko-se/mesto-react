/** Класс для работы с API сервера */
class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._authorization = headers.authorization;
    this._headers = headers;
  }

  /** приватный метод - проверка ответа сервера */
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  /** универсальный метод запроса с проверкой ответа */
  _request(endpoint, options) {
    return fetch(this._baseUrl + endpoint, options)
      .then(this._checkResponse)
  }

  /** загрузить данные о пользователе с сервера */
  loadUserInfo() {
    return this._request(`/users/me`, {
      headers: {
        authorization: this._authorization
      }
    })
  }

  /** обновить информацию о пользователе */
  updateUserInfo(newInfo) {
    return this._request(`/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: newInfo.titleProfile,
        about: newInfo.subtitleProfile
      })
    })
  }

  /** обновить аватар */
  updateUserAvatar(newAvatar) {
    return this._request(`/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: newAvatar
      })
    })
  }

  /** загрузить карточки с сервера */
  loadInitialCards() {
    return this._request(`/cards`, {
      headers: {
        authorization: this._authorization
      }
    })
  }

  /** отправить карточку на сервер */
  pushCard({ name, link }) {
    return this._request(`/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
  }

  /** удалить карточку на сервере */
  deleteCard(cardId) {
    return this._request(`/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  /** отправить лайк на сервер */
  putLike(cardId) {
    return this._request(`/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
  }

  /** удалить лайк на сервере */
  deleteLike(cardId) {
    return this._request(`/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
  }
}

/** экземляр класса Api*/
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: 'c024f246-bb18-41cb-8ec3-55e361b94019',
    'Content-Type': 'application/json'
  }
});

export default api;
