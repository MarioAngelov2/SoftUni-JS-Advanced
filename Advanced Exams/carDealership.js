class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {

        horsepower = Number(horsepower);
        price = Number(price);
        mileage = Number(mileage);

        if (model === '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw Error(`Invalid input!`);
        } else {
            this.availableCars.push({
                model: model,
                horsepower: horsepower,
                price: price,
                mileage: mileage
            })
            return `New car added: ${model} - ${Number(horsepower).toFixed(2)} HP - ${Number(mileage).toFixed(2)} km - ${Number(price).toFixed(2)}$`
        }
    }

    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(car => car.model === model);
        let diff = car.mileage - Number(desiredMileage);

        if (!car) {
            throw Error(`${model} was not found!`);
        }

        if (diff > 0 && diff <= 40000) {
            car.price = car.price * 0.95;
        } else if (diff > 0 && diff > 40000) {
            car.price = car.price * 0.90;
        }

        let index = this.availableCars.indexOf(car);
        this.availableCars.splice(index, 1);
        this.soldCars.push({
            model: car.model,
            horsepower: car.horsepower,
            soldPrice: car.price
        });

        this.totalIncome += car.price;
        return `${model} was sold for ${car.price.toFixed(2)}$`
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return `There are no available cars`;
        } else {
            let result = '';
            result += `-Available cars:\n`;
            this.availableCars.map(car => { result += `---${car.model} - ${car.horsepower} HP - ${car.mileage} km - ${car.price}$\n` });
            return result;
        }
    }

    salesReport(criteria) {
        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw Error(`Invalid criteria!`);
        }

        if (criteria === 'horsepower') {
            let result = '';
            result += `-${dealership.name} has a total income of ${this.totalIncome}$\n`;
            result += `-${this.soldCars.length} cars sold:\n`
            let sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
            sorted.map(car => { result += `---${car.model} - ${car.horsepower} HP - ${car.soldPrice}$\n` });
            return result;
        } else if (criteria === 'model') {
            let result = '';
            result += `-${dealership.name} has a total income of ${this.totalIncome}$\n`;
            result += `-${this.soldCars.length} cars sold:\n`
            let sorted = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
            sorted.map(car => { result += `---${car.model} - ${car.horsepower} HP - ${car.soldPrice}$\n` });
            return result;
        }
    }
}

let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));
