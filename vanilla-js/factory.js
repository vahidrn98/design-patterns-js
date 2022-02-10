function ToyFactory() {
    this.toy = ToyDuck;
    this.createToy = function(obj) {
        switch (obj.toyType) {
            case("car"):
                this.toy = new ToyDuck(obj);
                return this.toy;
            default:
                this.toy = new ToyCar(obj);
                return this.toy;
        }
    }
}

function ToyDuck(toyObj) {
    this.color = toyObj.color;
    this.price = toyObj.price;
    return this;
}

function ToyCar(toyObj) {
    this.color = toyObj.color;
    this.price = toyObj.price;
    this.name = toyObj.name;
    return this;
}

let toyFactory = new ToyFactory();
let car = toyFactory.createToy({
            toyType : "car",
            color: "blue",
            price : 12,
            name : "honda"
})