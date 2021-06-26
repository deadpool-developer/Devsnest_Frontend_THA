var booked = 0;
var available = 57;
document.getElementById("booked").innerHTML = booked;
document.getElementById("available").innerHTML = available;
let container = document.getElementById("container");

//Boxes inside the container class
for (let i = 0; i < 57; i++) {
    let box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
}

let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        //When the person click on the seat twice
        if (box.classList.contains("selected")) {
            box.classList.remove("selected");
            booked--;
            available++;
            document.getElementById("booked").innerHTML = booked;
            document.getElementById("available").innerHTML = available;
        }

        //When the person click on the seat
        else {
            box.classList.add("selected");
            booked++;
            available--;
            document.getElementById("booked").innerHTML = booked;
            document.getElementById("available").innerHTML = available;
        }
    })
});
