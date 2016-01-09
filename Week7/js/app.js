/**
 * Miltiadis ALTINTZIS
 */
		// alert(this.text);
		//console.log(data);

$(function()
{
	var http,httpForcast,city,key,units,url,urlForcast,lastTempClass;

	init();
	//loadRSS();
	
	function init()
	{
		http="http://api.openweathermap.org/data/2.5/weather?q=";
		httpForcast="http://api.openweathermap.org/data/2.5/forecast?q="
		city="Thessaloniki";
		key="&appid=2de143494c0b295cca9337e1e96b00e0";
		units="&units=metric";
		url=http+city+key+units;
		urlForcast=httpForcast+city+key+units;
		lastTempClass="temp2";

		getData(url, true);
		getData(urlForcast, false);
	}
	
	$('#menuTemp a').on('click', function(e)
	{
		$("#"+lastTempClass).removeClass("temp_active");
		$("#"+lastTempClass).addClass("temp_disable");
		
		if ($(this).hasClass("default"))
		{
			$("#weatherText p:nth-child(2) span:nth-child(2)").html("&#8490;");
			$("#weatherText p:nth-child(3) span:nth-child(2)").html("&#8490;");
			$("#weatherText p:nth-child(3) span:nth-child(4)").html("&#8490;");
			$("#weatherText p:nth-child(7) span:nth-child(2)").text(" meter/sec");
			
			for(var i=0; i<3; i++)
			{
				$("#cont"+(i+1)+" span:nth-child(2)").html("&#8490;");
			}
			
			lastTempClass="temp1";
			units = '';
		}
		else if($(this).hasClass("celsius"))
		{
			$("#weatherText p:nth-child(2) span:nth-child(2)").html("&#8451;");
			$("#weatherText p:nth-child(3) span:nth-child(2)").html("&#8451;");
			$("#weatherText p:nth-child(3) span:nth-child(4)").html("&#8451;");
			$("#weatherText p:nth-child(7) span:nth-child(2)").text(" meter/sec");
			
			for(var i=0; i<3; i++)
			{
				$("#cont"+(i+1)+" span:nth-child(2)").html("&#8451;");
			}
			
			lastTempClass="temp2";
			units = '&units=metric';
		}
		else
		{
			$("#weatherText p:nth-child(2) span:nth-child(2)").html("&#8457;");
			$("#weatherText p:nth-child(3) span:nth-child(2)").html("&#8457;");
			$("#weatherText p:nth-child(3) span:nth-child(4)").html("&#8457;");
			$("#weatherText p:nth-child(7) span:nth-child(2)").text(" miles/hour");
			
			for(var i=0; i<3; i++)
			{
				$("#cont"+(i+1)+" span:nth-child(2)").html("&#8457;");
			}
			
			lastTempClass="temp3";
			units = '&units=imperial';
		}

		url=http+city+key+units;
		urlForcast=httpForcast+city+key+units;
		$(this).removeClass("temp_disable");
		$(this).addClass("temp_active");

		getData(url,  true);
		getData(urlForcast, false);
	});
	
	$('nav div ul li a').on('click', function(e)
	{
		e.preventDefault();
		city = this.text.toLowerCase();

		if(city==="melbourne")
			city+=",au";
		
		url=http+city+key+units;
		urlForcast=httpForcast+city+key+units;
		
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
		data: '',
		dataType: 'json',
		
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
			if(flag)
				processCurData(weatherData);
			else
			{
				processForData(weatherData);
				flag=true;
			}
		},
		error : function(weatherData)
		{
			$("#msg").html('<div id="error">Loading Weather information for ' + weatherData.name + ' failed,' + ' please try again later.</div>')
		}
	});
}