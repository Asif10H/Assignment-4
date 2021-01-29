//seat change function
function seatChange(seat , isIncrease){
    const seatInput = document.getElementById(seat);
    const seatCount = getUserInputValue(seat)
    let newSeatCount = seatCount;
    if(isIncrease == true){ // seat increase 
        newSeatCount = seatCount + 1;
    }
    else if(isIncrease == false && seatCount > 0){ // seat decrease
        newSeatCount = seatCount - 1;
    }
    seatInput.value =  newSeatCount;
}

//input function
function getUserInputValue(seat){
    const seatInput = document.getElementById(seat);
    const seatCount = parseInt(seatInput.value);
    return seatCount;
}
