// display the calendar here
// initialize the variables
var hotelTable = document.getElementById("hotelCalendarTable");
var stringHTML = hotelTable.innerHTML; //get the html existent data with .innerHTML function
var date = 1;

//complete the calendar with two nested loops and date variable
for (i = 0; i < 5; i++)
{
	stringHTML += "<tr>";
	for (j = 0; j < 7; j++)
	{
		stringHTML += "<td>" + (date++) + "</td>";
		if (date > 31)
			break;
	}
	stringHTML += "</tr>";
}

//return the calendar to the html page
hotelTable.innerHTML = stringHTML;