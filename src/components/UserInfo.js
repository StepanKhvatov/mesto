export default class UserInfo {
  constructor(data) {
      this._nameSelector = data.name;
      this._aboutSelector = data.about;
      this._avatarSelector = data.avatar;
      this._name = document.querySelector(this._nameSelector);
      this._about = document.querySelector(this._aboutSelector);
      this._avatar = document.querySelector(this._avatarSelector);
  }

  getUserInfo() {
      const formValues = {};
      formValues.name = this._name.textContent;
      formValues.about = this._about.textContent;
      return formValues;
  }

  setUserInfo(newInfo) {
      this._name.textContent = newInfo.name;
      this._about.textContent = newInfo.about;
  }

  setUserAvatar(newInfo) {
      this._avatar.src = newInfo.avatar;
  }

}
