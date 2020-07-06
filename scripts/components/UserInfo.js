export default class UserInfo {
  constructor(data) {
      this._name = data.name;
      this._about = data.about;
  }

  getUserInfo() {
      const formValues = {};
      formValues.name = document.querySelector(this._name).textContent;
      formValues.about = document.querySelector(this._about).textContent;
      return formValues;
  }

  setUserInfo(newInfo) {
      document.querySelector(this._name).textContent = newInfo.name;
      document.querySelector(this._about).textContent = newInfo.about;
  }

}




