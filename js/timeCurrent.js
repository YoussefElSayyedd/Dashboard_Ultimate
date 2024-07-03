const time = document.querySelector('.time .theHour');

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours <= 12? "AM" : "PM";
    hours = hours < 10? "0" + hours : hours % 12;
    minutes = minutes < 10? "0" + minutes : minutes;
    seconds = seconds < 10? "0" + seconds : seconds;
    time.innerHTML = `${hours}:${minutes}:${seconds} ${amOrPm}`;
}, 1000)
