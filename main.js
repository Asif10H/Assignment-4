// plus button for First Class 
document.getElementById("first-class-increase").addEventListener("click", function(){
    const seatInput = document.getElementById("first-class-seat-count");
    const seatCount = parseInt(seatInput.value);
    const newSeatCount = seatCount + 1;
    seatInput.value = newSeatCount;
    document.getElementById("first-class-seat-count").innerText = newSeatCount;
})
// minus button for First Class
document.getElementById("first-class-decrease").addEventListener("click", function(){
    const seatInput = document.getElementById("first-class-seat-count");
    const seatCount = parseInt(seatInput.value);
    const newSeatCount = seatCount - 1;
    seatInput.value = newSeatCount;
    document.getElementById("first-class-seat-count").innerText = newSeatCount;
})

// plus button for Economy 
document.getElementById("economy-increase").addEventListener("click", function(){
    const seatInput = document.getElementById("economy-seat-count");
    const seatCount = parseInt(seatInput.value);
    const newSeatCount = seatCount + 1;
    seatInput.value = newSeatCount;
    document.getElementById("economy-seat-count").innerText = newSeatCount;
})
// minus button for Economy 
document.getElementById("economy-decrease").addEventListener("click", function(){
    const seatInput = document.getElementById("economy-seat-count");
    const seatCount = parseInt(seatInput.value);
    const newSeatCount = seatCount - 1;
    seatInput.value = newSeatCount;
    document.getElementById("economy-seat-count").innerText = newSeatCount;
})