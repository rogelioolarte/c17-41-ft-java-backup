import axios from "axios";
import { MAIN_API, ROUTE_LOGIN, ROUTE_REGISTER } from "../config/api_routes";
import { User } from "../models/user.class";

const getUser = async (id) => {
  try {
    const user = await axios.get(MAIN_API.concat(`/api/user/${id}`));
    const userData = {
      id: user.data.userId,
      firstName: user.data.name,
      lastName: user.data.lastname,
      idPassport: user.data.dni,
      email: user.data.email,
      avatar: user.data.avatar,
      account: user.data.cbuDollar,
      wallet: user.data.wallet,
      currencyList: user.data.transacciones,
      lastMessage: "",
    };
    const mappedUser = new User(userData);
    return mappedUser;
  } catch (error) {
    throw new Error(error);
  }
};

const login = async (email, password, navigateToErrorPage) => {
  try {
    const user = await axios.post(
      MAIN_API.length !== 0
        ? MAIN_API.concat(ROUTE_LOGIN)
        : "https://reqres.in/api/login",
      {
        email: email,
        password: password,
      }
    );
    const userData = await getUser(user.data.id);
    return userData;
  } catch (error) {
    navigateToErrorPage(error.message);
    throw error;
  }
};

const register = async (
  firstName,
  lastName,
  idPassport,
  email,
  password,
  avatar,
  account,
  navigateToErrorPage
) => {
  try {
    const newUser = await axios.post(
      MAIN_API.length !== 0
        ? MAIN_API.concat(ROUTE_REGISTER)
        : "https://reqres.in/api/register",
      {
        name: firstName,
        lastname: lastName,
        dni: idPassport,
        email: email,
        password: password,
        avatar: avatar,
        cbuDollar: account,
      }
    );
    const newUserData = await getUser(newUser.data.id);
    return newUserData;
  } catch (error) {
    navigateToErrorPage(error.message);
    throw error;
  }
};

export { login, register };
