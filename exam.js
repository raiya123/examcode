var getTime = () => {
    let time = new Date();
    let hours = (time.getHours() % 12).toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }


    let result = document.querySelector('#timer');
    let message = document.querySelector('#messages');

    if (time.getHours() == 12) {
        result.innerHTML = time.getHours() + ":" + minutes + ":" + seconds + "PM";
    }

    if (time.getHours() < 12) {
        result.innerHTML = hours + ":" + minutes + ":" + seconds + " " + "AM";
        message.innerHTML = "Good Morning !";
    }

    if (time.getHours() > 12 && time.getHours() < 17) {
        result.innerHTML = hours + ":" + minutes + ":" + seconds + " " + "PM";
        message.innerHTML = "Good Afternoon !";
    }

    if (time.getHours() >= 17 && time.getHours() < 19) {
        result.innerHTML = hours + ":" + minutes + ":" + seconds + " " + "PM";
        message.innerHTML = "Good Evening !";
    }

    if (time.getHours() >= 19) {
        result.innerHTML = hours + ":" + minutes + ":" + seconds + " " + "PM";
        message.innerHTML = "Good Night !";
    }


    
}
setInterval(getTime, 1000);