class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        let errorMsg = `The money is not enough to pay the stay at the camp.`;

        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw Error(`Unsuccessful registration at the camp.`);
        }

        if (this.listOfParticipants.includes(name)) {
            throw Error(`The ${name} is already registered at the camp.`);
        }

        if (condition === 'student' && money < this.priceForTheCamp.student) {
            return errorMsg;
        } else if (condition === 'chiild' && money > this.priceForTheCamp.child) {
            return errorMsg;
        } else if (condition === 'collegian' && money > this.priceForTheCamp.collegian) {
            return errorMsg;
        }

        this.listOfParticipants.push({
            name: name,
            condition: condition,
            power: 100,
            wins: 0,
        });

        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        let participant = this.listOfParticipants.find(participant => participant.name === name);

        if (!participant) {
            return `The ${name} is not registered in the camp.`
        } else {
            let index = this.listOfParticipants.indexOf(participant);
            this.listOfParticipants.splice(index, 1);
            return `The ${name} removed successfully.`
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let participantOne = this.listOfParticipants.find(participant => participant.name === participant1);
        let participantTwo = this.listOfParticipants.find(participant => participant.name === participant2);
        
        if (typeOfGame === "WaterBalloonFights") {
            if (!participantOne || !participantTwo) {
                throw new Error(`Invalid entered name/s.`);
            } 

            if (participantOne.condition !== participantTwo.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (participantOne.power > participantTwo.power) {
                participantOne.wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (participantOne.power < participantTwo.power) {
                participantTwo.wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }
        } else if (typeOfGame === "Battleship") {
            if (!participant1) {
                throw new Error(`Invalid entered name/s.`)
            }
            participantOne.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }

    toString() {

    }

}
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// const participantType = {
//     Student: 'student',
//     Child: 'child',
//     Collegian: 'collegian' 
// }