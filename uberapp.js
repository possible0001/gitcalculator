let firstpage = document.getElementById("firstUberdivJs");
let formUber = document.getElementById("formUber");
let wholeAll = document.getElementById("all")
let startRide = document.getElementById("startRide")
let startCount = document.getElementById("startCount")
let back = document.getElementById("back")
let start = document.getElementById("start")
let pause = document.getElementById("pause")
let yes = document.getElementById("yes")
let no = document.getElementById("no")
let counting = document.getElementById("counting")
let timer = document.getElementById("timer")
let stoping = document.getElementById("stop")
let timeTaken = document.getElementById("timeTaken")
let baseFare = document.getElementById('baseFare')
let timeFare = document.getElementById('timeFare')
let initalTotal = document.getElementById("initalTotal")
let tax = document.getElementById("taxPercent")
let totalAmount = document.getElementById("totalAmount")
let ridEnded = document.getElementById("ridEnded")
formUber.style.display = "none"
startCount.style.display = "none"
counting.style.display = "none"
paused.style.display = "none"
wholeAll.style.background = "rgb(6, 195, 6)"
stoppedNo.style.display = "none"


// firstpage
setTimeout(() => {
    formUber.style.display = "block"
    firstpage.style.display = "none"
    counting.style.display = "none"
    wholeAll.style.background = "rgb(6, 195, 6)"
}, 7000);

// confirmation of ride
startRide.addEventListener("click", () => {
    let from = document.getElementById("from").value.trim();
    let to = document.getElementById("to").value.trim();
    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");

    error1.textContent = "";
    error2.textContent = "";

    if (from === "" && to === "") {
        error1.textContent = "Please fill in your current location";
        error2.textContent = "Please fill in your destination.";
        return;
    } else if (from === "") {
        error1.textContent = "Please fill in your current location";
        return;
    } else if (to === "") {
        error2.textContent = "Please fill in your destination";
        return;
    }

    let confirm = document.getElementById("confirm")
    wholeAll.style.background = "rgb(6, 195, 6)"
    confirm.textContent = `You Are Requesting a Drive From ${from} To ${to} Please Confirm Your Ride`
    firstpage.style.display = "none"
    formUber.style.display = "none"
    counting.style.display = "none"
    startCount.style.display = "block"
})

// back button
back.addEventListener("click", () => {
    formUber.style.display = "block"
    startCount.style.display = "none"
})

// start button
let from;
let to;
let all;
let secs;
let mins;
let hours
start.addEventListener("click", () => {
    from = document.getElementById("from").value.trim();
    to = document.getElementById("to").value.trim();
    formUber.style.display = "none"
    startRide.style.display = "none"
    startCount.style.display = "none"
    counting.style.display = "block"

    let startUp = 0
    let timers = () => {
        startUp++
        // tartSec++
        hours = Math.floor(startUp / 3600)
        mins = Math.floor(startUp % (60 * 60) / 60)
        secs = startUp % 60
        mins < 10 ? mins = `0${mins}` : mins = mins
        secs < 10 ? secs = `0${secs}` : secs = secs
        hours < 10 ? hours = `0${hours}` : hours = hours
        all = `${hours}:${mins}:${secs}`
        timer.textContent = `Ride in progress ${all} you are now moving from ${from} to ${to}`

    }

    let setting = setInterval(() => {
        timers()
        // pause button
        let paused = document.getElementById("paused")
        let pausedPara = document.getElementById("pausedPara")
        pause.addEventListener("click", () => {
            clearInterval(setting)
            pausedPara.textContent = "paused do you wish to continue the ride"
            paused.style.display = "block"
            counting.style.display = "none"
        })
    }, 1000)

    // yes button
    yes.addEventListener("click", () => {
        setting = setInterval(() => {
            timers()
        }, 1000)
        counting.style.display = 'block'
        paused.style.display = "none"
    })
    // no button
    no.addEventListener("click", () => {
        paused.style.display = "none"
        stoppedNo.style.display = "block"
        timeTaken.textContent = `${all}`
        let timeMin;
        let timeSec;
        let base;
        ridEnded.textContent = `Your Ride From ${from} To ${to} As Ended`
        if (secs >= 1) {
            timeSec = secs * 2;
            timeFare.textContent = `#${timeSec}`
            base = 50;
            baseFare.textContent = `#${base}`;
            totalS = base + timeSec
            initalTotal.textContent = `#${totalS}`
            let taxS = Math.floor(totalS * (10 / 100));
            tax.textContent = `#${taxS}`
            totalAllS = totalS + taxS;
            totalAmount.textContent = `#${totalAllS}`
        }
        if (mins >= 1) {
            timeMin = timeSec * 10;
            timeFare.textContent = `#${timeMin}`
            base = 200;
            totalM = base + timeMin;
            initalTotal.textContent = `#${totalM}`
            baseFare.textContent = `#${base}`;
            let taxM = totalM * (10 / 100);
            tax.textContent = `#${taxM}`
            totalAllM = totalM + taxM;
            totalAmount.textContent = `#${totalAllM}`
        }
        let timeHours
        if (hours >= 1) {
            timeHours = timeMin * 10;
            timeFare.textContent = `#${timeHours}`
            base = 300;
            totalH = base + timeHours;
            initalTotal.textContent = `#${totalH}`
            baseFare.textContent = `#${base}`;
            let taxH = totalH * (10 / 100);
            tax.textContent = `#${taxH}`
            totalAllH = totalH + taxH;
            totalAmount.textContent = `#${totalAllH}`

        }
    })
})
stoping.addEventListener("click", () => {
    let stoppedNo = document.getElementById("stoppedNo")
    stoppedNo.style.display = "block"
    counting.style.display = "none"
    paused.style.display = "none"
    stoppedNo.style.display = "block"
    timeTaken.textContent = `${all}`
    let timeMin;
    let timeSec;
    let base;
    ridEnded.textContent = `Your Ride From ${from} To ${to} As Ended`
    if (secs >= 1) {
        timeSec = secs * 2;
        timeFare.textContent = `#${timeSec}`
        base = 50;
        baseFare.textContent = `#${base}`;
        totalS = base + timeSec
        initalTotal.textContent = `#${totalS}`
        let taxS = Math.floor(totalS * (10 / 100));
        tax.textContent = `#${taxS}`
        totalAllS = totalS + taxS;
        totalAmount.textContent = `#${totalAllS}`
    }
    if (mins >= 1) {
        timeMin = timeSec * 20;
        timeFare.textContent = `#${timeMin}`
        base = 200;
        totalM = base + timeMin;
        initalTotal.textContent = `#${totalM}`
        baseFare.textContent = `#${base}`;
        let taxM = totalM * (10 / 100);
        tax.textContent = `#${taxM}`
        totalAllM = totalM + taxM;
        totalAmount.textContent = `#${totalAllM}`
    }
    let timeHours
    if (hours >= 1) {
        timeHours = timeMin * 10;
        timeFare.textContent = `#${timeHours}`
        base = 300;
        totalH = base + timeHours;
        initalTotal.textContent = `#${totalH}`
        baseFare.textContent = `#${base}`;
        let taxH = totalH * (10 / 100);
        tax.textContent = `#${taxH}`
        totalAllH = totalH + taxH;
        totalAmount.textContent = `#${totalAllH}`

    }
})