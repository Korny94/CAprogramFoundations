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
    brand: {
        golfbag: "Cobra",
        driver: "Callaway",
        wood: "Callaway",
        hybrid: "TaylorMade",
        irons: "TaylorMade",
        wedges: "Titleist",
        putter: "TaylorMade"
    },
    price: {
        golfbag: 1500,
        driver: 5000,
        wood: 3000,
        hybrid: 2000,
        irons: 15000,
        wedges: 4500,
        putter: 2000
    },
    ownerIsSatisfied: true,
    totalPrice: function() {
        let totalPrice = golfbag.price.golfbag + golfbag.price.driver + golfbag.price.wood + golfbag.price.hybrid + golfbag.price.irons + golfbag.price.wedges + golfbag.price.putter;
    }
}




