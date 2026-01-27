let firstHotelPage = document.getElementById("firstHoteldiv");
let loading1 = document.getElementById("loading1");
let loading2 = document.getElementById("loading2");
let loading3 = document.getElementById("loading3");
let hotelForm = document.getElementById("hotelForm");
let next = document.getElementById('next')
let userName = document.getElementById("userName")
let all = document.getElementById("all")
let freeAcc = document.getElementById("freeAcc")
let hotelAcc = document.getElementById("hotelAcc")
let typeOfAccomodation = document.getElementById("typeOfAccomodation")
let forFree = document.getElementById("forFree")
let forFreeC = document.getElementById("forFreeC")
let forHotel = document.getElementById("forHotel")
let forHotelContent1 = document.getElementById("forHotelContent1")
let daysNext = document.getElementById("daysNext")
let typeOfRoom = document.getElementById("typeOfRoom")
let userNameRoom = document.getElementById("userNameRoom")
let howDays = document.getElementById("howDays")
let Standard = document.getElementById("Standard")
let StandardRoomC = document.getElementById("StandardRoomC")
let EmeraldRoomC = document.getElementById("EmeraldRoomC")
let StandardRoom = document.getElementById("StandardRoom")
let EmeraldRoom = document.getElementById("EmeraldRoom")
let Continue = document.getElementById("Continue")
let cancel = document.getElementById("cancel")
let cancelEmerald = document.getElementById("cancelEmerald")
let ContinueSt = document.getElementById("ContinueSt")
let ContinueEmeraldC = document.getElementById("ContinueEmeraldC")
let ContinueStContent = document.getElementById("ContinueStContent")
let ContinueEmeraldContent = document.getElementById("ContinueEmeraldContent")
let Emerald = document.getElementById("Emerald")
let Supreme = document.getElementById("Supreme")
let ContinueEmerald = document.getElementById("ContinueEmerald")
let SupremeRoom = document.getElementById("SupremeRoom")
let PresidentialRoom = document.getElementById("PresidentialRoom")
let SupremeRoomC = document.getElementById("SupremeRoomC")
let ContinueSupremeC = document.getElementById("ContinueSupremeC")
let ContinuePresidentialC = document.getElementById("ContinuePresidentialC")
let PresidentialRoomC = document.getElementById("PresidentialRoomC")
let continueSupreme = document.getElementById("continueSupreme")
let continuePresidential = document.getElementById("continuePresidential")
let ContinueSupremeContent = document.getElementById("ContinueSupremeContent")
let ContinuePresidentialContent = document.getElementById("ContinuePresidentialContent")
let cancelSupreme = document.getElementById("cancelSupreme")
let cancelPresidential = document.getElementById("cancelPresidential")
let Presidential = document.getElementById("Presidential")
let daysMany = document.getElementById("daysMany")
let returnToHome = document.getElementById("returnToHome")
let daysBack = document.getElementById("daysBack")
let roomBack = document.getElementById("roomBack")
let accBack = document.getElementById("accBack")
loading1.style.display = "none"
loading2.style.display = "none"
loading3.style.display = "none"
hotelForm.style.display = "none"
typeOfAccomodation.style.display = "none"
forFree.style.display = "none"
forHotel.style.display = "none"
typeOfRoom.style.display = "none"
StandardRoom.style.display = "none"
EmeraldRoom.style.display = "none"
SupremeRoom.style.display = "none"
PresidentialRoom.style.display = "none"
ContinueSt.style.display = "none"
ContinueEmeraldC.style.display = "none"
ContinueSupremeC.style.display = "none"
ContinuePresidentialC.style.display = "none"


