class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        for (let el of vegetables) {
            let [type, quantity, price] = el.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let product = this.availableProducts.find(product => product.type === type);

            if (product) {
                product.quantity += quantity;

                if (price > product.price) {
                    product.price += price;
                }
            }
            if (!product) {
                this.availableProducts.push({
                    type: type,
                    quantity: Number(quantity),
                    price: Number(price)
                })
            }
        }
        let resultProduct = this.availableProducts.map(product => product.type);
        return `Successfully added ${resultProduct.join(', ')}`
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (let el of selectedProducts) {
            let [type, quantity] = el.split(' ');
            quantity = Number(quantity);

            let product = this.availableProducts.find(product => product.type === type)

            if (!product) {
                throw Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            if (quantity > product.quantity) {
                throw Error(`The quantity ${quantity} for the vegetable ${product.type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            totalPrice += product.price * quantity;
            product.quantity -= quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        
    }

    revision() {

    }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.buyingVegetables(["Okra 1"]));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

