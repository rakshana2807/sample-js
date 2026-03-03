
const input1 = document.getElementById("inp1")
const input2 = document.getElementById("inp2")
const container = document.getElementById("container")

// Array to store issued cart
let cartList = []
let originalValue = null 

function add() {

    let itemName = input1.value.trim()
    let price = input2.value.trim()

    if (itemName === "" || price === "") {
        alert("Please enter details")
        return
    }

    if (cartList.includes(itemName)) {
        alert("Already exist")
        return
    }

    // Store in array
    cartList.push(itemName,price)

    // Check if already exists


    // Create list item
    let list = document.createElement("li")
    list.innerHTML = itemName + " - " + price + "₹" + "<button onclick='increase()'>+</button>" + "<button onclick='del(event)'>Remove</button>"
    container.append(list)

    // Clear inputs
    input1.value = ""
    input2.value = ""

}
function del(event){
    event.target.parentElement.remove()
}
function increase() {

    let currentValue = price

    // If first time clicking
    if (originalValue === null) {
        originalValue = currentValue
    }

    currentValue = currentValue + originalValue

    input2.value = currentValue
}
