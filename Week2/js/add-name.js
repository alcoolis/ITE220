/**
 * Script to initialize the var nameString before the html page been loaded. the "<script type="text/javascript" src="js/add-name.js"></script>" tag
 * is loaded before "<html>" tag in the html page
 */

var nameString = prompt("What is your name?");

if (nameString === "")
{
	nameString = "Mr.Nobody";
}


