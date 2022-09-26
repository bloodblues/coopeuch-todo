import { getDataCallback, getDataPromise, getDataPromiseError } from './async'

describe('Haciendo test a operaciones asinctronas', () => {

  test('Haciendo test a callback', (done) => {
    getDataCallback((name) => {
      expect(name).toBe('Pedro Cubillos')
      done()
    })
  })

  test('Haciendo test a promesa', (done) => {
    getDataPromise()
      .then((name) => {
        expect(name).toBe('Pedro Cubillos')
        done()
      })
  })

  test('Haciendo test a promesa con expect', () => {
    return expect(getDataPromise()).resolves.toBe('Pedro Cubillos')
  })

  test('Haciendo test a promesa rechazada', (done) => {
    getDataPromiseError()
      .then((name) => {
      })
      .catch((error) => {
        expect(error).toBe('Error')
        done()
      })
  })

  test('Haciendo test a promesa rechazada con expect ', () => {
    return expect(getDataPromiseError()).rejects.toBe('Error')
  })

  test('Haciendo test a promesa resuelta con async await', async () => {
    const name = await getDataPromise()
    expect(name).toBe('Pedro Cubillos')
  })

  test('Haciendo test a promesa rechazada con async await', async () => {
    try {
      const name = await getDataPromiseError()
      expect(name).toBe('Pedro Cubillos')
    } catch (error) {
      expect(error).toBe('Error')
    }
  })

})