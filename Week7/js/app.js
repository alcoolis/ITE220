/**
 * Miltiadis ALTINTZIS
 */
// alert(this.text);
// console.log(data);
$(function()
{
	var http, httpForcast, city, key, units, url, urlForcast, lastTempClass;
	
	init();
	// loadRSS();
	
	function init()
	{
		$('#rssScroll ul')
				.append("<li id='rss0'></li>" + "<li id='rss1'></li>" + "<li id='rss2'></li>" + "<li id='rss3'></li>" + "<li id='rss4'></li>" + "<li id='rss5'></li>" + "<li id='rss6'></li>").hide();
		$('#weatherText')
				.append("<p>Weather Description: <span></span>" + "</p><p>Temperature: <span></span><span>&#8451;</span>" + "</p><p>Min: <span></span><span>&#8451;</span> Max: <span></span><span>&#8451;</span>" + "</p><p>Pressure: <span></span></p><p>Humidity: <span></span>" + "</p><p>Visibility: <span></span>" + "</p><p>Wind Speed: <span></span><span> meter/sec</span>" + "</p><p>Clouds: <span></span></p><p>Sunrise: <span></span> Sunset: <span></span></p>")
				.hide();
		
		for (var i = 1; i < 4; i++)
		{
			$('#cont' + i + ' *').hide();
			$('#cont' + i + ' p:last').append("<span>&#8451;</span>");
		}
		
		http = "http://api.openweathermap.org/data/2.5/weather?q=";
		httpForcast = "http://api.openweathermap.org/data/2.5/forecast?q="
		city = "Thessaloniki";
		key = "&appid=19b99775f39c053c524ab12e79679f4e";
		units = "&units=metric";
		url = http + city + key + units;
		urlForcast = httpForcast + city + key + units;
		lastTempClass = "temp2";
		
		getData(url, true);
		getData(urlForcast, false);
	}
	
	$('#menuTemp a').on('click', function(e)
	{
		$("#" + lastTempClass).removeClass("temp_active");
		$("#" + lastTempClass).addClass("temp_disable");
		
		if ($(this).hasClass("default"))
		{
			$("#weatherText p:nth-child(2) span:nth-child(2)").html("&#8490;");
			$("#weatherText p:nth-child(3) span:nth-child(2)").html("&#8490;");
			$("#weatherText p:nth-child(3) span:nth-child(4)").html("&#8490;");
			$("#weatherText p:nth-child(7) span:nth-child(2)").text(" meter/sec");
			
			for (var i = 0; i < 3; i++)
			{
				$("#cont" + (i + 1) + " span:nth-child(2)").html("&#8490;");
			}
			
			lastTempClass = "temp1";
			units = '';
		}
		else if ($(this).hasClass("celsius"))
		{
			$("#weatherText p:nth-child(2) span:nth-child(2)").html("&#8451;");
			$("#weatherText p:nth-child(3) span:nth-child(2)").html("&#8451;");
			$("#weatherText p:nth-child(3) span:nth-child(4)").html("&#8451;");
			$("#weatherText p:nth-child(7) span:nth-child(2)").text(" meter/sec");
			
			for (var i = 0; i < 3; i++)
			{
				$("#cont" + (i + 1) + " span:nth-child(2)").html("&#8451;");
			}
			
			lastTempClass = "temp2";
			units = '&units=metric';
		}
		else
		{
			$("#weatherText p:nth-child(2) span:nth-child(2)").html("&#8457;");
			$("#weatherText p:nth-child(3) span:nth-child(2)").html("&#8457;");
			$("#weatherText p:nth-child(3) span:nth-child(4)").html("&#8457;");
			$("#weatherText p:nth-child(7) span:nth-child(2)").text(" miles/hour");
			
			for (var i = 0; i < 3; i++)
			{
				$("#cont" + (i + 1) + " span:nth-child(2)").html("&#8457;");
			}
			
			lastTempClass = "temp3";
			units = '&units=imperial';
		}
		
		url = http + city + key + units;
		urlForcast = httpForcast + city + key + units;
		$(this).removeClass("temp_disable");
		$(this).addClass("temp_active");
		
		getData(url, true);
		getData(urlForcast, false);
	});
	
	$('nav div ul li a').on('click', function(e)
	{
		e.preventDefault();
		city = this.text.toLowerCase();
		
		if (city === "melbourne")
			city += ",au";
		
		url = http + city + key + units;
		urlForcast = httpForcast + city + key + units;
		
		getData(url, true);
		getData(urlForcast, false);
	});
	
});

function getData(link, flag)
{
	$.ajax(
	{
		type : 'GET',
		url : link,
		timeout : 2000,
		data : '',
		dataType : 'json',
		
		beforeSend : function(weatherData)
		{
			$("#msg").html('<div id="load">Loading Weather information</div>');
		},
		complete : function()
		{
			$('#load').remove();
		},
		success : function(weatherData)
		{
			if (flag)
				processCurData(weatherData);
			else
			{
				processForData(weatherData);
				flag = true;
			}
		},
		error : function(weatherData)
		{
			$("#msg").html('<div id="error">Loading Weather information for ' + weatherData.name + ' failed,' + ' please try again later.</div>')
		}
	});
}
