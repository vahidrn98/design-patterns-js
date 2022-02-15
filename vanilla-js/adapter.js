// old interface
class TruthAndDare {
  constructor(){
    this.turn = Math.floor(Math.random() * 2) + 1;
  }
  Getturn(){
    if(this.turn == 1){
      this.turn = 2
    }else{
      this.turn = 1
    }
    return this.turn
  }
  playGame(playerOnename,playerTwoname){
    if(this.Getturn() == 1){
      return`${playerOnename}'s turn`
    }else{
      return `${playerTwoname}'s turn`
    }
  }
}

// new interface
class NewTruthAndDare {
  constructor(randomValue){
   this.turn = randomValue;
  }

  newplayGame(playerOnename,playerTwoname){
    console.log(this.turn);
     if(this.turn %2== 0){
      
      return`${playerOnename}'s turn`
    }else{
      console.log(`${playerTwoname}'s turn`);
      return `${playerTwoname}'s turn`
    }
  }
}

// Adapter Class
class Adapter {
  constructor(randomValue){
    this.turn = randomValue;
  }

  playGame(playerOnename,playerTwoname){
    const game = new NewTruthAndDare(this.turn);
    return game.newplayGame(playerOnename,playerTwoname);
  }
      
}