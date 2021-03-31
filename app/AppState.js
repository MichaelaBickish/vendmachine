import Snack from "./Models/Snacks.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  /** @type {Snack}*/


    currentTransaction= 0
    snacks = [new Snack('Snickers', 1.25, 'https://st.depositphotos.com/2121815/4176/i/950/depositphotos_41764645-stock-photo-snickers-chocolate-bar-isolated-on.jpg'),
            new Snack('Nacho Doritos', 1.50, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsVxQzIE--G91XCOoC29nvsCuyCTzpmKmb5ERfuytw99c4QdCXbf8xX78HA&usqp=CAc'),
            new Snack('Swedish Fish', 0.75, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT12YBJGL31l1WdsITnQDpE3Qb04s9SKyBlMUPw6frqO6AMrVKtth2Obehx_6iP--liHQv8lbQ&usqp=CAc')]
    paid = 0


}



export const ProxyState = new Proxy(new AppState(), {
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
