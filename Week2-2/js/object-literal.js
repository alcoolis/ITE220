//object creation
var hotel =
{
	name : "CnProd Hotel",
	rooms : 120,
	booked : 88,

	checkAvailability : function()
	{
		return this.rooms - this.booked;
	}
}

//get variables from html id's
var hotelName = document.getElementById("hotelName");
var hotelAvailableRooms = document.getElementById("rooms");

//return the variables to html via object calls
hotelName.textContent = hotel.name;
hotelAvailableRooms.textContent = hotel.checkAvailability();