function solve(tickets, criteria) {

    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticketList = [];

    for (let line of tickets) {
        let [destination, price, status] = line.split('|');
        price = Number(price)
        let newTicket = new Tickets(destination, price, status);
        ticketList.push(newTicket)
    }

    ticketList.sort((a, b) => {
        if (criteria === 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (criteria === 'status') {
            return a.status.localeCompare(b.status);
        } else {
            return a.price - b.price;
        }
    });

    return ticketList
    //console.log(JSON.stringify(ticketList))
}
// solve(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination')

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status')