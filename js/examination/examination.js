// //You will be given a class that you need to test here. 
// class GameModel {
//   #score
//   constructor() {
//     this.#score = 0
//   }
//   getScore() {
//     return this.#score
//   }
// }

export class GameView {
  #model
  constructor(model) {
    this.#model = model
  }
  getResultsHTML() {
    return "<h2>Poäng: " + this.#model.getScore() + "</h2>"
  }
}