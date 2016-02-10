/**
 * 
 */

var availableCitys = [];

$(function()
{
	$("#dialog").dialog(
	{
		title : "City not Found",
		dialogClass : "no-close",
		autoOpen : false,
		buttons : [
		{
			text : "OK",
			click : function()
			{
				$(this).dialog("close");
			}
		} ]
	});
	
	$.get("data/cityList.txt", function(data)
	{
		var available = data.split(",");
		
		for (var i = 0; i < available.length; i += 2)
		{
			availableCitys.push(
			{
				label : available[i + 1],
				value : available[i]
			});
		}
		
		// alert(availableCitys.length);
		
		$("#autoComplete").autocomplete(
		{
			minLength : 3
		});
		
		$("#autoComplete").autocomplete(
		{
			source : availableCitys,
			
			select : function(event, ui)
			{
				event.preventDefault();
				$("#autoComplete").val(ui.item.label);
				findCity(ui.item.value);
			},
		});
		
		$("#autoComplete").on("keydown", function search(e)
		{
			if (e.keyCode == 13)
			{
				e.preventDefault()
				findCityID($(this).val());
			}
			
		});
		
		$("#searchCity>a").on("click", function()
		{
			findCityID($("#autoComplete").val());
		});
		
	});
});

function findCity(cityID)
{
	$("#autoComplete").val("");
	
	var tempUnits

	if ($("#temp1").is(".temp_active"))
		tempUnits = '';
	else if ($("#temp2").is(".temp_active"))
		tempUnits = '&units=metric';
	else
		tempUnits = '&units=imperial';
	
	var url = "http://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&appid=19b99775f39c053c524ab12e79679f4e" + tempUnits;
	
	var urlForecast = "http://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=19b99775f39c053c524ab12e79679f4e" + tempUnits;
	
	getData(url, true);
	getData(urlForecast, false);
}

function findCityID(city)
{
	for ( var k in availableCitys)
	{
		if (typeof availableCitys[k] !== 'function')
		{
			
			if (availableCitys[k].label === city)
			{
				findCity(availableCitys[k].value)
				return false;
			}
		}
	}
	
	var text;
	
	if (city === "")
		text = "Please put a city in the Textfield"
	else
		text = "The city " + city + " does not exist in " + "our Database, please insert another city.";
	
	console.log(text);

	$("#autoComplete").val("");
	sweetAlert("Something went wrong!", text, "error");
	
	/*
	$("#dialog p").text(text);
	$("#dialog").dialog("open");
	*/
	
}
