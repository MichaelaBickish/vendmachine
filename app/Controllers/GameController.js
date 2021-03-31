import { ProxyState } from '../AppState.js'
import { gameService } from '../Services/GameService.js'

function _draw(){
    let snack = ProxyState.snacks
    document.getElementById(`amt-paid`).innerHTML = `<h2>Paid: $${ProxyState.paid}</h2`
    document.getElementById(`snacks-avail`).innerHTML = `<div class="card">
    <img class="card-img-top" src="${snack.imgUrl}" alt="" style="width: 25vw">
    <div class="card-body">
      <h4 class="card-title">${snack.name}</h4>
      <p class="card-text">Price: $${snack.price}</p>
    </div>
  </div>`

}


export default class GameController {
    constructor(){
        ProxyState.on('snacks', _draw) 
        _draw()
    }

     pay(num){
    gameService.pay(num)
}
     buy(snack){
    gameService.buy(item)
}
        
    
}

