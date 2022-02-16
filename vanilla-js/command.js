class BankAccount {

    constructor(amount){
        this.amount = amount
    }

  checkAmount() {
      console.log(this.amount)
  }
  
  withdrawMoney(withdrawamount) {
    if(withdrawamount > this.amount){
        console.log("Not enough money")
    }
    else{
        this.amount -=  withdrawamount
    }
  }
   depositAmount(money){
        this.amount += money
    }
}

class AccountManager{
    request(command,amount){
        command.execute(amount);
    }
}

class Command{
    constructor(account){
        this.account =account;
    }

    execute(){

    }
}

class CheckAmount extends Command{
    constructor(account){
        super();
        this.account = account;
    }

    execute(){
        this.account.checkAmount();
    }
}

class DepositAmount extends Command{
    constructor(account){
        super();
        this.account = account;
    }

    execute(amount){
        this.account.depositAmount(amount);
    }
}

class WithDrawAmount extends Command{
    constructor(account){
        super();
        this.account = account;
    }

    execute(amount){
        this.account.withdrawMoney(amount);
    }
}

const manager = new AccountManager();
const account = new BankAccount(100)
const check = new CheckAmount(account);
manager.request(check)
const withdraw = new WithDrawAmount(account);
const deposit = new DepositAmount(account);
manager.request(withdraw,10)
manager.request(check)
manager.request(deposit,50)
manager.request(check)