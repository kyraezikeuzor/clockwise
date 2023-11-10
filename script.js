// Hide Second clock
document.getElementById("clock2").style.display = "none";

//Hide Fliqlo Button
document.getElementById("button1").disabled = true;

function displayCircle() {
    document.getElementById("clock1").style.display = "none";
    document.getElementById("clock2").style.display = "flex";
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = true;
}


function displayFliqlo() {
    document.getElementById("clock1").style.display = "flex";
    document.getElementById("clock2").style.display = "none";
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = false;
}

function setClock() {

    let hour = new Date().getHours() % 12;
    let hours; 

    if (hour == 0 || hour == 12) {
        hours = 12;
    }
    else {
        hours = hour;
    }

    let minutes = new Date().getMinutes() % 60;
    let seconds = new Date().getSeconds() % 60;

    if (new Date().getMinutes() < 10)
    {
        minutes = "0" + minutes;
    }

    if (new Date().getSeconds() < 10)
    {
        seconds = "0" + seconds;
    }

    if (new Date().getHours() < 12)
    {
        timeOfDay = "AM";
    } 
    else 
    {
        timeOfDay = "PM";
    }

    //set content
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("time").innerHTML = timeOfDay;
    setTimeout(setClock, 1000);
}

setClock();


function rotateClock() {
    let sec = new Date().getSeconds();
    let rotate = 90 + sec * 6;
    let rotateText = "rotate(" + rotate + "deg)";

    document.getElementById("line1").innerHTML = sec;
    document.querySelector("#line1").style.transform = rotateText;
    
    setTimeout(rotateClock, 1000);
}

rotateClock();