class product { 
    constructor(name, price){
        this.name = name
        this.price = price 
    }
        getInfo(){
            return `Product: ${this.name},Price : Rs.${this.price}`
        }
}
// create an object 
const product1 = new product("laptop",75000)
// print info
console.log(product1.getInfo())