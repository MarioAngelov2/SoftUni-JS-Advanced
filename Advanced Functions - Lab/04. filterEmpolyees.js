function filterEmployees(data, criteria) {

    let objWorkers = JSON.parse(data);
    let [key, value] = criteria.split('-');
    let counter = 0;

    for (let worker of objWorkers) {
      if (key === 'all' || worker[key] === value) {
        console.log(`${counter}. ${worker.first_name} ${worker.last_name} - ${worker.email}`);
        counter++;
      }
    }
}