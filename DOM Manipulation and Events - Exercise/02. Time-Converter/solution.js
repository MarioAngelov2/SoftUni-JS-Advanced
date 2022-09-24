function attachEventsListeners() {

    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');

    let unitsInfo = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    document.getElementById('daysBtn').addEventListener('click', convert);
    document.getElementById('hoursBtn').addEventListener('click', convert);
    document.getElementById('minutesBtn').addEventListener('click', convert);
    document.getElementById('secondsBtn').addEventListener('click', convert);

    function convertUnits(value, unit) {
        debugger;
        let days = value / unitsInfo[unit];

        return {
            days: days,
            hours: days * unitsInfo.hours,
            minutes: days * unitsInfo.minutes,
            seconds: days * unitsInfo.seconds
        }
    }

    function convert(ev) {
        let input = ev.target.parentElement.querySelector('[type="text"]')
        let time = convertUnits(Number(input.value), input.id);

        daysInputElement.value = time.days;
        hoursInputElement.value = time.hours;
        minutesInputElement.value = time.minutes;
        secondsInputElement.value = time.seconds;
    }

}