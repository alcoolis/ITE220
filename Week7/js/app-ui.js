/**
 * 
 */
function processForData(ajaxResultFor)
{
	var index=findTheCorrectDate(ajaxResultFor.list);
	
	var date=[ajaxResultFor.list[index].dt_txt, ajaxResultFor.list[index+8].dt_txt, ajaxResultFor.list[index+16].dt_txt];
	var temp=[ajaxResultFor.list[index].main.temp_min, ajaxResultFor.list[index+8].main.temp_min, ajaxResultFor.list[index+16].main.temp_min];
	
	for(var i=0; i<date.length; i++)
	{
		date[i]=date[i].substring(0, date[i].indexOf("12:00:00"));
		
		$("#cont"+(i+1)+" :nth-child(1)").text(europeanDate(date[i]));
		$("#cont"+(i+1)+" span:nth-child(1)").text("Temp.:"+temp[i]);

		$("#cont"+(i+1)+"Image").attr("src", "http://openweathermap.org/img/w/" + (ajaxResultFor.list[index].weather[0].icon).substring(0,2)+"d" + ".png");
		
		index+=8;
	}
}

function europeanDate(date)
{
	var year=date.substring(0,4);
	var month=date.substring(5,7);
	date=date.substring(8,10);
	
	return date + "/" + month + "/" + year;
}

function processCurData(ajaxResultCur)
{
	$("#weatherImage").attr("src", "http://openweathermap.org/img/w/" + ajaxResultCur.weather[0].icon + ".png");
	
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
	
	animateWeather();
	
}

function animateWeather()
{
	$('#weatherImage').animate(
	{
		right : '+=0.5%',
		top : '+=0.5%',
	}, 1000, 'swing', false);
	
	$('#weatherImage').animate(
	{
		right : '-=0.5%',
		top : '-=0.5%',
	}, 1000, 'swing', function()
	{
		animateWeather();
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
	
	return pad(hour, 2) + ":" + pad(min, 2) + ":" + pad(sec, 2);
}

function findTheCorrectDate(ajaxResultList)
{
	for (var i = 0; i < ajaxResultList.length; i++)
	{
		var string=ajaxResultList[i].dt_txt;
		
		var index = string.indexOf("00:00:00");
		
		if(index>0)
		{
			for (var j = i; j < ajaxResultList.length; j++)
			{
				var string=ajaxResultList[j].dt_txt;
				
				index = string.indexOf("12:00:00");
				
				if(index>0)
				{
					return j;
				}
			}
		}
	}
}

function pad(num, size)
{
	var s = num + "";
	while (s.length < size)
		s = "0" + s;
	return s;
}
