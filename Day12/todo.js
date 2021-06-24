// To set the date item added
let a;
let date;
const options = { year: 'numeric', month: 'long', day: 'numeric' };
a = new Date();
date = a.toLocaleDateString(undefined, options);
document.getElementById('time').innerHTML = date;

//To get the entered title and description..
function getAndUpdate() {
    console.log("Updating List...");
    tit = document.getElementById('title').value;
    if (tit === "") {
        return alert("You need to add items.")
    }
    desc = document.getElementById('description').value;


    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
    title.value = "";
    description.value = "";
}

//To update the localStorage
function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    // Populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td><button class="delete" onclick="deleted(${index})">Delete</button></td> 
        <td id="time">${date}</td>
        </tr>`;
    });
    tableBody.innerHTML = str;
}

//Adding when clicked on Add to list...
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();

//Delete the added row...
function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);

    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();

}

//To clear the localStorage and clear the complete list...
function clearStorage() {
    if (confirm("Do you really want to clear?")) {
        console.log('Clearing the storage')
        localStorage.clear();
        update()
    }
}

