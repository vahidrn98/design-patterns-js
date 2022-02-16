class ShoppingCartModel
{ 
   constructor(itemNumber,itemName,itemQuantity,itemPrice){
       this.itemNumber=itemNumber
       this.itemName=itemName
       this.itemQuantity=itemQuantity
       this.itemPrice = itemPrice
   }

   getNumber(){
       return this.itemNumber
   }

   getName(){
       return this.itemName
   }

   getQuantity(){
       return this.itemQuantity
   }

   getPrice(){
       return this.itemPrice
   }
} 

class ShoppingCartView  
{
    constructor(){
        this.controller = null;
    }
    registerWith(controller) {
        this.controller = controller;
        this.controller.addView(this); 
    }
    
    displayItem(itemNumber,itemName,itemQuantity,itemPrice) 
    { 
        console.log(`Item Number: ${itemNumber}\nItem: ${itemName}\nQuantity: ${itemQuantity}\nPrice: ${itemPrice}`); 
    } 

    changeItemQuantity(itemNumber,newQuantity){
        this.controller.changeItemQuantity(itemNumber,newQuantity);
    }

    buyItem(name,amount,price){
        this.controller.addModel(name,amount,price);
    }
} 

class ShoppingCartController  
{ 
    constructor(){
        this.model = null;
        this.view = null;
        this.itemList = [];
    }
    
    addView(view) {
        this.view = view;
    }
    addModel(name,amount,price) {
        this.model = new ShoppingCartModel(this.itemList.length,name,amount,price);
        this.itemList.push(this.model)
        this.updateView();
    }

    updateView(){
        this.itemList.forEach((item)=>{
            this.view.displayItem(item.itemNumber,item.itemName,item.itemQuantity,item.itemPrice);
        });
    }

    changeItemQuantity(number,quantity){
        this.itemList[number].itemQuantity = quantity;
        this.updateView();
    }

    //write code here 
    
} 