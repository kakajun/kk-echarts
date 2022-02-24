import Cookies from 'js-cookie'
export function getToken (name) {
  return Cookies.get(name)
}

export function setToken (name, token) {
  return Cookies.set(name, token, { expires: 7 })
}

export function removeToken (name) {
  return Cookies.remove(name)
}