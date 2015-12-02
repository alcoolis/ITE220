var game =
{
	answer :Math.ceil(Math.random()*99), // random this value from 1-99 // (1-99) for lessing only to digits and exclude 0
	
	tries : 7,

	
	init : function()
	{
		console.log("Random Number = "+this.answer);//for debugging purposes
		alert("You have 7 tries to find the correct number!");
		
		var self = this;
		
		// Number 1
		var ele = document.getElementById("one");
		ele.addEventListener("click", function(){self.click(1);}, false);

		// Number 2
		var ele = document.getElementById("two");
		ele.addEventListener("click", function(){self.click(2);}, false);

		// Number 3
		var ele = document.getElementById("three");
		ele.addEventListener("click", function(){self.click(3);}, false);

		// Number 4
		var ele = document.getElementById("four");
		ele.addEventListener("click", function(){self.click(4);}, false);

		// Number 5
		var ele = document.getElementById("five");
		ele.addEventListener("click", function(){self.click(5);}, false);

		// Number 6
		var ele = document.getElementById("six");
		ele.addEventListener("click", function(){self.click(6);}, false);

		// Number 7
		var ele = document.getElementById("seven");
		ele.addEventListener("click", function(){self.click(7);}, false);

		// Number 8
		var ele = document.getElementById("eight");
		ele.addEventListener("click", function(){self.click(8);}, false);

		// Number 9
		var ele = document.getElementById("nine");
		ele.addEventListener("click", function(){self.click(9);}, false);

		// Number 0
		var ele = document.getElementById("zero");
		ele.addEventListener("click", function(){self.click(0);}, false);

		
		// Guess!
		var ele = document.getElementById("guess");
		ele.addEventListener("click", function(){self.checkAnswer();}, false);
		
		//clear
		var ele = document.getElementById("clr");
		ele.addEventListener("click", this.clearScreen, false);
		
		//show
		var ele = document.getElementById("show");
		ele.addEventListener("click", function(){self.showAnswer();}, false);

		//backspace
		var ele = document.getElementById("bcsp");
		ele.addEventListener("click", this.backspace, false);
		
		//regenerate number
		var ele = document.getElementById("reg");
		ele.addEventListener("click", function(){self.regenerateNumber();}, false);
		
	},
	
	backspace : function()
	{
		var text = document.getElementById("userValue");
		
		console.log(text.value.length-1);//for debugging purposes
		
		text.value = text.value.substring(0,(text.value.length-1));
	},
	
	regenerateNumber : function()
	{
		this.answer = Math.ceil(Math.random()*99);
		console.log("New Random Number = " + this.answer);//for debugging purposes
		this.tries=7;
	},
	
	clearScreen : function()
	{
		var userValueEle = document.getElementById("userValue");
		userValueEle.value = "";
	},
	
	showAnswer : function()
	{
		alert("The correct number is " + this.answer);
	},
	
	click : function(value)
	{
		console.log(value + " clicked.");

		var userValueEle = document.getElementById("userValue");
		

		if (value == "0" && userValueEle.value == "")
		{
			//if first number entering is 0 the program doing nothing
		}
		else
		{

			if (userValueEle.value.length > 1)
			{
				//if more than 2 numbers entering the program alerting the user
				alert("No more than two numbers is allowed!");
			}
			else
			{
				userValueEle.value += value;

			}
		}
	},
	

	checkAnswer : function()
	{
		var userValueEle = document.getElementById("userValue");

		if (userValueEle.value == this.answer)
		{

			alert("Congratulations! Correct answer");
			this.answer = Math.ceil(Math.random()*99);
			userValueEle.value="";
			this.tries=7;

			console.log("New Random Number = " + this.answer);//for debugging purposes
		}
		else
			if (userValueEle.value > this.answer)
			{
				this.tries--;
				if (this.tries == 0)
				{
					alert("Sorry but you did not find the answer, the correct number was " + this.answer);
					userValueEle.value = "";
					this.tries=7;
					this.answer = Math.ceil(Math.random()*99);
				}
				else if (this.tries == 1)
				{
					alert("Guessing number is more than the correct number, this is your last try!!!");
					userValueEle.value = "";
				}
				else
				{
					alert("Guessing number is more than the correct number, "
							+ this.tries + " tries has left");
					userValueEle.value = "";
				}
			}
			else if(userValueEle.value == "")
			{
				alert("Please put a number");
			}
			else 
			{
				this.tries--;
				if (this.tries == 0)
				{
					alert("Sorry but you did not find the answer, the correct number was " + this.answer);
					userValueEle.value = "";
					this.tries=7;
					this.answer = Math.ceil(Math.random()*99);
				}				
				else if (this.tries == 1)
				{
					alert("Guessing number is less than the correct number, this is your last try!!!");
					userValueEle.value = "";
				}
				else
				{
					alert("Guessing number is less than the correct number, "
								+ this.tries + " tries has left ");
					userValueEle.value = "";
				}
			}
	}
};

game.init();
