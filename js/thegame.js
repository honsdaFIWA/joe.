var coins = document.getElementById("coins")
let coinsval = 0

let cdnotif = false

//items
item1 = false
item2 = false

//update every 100 ticks
setInterval(() => {
    document.getElementById("coins").innerHTML = "Coins: " + coinsval;
}, 100);

function unlock1() {
    if (coinsval >= 150) {
        coinsval -= 150; item1 = true;
        document.getElementById("poo1m").innerHTML = `<span><img class="roundy" width="200px" height="200px" src="https://www.pngitem.com/pimgs/m/209-2094569_globe-vector-clipart-and-for-free-transparent-png.png"></span>`
        document.getElementById("button2").innerHTML = `5 coins / sec`
        setInterval(() => {coinsval += 5}, 1000);
    }
    else {
        cdnotif = true
        document.getElementById("notif").innerHTML = `<p style="color:red; font-weight: bold; background-color:#e5e5e5; border-radius: 6px; padding: 10px 50px 10px 8px; width:35%;">Not enough coins!</p>`
        if (cdnotif != false) {
            setTimeout(() => {
                document.getElementById("notif").innerHTML = `<p></p>`; cdnotif = false;
            }, 5000);
        }
    }
}

function unlock2() {
    if (coinsval >= 5000 && item1 == true) {
        coinsval -= 5000; item2 = true;
        document.getElementById("poo2m").innerHTML = `<span><img class="roundy" width="200px" height="200px" src="https://www.nicepng.com/png/full/133-1339346_bank-institution-university-comments-font-awesome-university-icon.png"></span>`
        document.getElementById("button3").innerHTML = `100 coins / sec`
        setInterval(() => {coinsval += 100}, 1000);
    }
    else if (item1 != true) {
        cdnotif = true
        document.getElementById("notif").innerHTML = `<p style="color:red; font-weight: bold; background-color:#e5e5e5; border-radius: 6px; padding: 10px 50px 10px 8px; width:35%;">You haven't unlock the previous item!</p>`
        if (cdnotif != false) {
            setTimeout(() => {
                document.getElementById("notif").innerHTML = `<p></p>`; cdnotif = false;
            }, 5000);
        }

    }
    else {
        cdnotif = true
        document.getElementById("notif").innerHTML = `<p style="color:red; font-weight: bold; background-color:#e5e5e5; border-radius: 6px; padding: 10px 50px 10px 8px; width:35%;">Not enough coins!</p>`
        if (cdnotif != false) {
            setTimeout(() => {
                document.getElementById("notif").innerHTML = `<p></p>`; cdnotif = false;
            }, 5000);
        }
    }
}