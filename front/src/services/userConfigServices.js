import axios from "axios";
import { MAIN_API } from "../config/api_routes";

const parseUserData = (user) => {
  const parsedUser = {
    firstName: user.name,
    lastName: user.lastname,
    idPassport: user.dni,
    email: user.email,
    avatar: user.avatar,
    account: user.cbuDollar,
    wallet: user.wallet,
    currencyList: user.transacciones,
    lastMessage: "",
  };
  return parsedUser;
};

const updateUserInfo = async (
  id,
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
    const updatedUser = await axios.put(
      MAIN_API.concat(`/api/user/register/${id}`),
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
    console.log(updatedUser.data);
    const parsedUser = parseUserData(updatedUser.data);
    return parsedUser;
  } catch (error) {
    navigateToErrorPage(error.message);
    throw error;
  }
};

export { updateUserInfo };
