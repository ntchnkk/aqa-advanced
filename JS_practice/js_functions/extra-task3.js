const findTotalAmount = function (days){
    let dayCost = 40;
    let total = dayCost * days;

    if (days >= 7) {
        total -= 50;       
    } else if (days >= 3) {
        total -= 20;
    } 
    
    return total;
}

console.log(findTotalAmount(6));