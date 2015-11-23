/**
 * 
 */
var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var totalPriceEle = document.getElementById("totalPrice");

totalPriceEle.textContent = "$" + total;