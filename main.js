//seat change function
function seatChange(seat , isIncrease){
    const seatInput = document.getElementById(seat);
    const seatCount = getUserInputValue(seat)
    let newSeatCount = seatCount;
    if(isIncrease == true){ // seat number increase 
        newSeatCount = seatCount + 1;
    }
    else if(isIncrease == false && seatCount > 0){ // seat number decrease
        newSeatCount = seatCount - 1;
    }
    seatInput.value =  newSeatCount;
    priceCalculate();
}
//input function
function getUserInputValue(seat){
    const seatInput = document.getElementById(seat);
    const seatCount = parseInt(seatInput.value);
    return seatCount;
}
// subtotal , vat and total price calculation
function priceCalculate(){
    const firstClassSetCount = getUserInputValue("first-class-count");
    const economySetCount = getUserInputValue("economy-count");
    //Subtotal
    const subtotalPrice = firstClassSetCount * 150 + economySetCount * 100; // First Class seat price ($150) and Economy seat price ($100)
    document.getElementById("sub-total-price").innerText = "$" + subtotalPrice;
    //Charge 10% VAT
    const totalVat = Math.round(subtotalPrice * 0.1);
    document.getElementById("vat").innerText = "$" + totalVat;
    //Total
    const totalPrice = subtotalPrice + totalVat;
    document.getElementById("total-price").innerText = "$" +  totalPrice;
}
// order received
function orderDetails(){
    //
}
// hide section
document.getElementById("booking-btn").addEventListener("click", function(){
    const sectionHide = document.getElementById("hide-section");
    sectionHide.style.display = "none";
    const orderReceivedSection = document.getElementById("order-received");
    orderReceivedSection.style.display = "block";
})