setTimeout(() => {
    loading1.style.display = "block";
    loading2.style.display = "none"
    loading3.style.display = "none"
    firstHotelPage.style.display = "none"
}, 7000);
setTimeout(() => {
    loading1.style.display = "none"
    loading2.style.display = "block"
    hotelForm.style.display = "none"
}, 8000);
setTimeout(() => {
    loading1.style.display = "none"
    loading2.style.display = "none"
    loading3.style.display = "block"
    hotelForm.style.display = "none"
}, 9000);
setTimeout(() => {
    loading1.style.display = "none"
    loading2.style.display = "none"
    loading3.style.display = "none"
    hotelForm.style.display = "block"
}, 10000);


let firstName;
let lastName;
next.addEventListener("click", () => {
    lastName = document.getElementById("lastName").value.trim()
    firstName = document.getElementById("firstName").value.trim()
    let error1 = document.getElementById("error1")
    let error2 = document.getElementById("error2")

    error1.textContent = ""
    error2.textContent = ""

    if (lastName === "" && firstName === "") {
        error1.textContent = "please input your First name"
        error2.textContent = "please input your Last name"
        return;
    }
    else if (firstName === "") {
        error1.textContent = "please input your First name"
        return;
    }
    else if (lastName === "") {
        error2.textContent = "please input your Last name"
        return;
    }
    typeOfAccomodation.style.display = "block";
    hotelForm.style.display = "none";
    userName.textContent = `${firstName} ${lastName}`
})
freeAcc.addEventListener("click", () => {
    forFree.style.display = "block"
    typeOfAccomodation.style.display = "none"
    forFreeC.textContent = `Dear ${firstName} ${lastName}, Thank you for selecting a free Accomodation, our staff will get you
    the available room soon`
})


let days;
let dayle;
let hours;
let mns;
let secs;
hotelAcc.addEventListener("click", () => {
    forFree.style.display = "none"
    typeOfAccomodation.style.display = "none"
    forHotel.style.display = "block"
    forHotelContent1.textContent = `${firstName} ${lastName}`
    const futureCountDown = (futuredate) => {
        let future = new Date(futuredate).getTime()
        let now = new Date().getTime()
        let diff = future - now
        let realdays = 24 * 60 * 60 * 1000;
        let realHours = 60 * 60 * 1000;
        let realmins = 60 * 1000;
        let realSec = 1000;

        days = Math.floor(diff / realdays)
        hours = Math.floor((diff % realdays) / realHours)
        mns = Math.floor((diff % realHours) / realmins)
        secs = Math.floor((diff % realmins) / realSec)
        dayle = document.getElementById("myPara")
    }


    document.getElementById("dateButton").addEventListener("click", () => {
        setInterval(() => {
            let realtime = document.getElementById("duration").value
            futureCountDown(realtime)
            if (days > 0) {
                dayle.textContent = `ok ${firstName} ${lastName} you will be staying with us for ${days}Days and ${hours} hours`
                daysMany.textContent = "how many days"
            }
            else if (hours > 0) {
                console.log(hours)
                dayle.textContent = `ok ${firstName} ${lastName} you will be staying with us for  ${hours} hours`
                daysMany.textContent = "how many hours"
            }
            else {
                if (days < 0 || hours < 0 || dayle.textContent === ""){
                    dayle.textContent = "you have to choose a valid date to proceed"
                }z
            }
            console.log(`${days}days : ${hours}hours : ${mns}minutes : ${secs}seconds`)


            // standard time countDown
            if (days > 1 && hours > 1) {
                ContinueStContent.textContent = `${firstName} ${lastName} your rents expire in ${days}days : ${hours}hours : ${mns}minutes : ${secs}seconds`
            }
            else if (days < 1) {
                ContinueStContent.textContent = `${firstName} ${lastName} your rents expire in ${hours}hours : ${mns}minutes : ${secs}seconds`
            }
            else if (days > 1) {
                ContinueStContent.textContent = `${firstName} ${lastName} your rents expire in ${days}days : ${hours}hours : ${mns}minutes : ${secs}seconds`
            }


            // emerald time countDown
            if (days > 1 && hours > 1) {
                ContinueEmeraldContent.textContent = `${firstName} ${lastName} your rents expire in ${days}days : ${hours}hours : ${mns}minutes : ${secs}seconds`
            }
            else if (days < 1) {
                ContinueEmeraldContent.textContent = `${firstName} ${lastName} your rents expire in ${hours}hours : ${mns}minutes : ${secs}seconds`
            }
            else if (days > 1) {
                ContinueEmeraldContent.textContent = `${firstName} ${lastName} your rents expire in ${days}days : ${hours}hours : ${mns}minutes : ${secs}seconds`
            }


            // supreme time countdown 
            if (days > 1 && hours > 1) {
                ContinueSupremeContent.textContent = `${firstName} ${lastName} your rents expire in ${days}days : ${hours}hours : ${mns}minutes : ${secs}seconds`
            }
            else if (days < 1) {
                ContinueSupremeContent.textContent = `${firstName} ${lastName} your rents expire in ${hours}hours : ${mns}minutes : ${secs}seconds`
            }
            else if (days > 1) {
                ContinueSupremeContent.textContent = `${firstName} ${lastName} your rents expire in ${days}days : ${hours}hours : ${mns}minutes : ${secs}seconds`
            }


            // presidential time countdown
            if (days > 1 && hours > 1) {
                ContinuePresidentialContent.textContent = `${firstName} ${lastName} your rents expire in ${days}days : ${hours}hours : ${mns}minutes : ${secs}seconds`
            }
            else if (days < 1) {
                ContinuePresidentialContent.textContent = `${firstName} ${lastName} your rents expire in ${hours}hours : ${mns}minutes : ${secs}seconds`
            }
            else if (days > 1) {
                ContinuePresidentialContent.textContent = `${firstName} ${lastName} your rents expire in ${days}days : ${hours}hours : ${mns}minutes : ${secs}seconds`
            }
        }, 1000);

    })


    daysNext.addEventListener("click", () => {
        if (days < 0 || hours < 0 || dayle.textContent === "") {
            dayle.textContent = "you have to choose a valid date to proceed"
            return;
        }

        typeOfRoom.style.display = "block"
        forHotel.style.display = "none"
        userNameRoom.textContent = `${firstName} ${lastName}`
        if (days > 0 && hours > 0) {
            howDays.textContent = `${days}days ${hours}hours`
        }
        else if (days > 0) {
            howDays.textContent = ` ${days}days`
        }
        else if (hours > 0) {
            howDays.textContent = `${hours}hours`
        }

    })
})


