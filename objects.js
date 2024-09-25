class Product {
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity){
        this.product = product;
        this.quantity = quantity;
    }
    getTotalPrice(){
        return this.quantity * this.product.price;
    }
}

class ShoppingCart {
    constructor(){
        this.items = [];
    }
    addItem(product, quantity){
        const item = new ShoppingCartItem(product, quantity);
        this.items.push(item);
    }
    removeItem(index){
        this.items.splice(index, 1);
    }
    getTotalPrice(){
        let total = 0;
        for(let i = 0; i < this.items.length; i++){
            total += this.items[i].getTotalPrice();
        }
        return total;
    }
    displayCartItems(){
        for(let i = 0; i < this.items.length; i++){
            console.log(this.items[i].product.name + " " + this.items[i].product.price + " " + this.items[i].quantity);
        }
    }
}

const product1 = new Product(1, 'Laptop', 999.99);
const product2 = new Product(2, 'Headphones', 49.99);
const product3 = new Product(3, 'Mouse', 29.99);
const cart = new ShoppingCart();
cart.addItem(product1, 1);
cart.addItem(product2, 2); 
cart.addItem(product3, 3); 
cart.displayCartItems();
cart.removeItem(2);
cart.displayCartItems();
