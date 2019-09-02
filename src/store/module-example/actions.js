import jwt from "./services/jwt/newClient"
import { warning, info, danger } from "./services/notifys"

/**
 * регистрация 
 */
export async function requestToCreate({commit}, {name, login, password, passwordCheck}) {
  if (name.trim() == "") {
    warning("Как вас зовут?")
    return;
  }

  if (login.trim() == "") {
    warning("Придумайте логин")
    return;
  }

  if (password.trim() == "") {
    warning("Придумайте пароль")
    return;
  }

  if (password != passwordCheck) {
    warning("Пароли не совпадают")
    return;
  }

  const user = await jwt.client.post("sigin", {name, login, password})

  if (user == 406) {
    warning("Пользователь с таким логином уже существует")
    return;
  }

  jwt.setClientOptions({...user.data})

  commit("setUser", await jwt.client("users/" + login).then(({data}) => data))
}

/**
 * логирование
 */
export async function requestToLogin({commit}, {login, password}) {
  if (login.trim() == "") {
    warning("Укажите логин")
    return;
  }

  if (password.trim() == "") {
    warning("Укажите пароль")
    return;
  }

  const request = await jwt.client.post("auth/login", {login, password})

  if (request == 404) {
    danger("Пользователя с таким логином не существует")
    return;
  }

  if (request == 403) {
    danger("Пароли не совпадают")
    return;
  }

  jwt.setClientOptions({...request.data})

  commit("setUser", await jwt.client("users/" + login).then(({data}) => data))
}

/**
 * получение пользователей 
 */
export async function newUsers({commit}) {
  const request = await jwt.client("users/")
  
  if (typeof request == "number") {
    return;
  }

  commit("newUsers", request.data.users)
}

/**
 * шутка
 */
export async function forgetLogin() {
  info("У вас проблемы с памятью")
}
