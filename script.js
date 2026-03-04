
var input1 = document.getElementById("inp1")
var input2 = document.getElementById("inp2")
var container = document.getElementById("container")
var total= document.getElementById("tot")
var currenttotal=0
var cartList = []

function add() {

    var itemName = input1.value.trim()
    var price = Number(input2.value.trim())

    if (itemName === "" || price === "") {
        alert("Please enter details")
        return
    }


    cartList.push(itemName,price)

    var list = document.createElement("li")
    list.innerHTML = itemName + " - " + price + "₹"  + "<button onclick='del(event, " + price + ")'>Remove</button>"
    container.append(list)
    currenttotal += price
    total.textContent="Total Price : " + currenttotal
    input1.value = ""
    input2.value= ""

}
 
function del(event,price){
    
    event.target.parentElement.remove()
    currenttotal -= price
    total.textContent="Total Price : " + currenttotal
}
