import { ProxyState } from "../AppState.js";

class GameService {
    pay(num){
        ProxyState.paid += num
        ProxyState.paid=ProxyState.paid
    }
    
    buy(item){

        paid -= ProxyState.snack.price

        ProxyState.snack=ProxyState.snack
    }
}
export const gameService = new GameService()