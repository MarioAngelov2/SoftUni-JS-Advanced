class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {

        for (let el of products) {
            let [product, quantity, price] = el.split(' ');

            if (price <= this.budgetMoney) {
                this.stockProducts = {
                    product: product,
                    quantity: quantity
                }
                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${quantity} ${product}`)
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${product}`)
            }
            this.stockProducts.product += quantity;
        }
        return this.history.join('\n')
    }

    addToMenu(meal, neededProducts, price) {
        let productList = {};

        for (let el of neededProducts) {
            let [product, quantity] = el.split(' ');
            productList[product] = quantity;
        }

        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = { products: productList, price };
            if (Object.keys(this.menu).length === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    }

    showTheMenu() {
       
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`
        } 

       return Object.entries(this.menu).map(menu => `${menu[0]} - $ ${menu[1].price}`).join('\n');
        
    }   

    makeTheOrder() {

    }
}
let kitchen = new Restaurant(1000);
console.log(kitchen.showTheMenu());

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
