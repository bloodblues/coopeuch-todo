import { setTimeout } from 'timers'

export const getDataCallback = (callback) => {
  // Solicitud http a un API
  const name = 'Pedro Cubillos'

  setTimeout(() => {
    callback(name)
  }, 300)
}

export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Pedro Cubillos')
    }, 300)
  })
}

export const getDataPromiseError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error')
    }, 300)
  })
}
