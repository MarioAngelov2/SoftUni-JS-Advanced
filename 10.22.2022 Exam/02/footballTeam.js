class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        for (let el of footballPlayers) {
            let [name, age, playerValue] = el.split('/');
            playerValue = Number(playerValue);
            age = Number(age);

            let playerName = this.invitedPlayers.find(playerName => playerName.name === name);

            if (playerName) {
                if (playerValue > playerName.playerValue) {
                    playerName.playerValue = playerValue;
                }
            }

            if (!playerName) {
                this.invitedPlayers.push({
                    playerName: name,
                    age: age,
                    playerValue: playerValue
                })
            }
        }

        let player = this.invitedPlayers.map(player => player.playerName);
        return `You successfully invite ${player.join(', ')}.`
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');

        let currentPlayer = this.invitedPlayers.find(player => player.playerName === name);

        if (!currentPlayer) {
            throw Error(`${name} is not invited to the selection list!`);
        }
        let diff = currentPlayer.playerValue - playerOffer

        if (playerOffer < currentPlayer.playerValue) {
            throw Error(`The manager's offer is not enough to sign a contract with ${name}, ${diff} million more are needed to sign the contract!`)
        }

        currentPlayer.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {
        let currentPlayer = this.invitedPlayers.find(player => player.playerName === name);

        if (!currentPlayer) {
            throw Error(`${name} is not invited to the selection list!`);
        }

        if (age > currentPlayer.age) {
            let ageDiff = age - currentPlayer.age;

            if (ageDiff < 5) {
                return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`;
            } else if (ageDiff > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        let res = '';
        res += `Players list:\n`;
        let sorted = this.invitedPlayers.sort((a, b) => a.playerName - b.playerName)
        sorted.map(player => (res += `Player ${player.playerName}-${player.playerValue}\n`));

        return res
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
