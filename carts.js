// 1. create a constructor function `Product` with two private properties, `name` and `price` respectively.
function Product(names, prices) {
    // Private properties
    let name = names;
    let price = prices;

    // Getter for name
    this.getName = function() {
        return name;
    };

    // Getter for price
    this.getPrice = function() {
        return price;
    };
}
const product1 = new Product("Apple", 1.99);
console.log(product1.getName());
console.log(product1.getPrice());



// 2. create another constructor function `ShoppingCart` with a private property of `items` holding an empty array.
function ShoppingCart() {
    let items = [];


     // Method to add an item to the cart
    this.addItem = function(item) {
        return items.push(item);
    };

    // method to remove an item.
    this.removeItem = function(item) {
        return items.pop(item)
    }

     // Method to get the cart items in the cart
    this.getCartItems = function() {
        return items.slice(); // Return a copy of the items array
    };

    // get total item from the array
    this.getTotal = function() {
        return items.length;
    }
}



// to test the function 
const items = new ShoppingCart()
items.addItem("shoe");
items.addItem("shirt");

console.log(items.getItems());
items.removeItem()

console.log(items.getItems());
items.addItem("coke");

console.log(items.getItems());
console.log(items.getTotal())

