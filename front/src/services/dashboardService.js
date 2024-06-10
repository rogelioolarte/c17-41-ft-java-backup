/* import { TOKEN } from "../config/token"; */
import {
  MAIN_API,
  ROUTE_GET_PRODUCTS,
  ROUTE_GET_TRANSACTIONS,
  ROUTE_BUY_CRYPTO,
  ROUTE_RECHARGE_WALLET,
} from "../config/api_routes";

export const obtainProduct = async () => {
  return await fetch(
    MAIN_API.length !== 0
      ? MAIN_API.concat(ROUTE_GET_PRODUCTS)
      : `https://reqres.in/api/unknown/23`,
    {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      return response.json();
    })
    .catch((error) => console.error(`Error: ${error}`));
};

export const sendOffer = async (data, modo) => {
  return await fetch(
    MAIN_API.length !== 0
      ? MAIN_API.concat(ROUTE_BUY_CRYPTO).concat(modo)
      : "https://reqres.in/api/unknown/23",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then(async (response) =>  {  
      const data = await response.json();
      return data;
    })
    .catch((error) => console.error(error))
    .finally(() => console.info("Sending offer finished"));
};

export const getTransactions = async (id) => {
  return await fetch(
    MAIN_API.length !== 0
      ? MAIN_API.concat(ROUTE_GET_TRANSACTIONS).concat(id)
      : `https://reqres.in/api/unknown/23`,
    {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      return response.json();
    })
    .catch((error) => console.error(`Error: ${error}`))
    .finally(() => console.info("Request of transactions finished"));
};

export const rechargeWallet = async (id, amount) => {
  return await fetch(
    MAIN_API.length !== 0
      ? MAIN_API.concat(ROUTE_RECHARGE_WALLET).concat(id)
      : `https://reqres.in/api/unknown/23`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: amount,
      }),
    }
  )
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      const data = await response.json();
      return data;
    })
    .catch((error) => error)
    .finally(() => console.info("Request of transactions finished"));
};
