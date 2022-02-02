var coins = document.getElementById("coins")
let coinsval = 0

function dirpng(file) {
    return `./assets/${file}.png`;
}

let cdnotif = false

//system

//population
let houses = 0
//math vars but funcs
function maxpop() {var temp = houses * 8; return temp;  };
let curpop = 0

function fixpop() {
    if (curpop == 1) return 1;
    else return 0; 
}

//earnings
let happypoints = 1
function happiness() { var temp = Math.round(100 - curpop / happypoints); return temp; };
function happyfix() { var temp = happiness() + fixpop(); return temp; };

//func
function modhappy() {
    if (happiness() >= 75) return 2;
    else if (happiness() >= 25) return 1;
    else if (happiness() >= 0) return 0;
    else if (happiness() <= 0) return 2;
}
//
function prerfix() {
    var temp = Math.round(happiness() / 100 * curpop * modhappy());
    if(houses == 0) return 0;
    else return temp
}

let prer1 = 0
let expense = 0

function earnings() {return prer1 + prerfix() - expense;}

//game functions

//items
item1 = false
item2 = false

//update population
setInterval(() => {
    if (maxpop() > curpop) {
        if (happiness() >= 75) curpop += 2;
        else if (happiness() >= 25) curpop += 1;
    }
    if (happiness() <= 15  && curpop > 0) curpop -= 1;
}, 1000);

//update coin value

setInterval(() => {
    coinsval += earnings()
}, 1000);


//ui functions

function cvalcoin() {
    if (earnings() > 0) return `<span style="color: rgb(1, 194, 1);">+${earnings()}</span>`
    else if (earnings() == 0) return `<span>+0</span>`
    else if (earnings() < 0) return `<span style="color: red;">-${earnings()}</span>`
}
function happyicon() {
    if (happiness() >= 75) return "happy";
    else if (happiness() >= 55) return "smile";
    else if (happiness() >= 35) return "neutral";
    else if (happiness() >= 15) return "sad";
    else if (happiness() < 15) return "angry";
}

//update ui stats
//update every 100 ticks
setInterval(() => {
    document.getElementById("coins").innerHTML = `<p>Coins: ${coinsval} <span><img style="vertical-align:middle" width="22px" height="22px" src="./assets/coin.png"></span> ${cvalcoin()}</p>`
    document.getElementById("popui").innerHTML = `<p>Pop: <span><img style="vertical-align:middle" width="22px" height="22px" src="./assets/pop.png"> (${curpop}/${maxpop()})</p>`
    document.getElementById("happyui").innerHTML = `<p>Happiness: <span><img style="vertical-align:middle" width="24px" height="24px" src="./assets/${happyicon()}.png"></span> ${happyfix()}%</p>`;
}, 100);


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