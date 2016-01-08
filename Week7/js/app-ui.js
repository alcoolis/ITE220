/**
 * 
 */

function processData(ajaxResult)
{
	$("#weatherImage").attr("src", "http://openweathermap.org/img/w/" + ajaxResult.weather[0].icon + ".png");
	// $("#msg").html(ajaxResult.main.temp);
	
	$("#container h1").text("Weather Conditions for " + ajaxResult.name);
	
	$("#weatherText p:nth-child(1)>span").text(ajaxResult.weather[0].description);
	$("#weatherText p:nth-child(2) span:nth-child(1)").text(ajaxResult.main.temp);
	$("#weatherText p:nth-child(3) span:nth-child(1)").text(ajaxResult.main.temp_min);
	$("#weatherText p:nth-child(3) span:nth-child(3)").text(ajaxResult.main.temp_max);
	$("#weatherText p:nth-child(4)>span").text(ajaxResult.main.pressure + " hPa");
	$("#weatherText p:nth-child(5)>span").text(ajaxResult.main.humidity + " %");
	$("#weatherText p:nth-child(6)>span").text(ajaxResult.visibility + "  meters");
	$("#weatherText p:nth-child(7) span:nth-child(1)").text(ajaxResult.wind.speed);
	$("#weatherText p:nth-child(8)>span").text(ajaxResult.clouds.all + " %");
	$("#weatherText p:nth-child(9) span:nth-child(1)").text(formatDate(ajaxResult.sys.sunrise, ajaxResult.name));
	$("#weatherText p:nth-child(9) span:nth-child(2)").text(formatDate(ajaxResult.sys.sunset, ajaxResult.name));
	
	loop();
	
}

function loop()
{
	$('#weatherImage').css(
	{
		right : 50,
		top : 0
	});
	$('#weatherImage').animate(
	{
		right : '+=0.5%',
		top : '+=0.5%',
	}, 1000, 'swing', false);
	$('#weatherImage').css(
	{
		right : 50,
		top : 0
	});
	$('#weatherImage').animate(
	{
		right : '-=0.5%',
		top : '-=0.5%',
	}, 1000, 'swing', function()
	{
		loop();
	});
}

function formatDate(epochTime, cityName)
{
	var hour = (new Date(epochTime * 1000)).getHours();
	var min = (new Date(epochTime * 1000)).getMinutes();
	var sec = (new Date(epochTime * 1000)).getSeconds();
	
	switch (cityName)
	{
		case ("Montpellier"):
		case ("Rouen"):
		case ("Brussels"):
		case ("Oslo"):
			hour -= 6;
			break;
		case ("Thessaloniki"):
		case ("Athens"):
		case ("Skotoussa"):
			hour -= 5;
			break;
		case ("Bangkok"):
			break;
		case ("Singapore"):
			hour += 1;
			break;
		case ("Melbourne"):
			hour += 4;
			break;
	}
	;
	
	return pad(hour, 2) + ":" + pad(min, 2) + ":" + pad(sec, 2);
}

function pad(num, size)
{
	var s = num + "";
	while (s.length < size)
		s = "0" + s;
	return s;
}
