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

    }

    showTheMenu() {

    }

    makeTheOrder() {

    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
