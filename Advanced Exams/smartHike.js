class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (!this.goals.hasOwnProperty(peak)) {
            this.goals[peak] = Number(altitude);
            return `You have successfully added a new goal - ${peak}`
        } else {
            return `${peak} has already been added to your goals`
        }
    }

    hike(peak, time, difficultyLevel) {
        time = Number(time);

        if (this.goals.hasOwnProperty(peak)) {
            let resource = time * 10;
            let diff = this.resources - resource ;
            if (diff < 0) {
                return `You don't have enough resources to complete the hike`;
            } else {
                this.resources -= resource;
                this.listOfHikes.push(peak, time, difficultyLevel);
                return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
            }
        } else {
            throw new Error(`${peak} is not in your current goals`)
        }
    }

    rest(time) {
        time = Number(time);

        let timeForRest = time * 10;
        this.resources += timeForRest;

        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time*10}% resources`;
        }
    }

    showRecord(criteria) {
        if (!this.listOfHikes) {
            return `${username} has not done any hiking yet`;
        }


    }



}

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));