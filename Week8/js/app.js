/**
 * 
 */

$(function()
{
	$('#button').hide();
	$('#hiddenDiv').hide();
	
	var counter = 0;
	var price = 0;

	//prevent the bug of adding more places in the case of broswer back button
	$(".checkBoxes:checked").prop("checked", false);

	
	$('#screen h1:nth-child(2)').html(price + " &#3647");
	
	$('#seats a').click(function()
	{
		if ($('img', this).hasClass('classSelected'))
		{
			if (counter <= 5)//if 5 places are selected before click then with this click the counter drop to 4 (line 41) which is a "correct" value.
			{
				$('#screen h1:nth-child(3)').html("");
				$('#screen h1:nth-child(3)').removeClass("blink_me");
				$('#button').fadeIn(500);
			}
			
			$('img', this).removeClass('classSelected');
			//V.2 update - uncheck hidden checkboxes for sending the data via post php method
			$('#c'+this.id).prop('checked', false);
			
			if ($(this).hasClass('A'))
				price -= 3000;
			else if ($(this).hasClass('B'))
				price -= 2000;
			else
				price -= 1000;
			
			--counter;
			
			if (counter == 0)
			{
				$('#screen h1:nth-child(3)').html("Please choose at least 1 ticket!");
				$('#button').fadeOut(100);
			}
		}
		else
		{
			if (counter > 4)
				return false; //prevent the rest of the code to run in case of more than 4 places are selected...
			else if (counter == 0)
			{
				$('#screen h1:nth-child(3)').html("");
				$('#button').fadeIn(500);
			}
			
			$('img', this).addClass('classSelected');
			//V.2 update - check hidden checkboxes for sending the data via post php method
			$('#c'+this.id).prop('checked', true);
			
			if ($(this).hasClass('A'))
				price += 3000;
			else if ($(this).hasClass('B'))
				price += 2000;
			else
				price += 1000;
			
			++counter;
			
			if (counter > 4)
			{
				$('#screen h1:nth-child(3)').html("You cannot bye more than 4 tickets!");
				$('#screen h1:nth-child(3)').addClass("blink_me");
				blink();
				$('#button').fadeOut(100);
			}
		}
		$('#screen h1:nth-child(2)').html(price + " &#3647");
	})

});

function blink()
{
	$('.blink_me').fadeOut(1000).fadeIn(50, blink);
};