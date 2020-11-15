const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const date = document.getElementById('date');

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

function showtime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todaydate = today.toDateString();
    const amPm = hour > 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;
    date.innerHTML = `${todaydate}`;
    setTimeout(showtime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
function setGreeting() {
    let today = new Date();
    let hour = today.getHours();
    if (hour < 12) {
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundImage = 'url("./img/morning.jpg")';
        greeting.innerHTML = "Good Morning";
        document.body.style.color = "white";

    } else if (hour < 18) {
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundImage = 'url("./img/afternoon.jpg")';
        greeting.innerHTML = "Good Afternoon";

    } else {
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundImage = 'url("./img/evening.jpg")';

        greeting.innerHTML = "Good Evening";
        document.body.style.color = "white";
    }


}

function getName() {
    if (localStorage.getItem("mykeyname") == null) {
        name.innerHTML = '[Enter name]';
    } else {
        name.innerHTML = localStorage.getItem("mykeyname");
    }
}

function setName(e) {
    if (e.type === "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem("mykeyname", e.target.innerHTML);
            name.blur();
        }
    } else {
        localStorage.setItem("mykeyname", e.target.innerHTML);
    }
}

//Functions call
showtime();
setGreeting();
getName();