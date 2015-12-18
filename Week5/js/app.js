$(function()
{
	var app =
	{
		init : function()
		{
			app.init_effect();
			app.init_event();
		},

		init_effect : function()
		{
			$("#head_tagline").height(200);
			$("#head_tagline>h1").hide().fadeIn(700);
			$("#head_tagline>p:first").hide().delay(700).fadeIn(700);
			$("#head_tagline>p:last").hide();
			$("#head_tagline>a").hide().delay(1400).fadeIn(700);
			
			$(".error").hide();
		},

		init_event : function()
		{
			$("#head_tagline>a").on("click", function(){

				if($("#head_tagline>a").text()=="Learn More")
				{
					$("#head_tagline").height(300);
					$("#head_tagline>p:last").fadeIn(700);
					$("#head_tagline>a").attr('class', 'button large hollow');
					$("#head_tagline>a").text("Learn Less");
				}
				else
				{
					$("#head_tagline>p:last").hide();
					$("#head_tagline").height(200);
					$("#head_tagline>a").attr('class', 'button large');
					$("#head_tagline>a").text("Learn More");
				}
			});
			

			
			
			$("#form-submit").on("click", function(){
				
				var phone = $("#form-number").val();
				var myText = $("#form-message").val();

				if($.isNumeric(phone))
				{
					$(".error:eq(1)").hide();
				}
				else
				{
					$(".error:eq(1)").show();
				}
				
				if(myText.toLowerCase().indexOf("badwords")>=0)
				{
					$(".error:last").text("Invalid entry: your message may contain bad words");
					$(".error:last").show();
				}
				else
				{
					$(".error:last").hide();
				}
				
				if($("#form-name").val()=="")
				{
					$(".error:first").text("Invalid entry: write a fucking name");
					$(".error:first").show();
				}
				else
				{
					$(".error:first").hide();
				}
				
				if($("#form-message").val()=="")
				{
					$(".error:last").text("Invalid entry: write a fucking message");
					$(".error:last").show();
				}
				
				
				if($.isNumeric(phone) && (myText.toLowerCase().indexOf("badwords") < 0) && ($("#form-message").val()!="") && ($("#form-name").val()!=""))
				{
					swal("Message Sent!", "Click ok to continue!", "success");

					 $("#form-name").val("");
					 $("#form-number").val("");
					 $("#form-message").val("");
				}
			});

						
			$(".image-flip").flip(
			{
				axis : 'y',
				trigger : 'hover'
			});
			
		}

	};
	app.init();
});
