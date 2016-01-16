/**
 * 
 */

$(function()
{
	$('#button').hide();
	
	var counter=0;
	var price=0;
	
	$('#screen h1:nth-child(2)').html(price +" &#3647");
	
	$('#seats a').click(function()
	{
		if ($('img', this).hasClass('classSelected'))
		{
			if(counter<=5)
			{
				$('#screen h1:nth-child(3)').html("");
				$('#screen h1:nth-child(3)').removeClass("blink_me");
				$('#button').fadeIn(500);
			}
			
			$('img', this).removeClass('classSelected');
			
			if($(this).hasClass('A'))
				price-=3000;
			else if($(this).hasClass('B'))
				price-=2000;
			else
				price-=1000;
			
			--counter;
			
			if(counter==0)
			{
				$('#screen h1:nth-child(3)').html("Please choose at least 1 ticket!");
				$('#button').fadeOut(100);
			}
		}
		else
		{
			if(counter>4)
				return false;
			else if(counter==0)
			{
				$('#screen h1:nth-child(3)').html("");
				$('#button').fadeIn(500);
			}
			
			$('img', this).addClass('classSelected');
			
			if($(this).hasClass('A'))
				price+=3000;
			else if($(this).hasClass('B'))
				price+=2000;
			else
				price+=1000;
				

			++counter;

			if(counter>4)
			{
				$('#screen h1:nth-child(3)').html("You cannot bye more than 4 tickets!");
				$('#screen h1:nth-child(3)').addClass("blink_me");
				blink();
				$('#button').fadeOut(100);
			}
		}
		$('#screen h1:nth-child(2)').html(price +" &#3647");
	})
});

function blink()
{
	$('.blink_me').fadeOut(1000).fadeIn(50, blink);
};