Standard.addEventListener("click", () => {
    typeOfRoom.style.display = "none"
    StandardRoom.style.display = "block"
    let perHour = 500 * hours;
    let perDay = 12000 * days;
    let perHourPerDay = perDay + perHour
    if (days > 1 && hours > 1) {
        StandardRoomC.textContent = `Your [standard] room at [#12,000] per day and [#500] per hour, your bill of expiration of [${days}] days and [${hours}] hours is [#${perHourPerDay}]`
    }
    else if (days < 1) {
        StandardRoomC.textContent = `Your [standard] room at [#500] per hour, your bill of expiration of [${hours}] hours is [#${perHourPerDay}]`
    }
    else if (days > 1) {

        StandardRoomC.textContent = `Your [standard] room at [#12,000] per day, your bill of expiration of [${days}] days is [#${perHourPerDay}]`
    }
})


Continue.addEventListener("click", () => {
    StandardRoom.style.display = "none"
    ContinueSt.style.display = "block"
})


cancel.addEventListener("click", () => {
    StandardRoom.style.display = "none"
    typeOfRoom.style.display = "block"
})


Emerald.addEventListener("click", () => {
    typeOfRoom.style.display = "none"
    EmeraldRoom.style.display = "block"
    let perHourEmerald = 1000 * hours;
    let perDayEmerald = 24000 * days;
    let perHoursPerDAysEmerald = perDayEmerald + perHourEmerald;
    if (days > 1 && hours > 1) {
        EmeraldRoomC.textContent = `Your [Emerald] room at [#24,000] per day and [#1000] per hour, your bill of expiration of [${days}] days and [${hours}] hours is [#${perHoursPerDAysEmerald}]`
    }
    else if (days < 1) {
        EmeraldRoomC.textContent = `Your [Emerald] room at [#1000] per hour, your bill of expiration of [${hours}] hours is [#${perHoursPerDAysEmerald}]`
    }
    else if (days > 1) {

        EmeraldRoomC.textContent = `Your [Emerald] room at [#24,000] per day, your bill of expiration of [${days}] days is [#${perHoursPerDAysEmerald}]`
    }

})


