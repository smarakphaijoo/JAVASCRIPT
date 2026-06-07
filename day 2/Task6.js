class product{
    constructor(name, price){
        this.name = name
        this.price = price 
    }
    getInfo(){
        return `Product : ${this.name}, Price: Rs. ${this.price}`
    }
}

class foodProduct extends product{ 
    constructor(name, price, expiryDate){
        super(name, price) // calling parent constructor
        this.expiryDate = expiryDate
    }
    getInfo(){
        return `${super.getInfo()}, Expire Date: ${this.expiryDate}`
    }
}

const milk = new foodProduct("Milk", 200, "2026-07-09")
console.log(milk.getInfo())