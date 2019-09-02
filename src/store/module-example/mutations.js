import { positive, msgToUser } from "./services/notifys";
import jwt from "./services/jwt/newClient"
import Cookies from "js-cookie"

export function newUsers(state, users) {
  state.users = users
}

export function setUser (state, user) {
  if (!user || !user.name) {
    return;
  }

  state.user = user

  Cookies.set("user", user, {expires: 700})
  positive(`Добро пожаловать, ${user.name}!`)
}

export function logout(state) {
  const nullUser = {name: null, login: null, password: null}

  msgToUser("Ну и вали.")

  state.user = nullUser

  Cookies.set("user", nullUser)

  jwt.setClientOptions({login: null, token: null, refreshToken: null})
}
