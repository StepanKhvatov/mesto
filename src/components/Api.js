export default class Api {
    constructor({ url, headers = {} }) {
        this.url = url;
        this.headers = headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json()
        } else {
            Promise.reject(res.statusText)
        }
    }

    _handleResponseError(err) {
        return Promise.reject(err.message)
    }

    getInitialCards() {
        return fetch(
            `${this.url}/cards`,
            {
              headers: this.headers
            }
        )

        .then(this._handleResponse)
        .catch(this._handleResponseError)
    }

    postCard(data) {
        return fetch(
            `${this.url}/cards`,
            {
              headers: this.headers,
              method: 'POST',
              body: JSON.stringify({
                name: data.name,
                link: data.link
              })
            }
        )

        .then(this._handleResponse)
        .catch(this._handleResponseError)
    }

     deleteCard(id) {
        return fetch(
          `${this.url}/cards/${id}`,
          {
            headers: this.headers,
            method: 'DELETE'
          }
        )

        .then(this._handleResponse)
        .catch(this._handleResponseError)
     }

     changeAvatar(link) {
        return fetch(
            `${this.url}/users/me/avatar`,
            {
              headers: this.headers,
              method: 'PATCH',
              body: JSON.stringify({
                avatar: link
              })
            }
        )

        .then(this._handleResponse)
        .catch(this._handleResponseError)
     }

     setUserInfo(name, about) {
        return fetch(
          `${this.url}/users/me`,
          {
            headers: this.headers,
            method: 'PATCH',
            body: JSON.stringify({
              name: name,
              about: about,
            })
          }
        )

        .then(this._handleResponse)
        .catch(this._handleResponseError)
     }

     getUserInfo() {
        return fetch(
          `${this.url}/users/me`,
          {
            headers: this.headers,
          }
        )

        .then(this._handleResponse)
        .catch(this._handleResponseError)
     }

     putLike(id) {
        return fetch(
          `${this.url}/cards/likes/${id}`,
          {
            headers: this.headers,
            method: 'PUT'
          }
        )

        .then(this._handleResponse)
        .catch(this._handleResponseError)
     }

     deleteLike(id) {
        return fetch(
          `${this.url}/cards/likes/${id}`,
          {
            headers: this.headers,
            method: 'DELETE'
          }
        )

        .then(this._handleResponse)
        .catch(this._handleResponseError)
     }





}


// Токен: 0fb698c6-c0f4-4661-887b-6a574c3a11ac
// Идентификатор группы: cohort-13
//Новый экземляр класса нужно обьявить внутри then
