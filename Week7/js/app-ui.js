/**
 * 
 */

function processForData(ajaxResultFor)
{
	var date=[ajaxResultFor.list[8].dt_txt, ajaxResultFor.list[16].dt_txt, ajaxResultFor.list[24].dt_txt];
	var temp=[ajaxResultFor.list[8].main.temp_min, ajaxResultFor.list[16].main.temp_min, ajaxResultFor.list[24].main.temp_min];
	
	for(var i=0; i<date.length; i++)
	{
		date[i]=date[i].substring(0, date[i].indexOf("12:00:00"));
		$("#cont"+(i+1)+" :nth-child(1)").text(date[i]);
		$("#cont"+(i+1)+" span:nth-child(1)").text("Temp.:"+temp[i]);
		
	}
	
	
	$("#cont1Image").attr("src", "http://openweathermap.org/img/w/" + ajaxResultFor.list[9].weather[0].icon + ".png");
	$("#cont2Image").attr("src", "http://openweathermap.org/img/w/" + ajaxResultFor.list[17].weather[0].icon + ".png");
	$("#cont3Image").attr("src", "http://openweathermap.org/img/w/" + ajaxResultFor.list[25].weather[0].icon + ".png");
	
}

function processCurData(ajaxResultCur)
{
	$("#weatherImage").attr("src", "http://openweathermap.org/img/w/" + ajaxResultCur.weather[0].icon + ".png");
	// $("#msg").html(ajaxResult.main.temp);
	
	$("#container h1").text("Weather Conditions for " + ajaxResultCur.name);
	
	$("#weatherText p:nth-child(1)>span").text(ajaxResultCur.weather[0].description);
	$("#weatherText p:nth-child(2) span:nth-child(1)").text(ajaxResultCur.main.temp);
	$("#weatherText p:nth-child(3) span:nth-child(1)").text(ajaxResultCur.main.temp_min);
	$("#weatherText p:nth-child(3) span:nth-child(3)").text(ajaxResultCur.main.temp_max);
	$("#weatherText p:nth-child(4)>span").text(ajaxResultCur.main.pressure + " hPa");
	$("#weatherText p:nth-child(5)>span").text(ajaxResultCur.main.humidity + " %");
	$("#weatherText p:nth-child(6)>span").text(ajaxResultCur.visibility + "  meters");
	$("#weatherText p:nth-child(7) span:nth-child(1)").text(ajaxResultCur.wind.speed);
	$("#weatherText p:nth-child(8)>span").text(ajaxResultCur.clouds.all + " %");
	$("#weatherText p:nth-child(9) span:nth-child(1)").text(formatDate(ajaxResultCur.sys.sunrise, ajaxResultCur.name));
	$("#weatherText p:nth-child(9) span:nth-child(2)").text(formatDate(ajaxResultCur.sys.sunset, ajaxResultCur.name));
	
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
