class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        spaceRequired = Number(spaceRequired);

        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.")
        } else if (!this.plants.includes(plantName)) {
            this.plants.push(
                {
                    plantName: plantName,
                    spaceRequired: spaceRequired,
                    ripe: false,
                    quantity: 0
                }
            )

            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`;
        };
    }

    ripenPlant(plantName, quantity) {
        quantity = Number(quantity);

    }

    harvestPlant(plantName) {

    }

    generateReport() {

    }

}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));
