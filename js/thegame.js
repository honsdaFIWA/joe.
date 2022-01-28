var coins = document.getElementById("coins")
let coinsval = 0

let cdnotif = false

//system

//population
let houses = 0
var maxpop = 8 * houses
let curpop = 0

function fixpop() {
    if (curpop == 1) return 1;
    else return 0; 
}

function prerfix() {
    if(houses == 0) return 0;
    else return Math.round(happiness / 100 * curpop * modhappy());
}

//earnings
let happypoints = 1
var happiness = Math.round(100 - curpop / happypoints)
var happyfix = happiness + fixpop()

//func
function modhappy() {
    if (happiness >= 75) return 2;
    else if (happiness >= 25) return 1;
    else if (happiness >= 0) return 0;
    else if (happiness <= 0) return 2;
}

let prer1 = 0
var prer2 = prerfix()
let expense = 0
//game functions

//items
item1 = false
item2 = false

//update population
setInterval(() => {
    if (curpop <= maxpop) {
        if (happiness >= 75) curpop += 2;
        else if (happiness >= 25) curpop += 1;
        else if (happiness >= 15) curpop += 0;
    }
    if (happiness <= 15) curpop -= 1;
}, 1000);

//update coin value

//update every 100 ticks
setInterval(() => {
    coinsval += (prer1 + prer2 - expense)
}, 1000);

setInterval(() => {
    document.getElementById("coins").innerHTML = "Coins: " + coinsval;
}, 100);



//ui functions
function notif(snotif) {
    cdnotif = true
    document.getElementById("notif").innerHTML = `<p style="color:red; font-weight: bold; background-color: #f4f4f4;border:#e5e5e5 3px solid; border-radius: 6px; padding: 10px 50px 10px 8px; width:35%;">${snotif}</p>`
    if (cdnotif != false) {
        setTimeout(() => {
            document.getElementById("notif").innerHTML = `<p></p>`; cdnotif = false;
        }, 5000);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//poo
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function unlock1() {
    if (coinsval >= 150) {
        coinsval -= 150; item1 = true;
        document.getElementById("poo1m").innerHTML = `<span><img class="roundy" width="150px" height="150px" src="https://www.pngitem.com/pimgs/m/209-2094569_globe-vector-clipart-and-for-free-transparent-png.png"></span>`
        document.getElementById("button2").innerHTML = `5 coins / sec`
        prer1 += 5
    }
    else {
        notif("Not enough coins!")
    }
}

function unlock2() {
    if (coinsval >= 5000 && item1 == true) {
        coinsval -= 5000; item2 = true;
        document.getElementById("poo2m").innerHTML = `<span><img class="roundy" width="150px" height="150px" src="https://www.nicepng.com/png/full/133-1339346_bank-institution-university-comments-font-awesome-university-icon.png"></span>`
        document.getElementById("button3").innerHTML = `100 coins / sec`
        prer1 += 100
    }
    else if (item1 != true) {
        notif("You haven't unlocked the previous item!")
    }
    else {
        notif("Not enough coins!")
    }
}