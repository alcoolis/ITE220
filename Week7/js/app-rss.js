/**
 * 
 */

$(function()
{
	google.setOnLoadCallback(initialize);
});

function initialize()
{
	
	var arrayRssSites = [ "http://rss.theweathernetwork.com/weather/rusa0000",// Yakutsuk
	"http://rss.theweathernetwork.com/weather/thxx0002",// Bangkok
	"http://rss.theweathernetwork.com/weather/frq0001",// Rouen
	"http://rss.theweathernetwork.com/weather/bexx0005",// Brussels
	"http://rss.theweathernetwork.com/weather/frxx0002",// Montpellier
	"http://rss.theweathernetwork.com/weather/snxx0006",//Singapore
	"http://rss.theweathernetwork.com/weather/noxx0029"];//Oslo
	
	for (var i = 0; i < arrayRssSites.length; i++)
	{
		displayRSS($("#rss" + i), new google.feeds.Feed(arrayRssSites[i]));
	}
	
	var interval =2000;
	
	$("#rssScroll").vTicker(
	{
		speed : interval,
		pause : 5000,
		animate : 'fade',
		mousePause : true,
		showItems : 3,
		height : 1000
	});
	
	setInitialOpacities();
	
	$('#rssScroll').on('vticker.beforeTick', function()
			{

				var ul = jQuery('#rssScroll ul');
				
				ul.children('li:nth-child(2)').animate(
				{
					opacity : 0.15
				}, interval);
				ul.children('li:nth-child(3)').animate(
						{
							opacity : 1
						}, interval);
				ul.children('li:nth-child(5)').css("opacity", .15);
			});
}



function displayRSS(container, feed)
{
	feed.load(function(result)
	{
		$('#rssScroll ul').fadeIn(500);
		if (!result.error)
		{
			container.append("<span class='rssCity'>" +result.feed.title+"</span><br/>");
			
			for (var i = 0; i < result.feed.entries.length; i++)
			{
				var entry = result.feed.entries[i];
				container.append("<span class='rssDate'>" +entry.title + "</span><br/>" + 
						"<span class='rssDescription'>" + entry.content + "</span><br/>");
			}
			
		}
		else
		{
			$("#rssScroll").hide;
			$("#rssDiv").append("RSS Fatal error")
		}
	});
}

function setInitialOpacities()
{
	var ul = jQuery('#rssScroll ul');
	ul.children('li:nth-child(1)').css("opacity", .15);
	ul.children('li:nth-child(2)').css("opacity", 1);
	ul.children('li:nth-child(3)').css("opacity", .15);
	ul.children('li:nth-child(4)').css("opacity", .15);
	ul.children('li:nth-child(5)').css("opacity", .15);
}
