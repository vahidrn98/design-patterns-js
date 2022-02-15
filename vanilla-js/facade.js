class Inventory{
  constructor(){
    this.products = {
      "shampoo":20,
      "conditioner":20,
      "hair serum": 1000,
    }
  }

  isAvailable(order){
    return order.amount <= this.products[order.productName]
  }

}

class BuyingProduct extends Inventory {
  constructor(){
    super();
  }
  buyProduct(product) {
    if(this.isAvailable(product)){
      const customer = new BuyProduct(product)
      const message = customer.buy();
      console.log(message)
      return message
    }
    const customer = new PreOrderProduct(product);
    const message = customer.preOrder()
    console.log(message);
    return message
}

}

class BuyProduct{
  constructor(order){
    this.order = order;
  }
  buy(){
    return `${this.order.amount} bottles of ${this.order.productName} are available. Click on "buy" to purchase them.`
  }
  
}

class PreOrderProduct{
  constructor(order){
    this.order = order;
  }
  preOrder(){
     return `${this.order.amount} bottles of ${this.order.productName} are not available. You can Pre-order them on the next page.`
  }
}