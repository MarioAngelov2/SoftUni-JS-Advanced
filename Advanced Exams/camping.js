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

        if (condition === 'student' && money > this.priceForTheCamp.student) {
            return errorMsg;
        } else if (condition === 'chiild' && money > this.priceForTheCamp.child) {
            return errorMsg;
        } else if (condition === 'collegian' && money > this.priceForTheCamp.collegian) {
            return errorMsg;
        }
    }

    unregisterParticipant(name) {
        
    }

    timeToPlay(typeOfGame, participant1, participant2) {

    }

    toString() {

    }

}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const participantType = {
//     Student: 'student',
//     Child: 'child',
//     Collegian: 'collegian' 
// }