ContinueEmerald.addEventListener("click", () => {
    EmeraldRoom.style.display = "none"
    ContinueEmeraldC.style.display = "block"
})


cancelEmerald.addEventListener("click", () => {
    EmeraldRoom.style.display = "none"
    typeOfRoom.style.display = "block"
})


Supreme.addEventListener("click", () => {
    typeOfRoom.style.display = "none"
    SupremeRoom.style.display = "block"
    let perHourSupreme = 2000 * hours;
    let perDaySupreme = 48000 * days;
    let perHoursPerDAysSupreme = perDaySupreme + perHourSupreme;
    if (days > 1 && hours > 1) {
        SupremeRoomC.textContent = `Your [Supreme] room at [#48,000] per day and [#2000] per hour, your bill of expiration of [${days}] days and [${hours}] hours is [#${perHoursPerDAysSupreme}]`
    }
    else if (days < 1) {
        SupremeRoomC.textContent = `Your [Supreme] room at [#2000] per hour, your bill of expiration of [${hours}] hours is [#${perHoursPerDAysSupreme}]`
    }
    else if (days > 1) {
        SupremeRoomC.textContent = `Your [Supreme] room at [#48,000] per day, your bill of expiration of [${days}] days is [#${perHoursPerDAysSupreme}]`
    }

})


continueSupreme.addEventListener("click", () => {
    SupremeRoom.style.display = "none"
    ContinueSupremeC.style.display = "block"
})


cancelSupreme.addEventListener("click", () => {
    SupremeRoom.style.display = "none"
    typeOfRoom.style.display = "block"
})


Presidential.addEventListener("click", () => {
    typeOfRoom.style.display = 'none'
    PresidentialRoom.style.display = "block"
    let perHoursPresidential = 4000 * hours;
    let perdaysPresidential = 96000 * days;
    let perHoursPerDAysPresidential = perdaysPresidential + perHoursPresidential;
    if (days > 1 && hours > 1) {
        PresidentialRoomC.textContent = `Your [Presidential] room at [#96,000] per day and [#4000] per hour, your bill of expiration of [${days}] days and [${hours}] hours is [#${perHoursPerDAysPresidential}]`
    }
    else if (days < 1) {
        PresidentialRoomC.textContent = `Your [Presidential] room at [#4000] per hour, your bill of expiration of [${hours}] hours is [#${perHoursPerDAysPresidential}]`
    }
    else if (days > 1) {
        PresidentialRoomC.textContent = `Your [Presidential] room at [#96,000] per day, your bill of expiration of [${days}] days is [#${perHoursPerDAysPresidential}]`
    }

})


continuePresidential.addEventListener("click", () => {
    PresidentialRoom.style.display = "none"
    ContinuePresidentialC.style.display = "block"
})


cancelPresidential.addEventListener("click", () => {
    PresidentialRoom.style.display = "none"
    typeOfRoom.style.display = "block"
})


returnToHome.addEventListener("click", () => {
    typeOfAccomodation.style.display = "block"
    forFree.style.display = 'none'
})
daysBack.addEventListener("click", ()=>{
    typeOfAccomodation.style.display = "block"
    forHotel.style.display = "none"
})
roomBack.addEventListener("click", ()=>{
    typeOfRoom.style.display = "none"
    forHotel.style.display = "block"
})
accBack.addEventListener("click", ()=>{
    typeOfAccomodation.style.display = "none"
    hotelForm.style.display = "block"
})