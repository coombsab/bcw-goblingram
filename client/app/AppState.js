import { dev } from './env.js'
import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'

class AppState extends EventEmitter {
  user = {}
  /** @type {import('./Models/Account.js').Account} */
  // @ts-ignore
  account = {}
  /** @type {import('./Models/Value').Value[]} */
  values = []
  socketData = []

  /** @type {import('./Models/Post').Post[]} */
  posts = []

  /** @type {import('./Models/Comment').Comment[]} */
  comments = []
  /** @type {import('./Models/Post').Post | null} */

  activePost = null
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

if (dev) {
  // @ts-ignore
  window.appState = appState
}
