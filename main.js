const eidulfitr = "15 february 2022";
const daysDiv = document.getElementById("days");
const hoursDiv = document.getElementById("hours");
const minuteDiv = document.getElementById("minute");
const secondDiv = document.getElementById("second");


function countdown(){
    const eidday = new Date(eidulfitr);
    const currentday = new Date();

    const totaltime = (eidday- currentday)/1000;
    const days = Math.floor(totaltime / 3600 / 24);
    const ours = Math.floor((totaltime /3600) % 24);
    const minute = Math.floor(totaltime /60) % 60;
    const seconds = Math.floor(totaltime) % 60;

    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = ours;
    minuteDiv.innerHTML = minute;
    secondDiv.innerHTML = seconds;

    console.log(days, ours, minute, seconds);
    
}
countdown();
setInterval(countdown, 1000);