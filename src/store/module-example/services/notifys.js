import { Notify } from "quasar";

export function msgToUser(message, options = {}) {
  Notify.create({
    position: "top",
    message,
    color: "primary",
    ...options
  })
}

export function warning(message, options = {}) {
  Notify.create({
    position: "top",
    message,
    color: "warning",
    ...options
  })
}

export function positive(message, options = {}) {
  Notify.create({
    position: "top",
    message,
    color: "positive",
    ...options
  })
}

export function info(message, options = {}) {
  Notify.create({
    position: "top",
    message,
    color: "info",
    ...options
  })
}

export function danger(message, options = {}) {
  Notify.create({
    position: "top",
    message,
    color: "negative",
    ...options
  })
}
