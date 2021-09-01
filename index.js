function distanceFromHqInBlocks(a){
    return Math.abs(42 - a);
}

function distanceFromHqInFeet(a){
    return Math.abs(42 - a)*264;
}

function distanceTravelledInFeet(a, b){
    return Math.abs(a - b)*264;
}

function calculatesFarePrice(a, b) {
    let total =  Math.abs(a - b)*264

    if (total < 400) {
        return 0
    } 
        else if (total > 2500) {
        return "cannot travel that far"
    } 
        else if (total > 2000 && total < 2500) {
        return 25
    }   else {
        return ((total - 400) * .02) 
    }
}