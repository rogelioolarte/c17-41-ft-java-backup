export class User {
  id;
  firstName;
  lastName;
  idPassport;
  email;
  avatar;
  account;
  wallet;
  currencyList;
  lastMessage;

  /**
   * Create a User
   * @param {*} name first name of the User
   * @param {*} lastName Last Name of the User
   * @param {*} idPassport ID or passport number
   * @param {*} email Email of the User
   * @param {*} password Password of the User
   * @param {*} avatar Url of the image for the avatar
   * @param {*} account Amount of currency in the account
   */

  constructor(user = {}) {
    this.id = user.id || "";
    this.firstName = user.firstName || "";
    this.lastName = user.lastName || "";
    this.idPassport = user.idPassport || "";
    this.email = user.email || "";
    this.avatar = user.avatar || "";
    this.account = user.account || "";
    this.wallet = user.wallet || null;
    this.currencyList = user.currencyList || null;
    this.lastMessage = user.lastMessage || "";
  }

  getId() {
    return this.id;
  }
}
