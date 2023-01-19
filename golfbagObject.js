    // Original Assignment

/*
let golfbag = {
    brand: "Cobra",
    golfclubs: ["Driver", "Wood", "Hybrid", "4-iron", "5-iron", "6-iron", "7-iron", "8-iron", "9-iron", "pitching-wedge", "gap-wedge", "sand-wedge", "lob-wedge", "putter"],
    totalPrice: 25000,
    ownerIsSatisfied: true
}
*/


    // Optional Assignment



        // Nested Objects

let golfbag = {
    golfclubs: ["Driver", "Wood", "Hybrid", "4-iron", "5-iron", "6-iron", "7-iron", "8-iron", "9-iron", "pitching-wedge", "gap-wedge", "sand-wedge", "lob-wedge", "putter"],
    model: {
        bag: "Cobra Ultralight Cart Bag",
        driver: "Callaway Epic GBB Sub Zero",
        wood: "Callaway Rogue 3-Wood",
        hybrid: "TaylorMade M2 3-Hybrid",
        irons: "TaylorMade P770 4-G",
        wedges: "Titleist SM8",
        putter: "TaylorMade Spider"
    },
    price: {
        bag: 1500,
        driver: 5000,
        wood: 3000,
        hybrid: 2000,
        irons: 15000,
        wedges: 4500,
        putter: 2000
    },
    ownerIsSatisfied: true,
    totalPrice: function() {
        let totalPrice = golfbag.price.bag + golfbag.price.driver + golfbag.price.wood + golfbag.price.hybrid + golfbag.price.irons + golfbag.price.wedges + golfbag.price.putter;
    }
}

const listDriver = document.getElementById("listDriver");

listDriver.style.color = "blue"





const priceBag = document.querySelector("#priceBag");

const priceDriver = document.querySelector("#priceDriver");

const priceWood = document.querySelector("#priceWood");

const priceHybrid = document.querySelector("#priceHybrid");

const priceIrons = document.querySelector("#priceIrons");

const priceWedges = document.querySelector("#priceWedges");

const pricePutter = document.querySelector("#pricePutter");

let totalPrice = document.querySelector("#totalPrice");

let calculate = document.querySelector("#calculate");

const resetTotal = document.querySelector("#reset");



console.log(priceBag, priceDriver, priceWood, priceHybrid, priceIrons, priceWedges, pricePutter);

function bagChecked() {
    if(priceBag.checked == true) {
        totalPrice.innerHTML += " + " +  golfbag.price.bag;
    } else if (priceBag.checked == false) {
        totalPrice.innerHTML = "";
    }
}

function driverChecked() {
    if(priceDriver.checked == true) {
        totalPrice.innerHTML += " + " +  golfbag.price.driver;
    } else if (priceDriver.checked == false) {
        totalPrice.innerHTML = "";
    }
}

function woodChecked() {
    if(priceWood.checked == true) {
        totalPrice.innerHTML += " + " +  golfbag.price.wood;
    } else if (priceWood.checked == false) {
        totalPrice.innerHTML = "";
    }
}

function hybridChecked() {
    if(priceHybrid.checked == true) {
        totalPrice.innerHTML += " + " +  golfbag.price.hybrid;
    } else if (priceHybrid.checked == false) {
        totalPrice.innerHTML = "";
    }
}

function ironsChecked() {
    if(priceIrons.checked == true) {
        totalPrice.innerHTML += " + " +  golfbag.price.irons;
    } else if (priceIrons.checked == false) {
        totalPrice.innerHTML = "";
    }
}

function wedgesChecked() {
    if(priceWedges.checked == true) {
        totalPrice.innerHTML += " + " +  golfbag.price.wedges;
    } else if (priceWedges.checked == false) {
        totalPrice.innerHTML = "";
    }
}

function putterChecked() {
    if(pricePutter.checked == true) {
        totalPrice.innerHTML += " + " +  golfbag.price.putter;
    } else if (pricePutter.checked == false) {
        totalPrice.innerHTML = "";
    }
}

calculate.onclick = function() {
    document.getElementById("totalPrice").style.display = "inline-block";
    totalPrice.innerHTML = eval(totalPrice.innerHTML) + ",-";
}

resetTotal.onclick = function() {
    location.reload();
}