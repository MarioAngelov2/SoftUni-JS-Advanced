class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
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
        let diff = Math.abs(car.mileage - Number(desiredMileage));

        if (!car) {
            throw Error(`${model} was not found!`);
        } 

        if (car.mileage >= desiredMileage) {
            return;
        } 

        if (diff <= 40000) {
            let newPrice = car.price * 0.95;
            car.price -= newPrice; 
        }

        if (diff > 40000) {
            let newPrice = car.price * 0.90;
            car.price -= newPrice;
        }

        let index = this.availableCars.indexOf(car);
        this.availableCars.splice(index, 1);
        this.soldCars.push({
            model: car.model,
            horsepower: car.horsepower,
            soldPrice: car.price
        });

        this.totalIncome += car.price;
        return `${model} was sold for ${car.price}$`
    }

    currentCar() {

    }

    salesReport(criteria) {

    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
