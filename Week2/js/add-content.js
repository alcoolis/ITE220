/**
 * 
 */
//initialize variables and put the nameString and the discount into variables in order to change them easily
//*UPDATE* The nameString is taken from add-name.js script file
//var nameString = "Miltos"; 
var discount=20;
var greetingsString;
var price=[10, 5, 1];
var total=0;
var products=["Stamford T-Shirt", "Stamford Notebook", "Stamford Wristband"];
var time = new Date().getHours();

//using getElementById command to make a reference to html id
var productList = document.getElementById("productList");
var greetings = document.getElementById("greetings");
var nameVar = document.getElementById("nameVar");
var discountString = document.getElementById("discount");
var totalPriceEle = document.getElementById("totalPrice");

//change the greetingsString based on actual time
if(time<12)
	greetingsString= "Good Morning";
	else if(time>12 && time<18)
		greetingsString= "Good afternoon";
	else
		greetingsString= "Good evening";
		
//calculate total cost and discount
total=price[0]+price[1]+price[2];
total-=total*(discount/100)

//display the products in html code with innerHTML command
productList.innerHTML += "<li>" + products[0] + ": $" + price[0] + "</li>";
productList.innerHTML += "<li>" + products[1] + ": $" + price[1] + "</li>";
productList.innerHTML += "<li>" + products[2] + ": $" + price[2] + "</li>";

//display the strings into html page with textContent command (only for Strings)
greetings.textContent = greetingsString;
nameVar.textContent = nameString;
discountString.textContent  = discount +"% off";
totalPriceEle.textContent = "$" + total;