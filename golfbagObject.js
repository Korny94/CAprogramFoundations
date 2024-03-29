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



        // Nested & Array of Objects

let golfbag = {
    golfclubs: [{
        club: "Driver",
        loftDegrees: 9.0
    },
    {
        club: "3-Wood",
        loftDegrees: 15.0
    },
    {
        club: "3-hybrid",
        loftDegrees: 19.0
    },
    {
        club: "4-iron",
        loftDegrees: 22.5
    },
    {
        club: "5-iron",
        loftDegrees: 25.5
    },
    {
        club: "6-iron",
        loftDegrees: 29.0
    },
    {
        club: "7-iron",
        loftDegrees: 33.0
    },
    {
        club: "8-iron",
        loftDegrees: 37.0
    },
    {
        club: "9-iron",
        loftDegrees: 41.5
    },
    {
        club: "pitching-wedge",
        loftDegrees: 46.0
    },{
        club: "gap-wedge",
        loftDegrees: 51.0
    },
    {
        club: "sand-wedge",
        loftDegrees: 54.0
    },
    {
        club: "lob-wedge",
        loftDegrees: 58.0
    },
    {
        club: "putter",
        loftDegrees: 3.5
    }],
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

const imgGolfBag = document.getElementById("golfbag");

let bagModel = document.getElementById("bagModel");

imgGolfBag.onmouseover = function() {
        bagModel.style.opacity = 1;
}


const listDriver = document.getElementById("listDriver");

const listWood = document.getElementById("listWood");

const listHybrid = document.getElementById("listHybrid");

const listIrons = document.getElementById("listIrons");

const listWedges = document.getElementById("listWedges");

const listPutter = document.getElementById("listPutter");

let imgDriver = document.getElementById("driver");

let imgWood = document.getElementById("wood");

let imgHybrid = document.getElementById("hybrid");

let imgIrons = document.getElementById("irons");

let imgWedges = document.getElementById("wedges");

let imgPutter = document.getElementById("putter");

let imgDefault = document.getElementById("defaultClub");

let clubModel = document.querySelector("#clubModel");


listDriver.onmouseover = function() {
    clubModel.innerHTML = golfbag.model.driver;
    imgDriver.style.display = "block";
    imgWood.style.display = "none";
    imgHybrid.style.display = "none";
    imgIrons.style.display = "none";
    imgWedges.style.display = "none";
    imgPutter.style.display = "none";
    imgDefault.style.display = "none";
}

listWood.onmouseover = function() {
    clubModel.innerHTML = golfbag.model.wood;
    imgDriver.style.display = "none";
    imgWood.style.display = "block";
    imgHybrid.style.display = "none";
    imgIrons.style.display = "none";
    imgWedges.style.display = "none";
    imgPutter.style.display = "none";
    imgDefault.style.display = "none";
}

listHybrid.onmouseover = function() {
    clubModel.innerHTML = golfbag.model.hybrid;
    imgDriver.style.display = "none";
    imgWood.style.display = "none";
    imgHybrid.style.display = "block";
    imgIrons.style.display = "none";
    imgWedges.style.display = "none";
    imgPutter.style.display = "none";
    imgDefault.style.display = "none";
}

listIrons.onmouseover = function() {
    clubModel.innerHTML = golfbag.model.irons;
    imgDriver.style.display = "none";
    imgWood.style.display = "none";
    imgHybrid.style.display = "none";
    imgIrons.style.display = "block";
    imgWedges.style.display = "none";
    imgPutter.style.display = "none";
    imgDefault.style.display = "none";
}

listWedges.onmouseover = function() {
    clubModel.innerHTML = golfbag.model.wedges;
    imgDriver.style.display = "none";
    imgWood.style.display = "none";
    imgHybrid.style.display = "none";
    imgIrons.style.display = "none";
    imgWedges.style.display = "block";
    imgPutter.style.display = "none";
    imgDefault.style.display = "none";
}

listPutter.onmouseover = function() {
    clubModel.innerHTML = golfbag.model.putter;
    imgDriver.style.display = "none";
    imgWood.style.display = "none";
    imgHybrid.style.display = "none";
    imgIrons.style.display = "none";
    imgWedges.style.display = "none";
    imgPutter.style.display = "block";
    imgDefault.style.display = "none";
}





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