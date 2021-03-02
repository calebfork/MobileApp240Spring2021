//js main file

function button_alert() {//needs $php call
    window.alert("Here is a page response example");
}


var window_object_reference;
var window_features = "menubar=no,location=no,resizable=no,scrollbars=no,status=no";

function open_roll_popup() {//pop-out window generation
    window_object_reference = window.open("https://www.cnn.com/", "CNN_WindowName", window_features)
}






//
//
//archaic js
/*var navbar = '<div class="btn-toggle-nav" onclick="navButton()">|||</div>\
	<ul>\
		<li><a href="careers.html">Careers</a></li>\
		<li><a href="downloadpage.html">Downloads</a></li>\
		<li><a href ="about.html">About</a></li>\
		<li><a href="index.html">Home</a>\
			<ul><a href="index.html">submenu1</a></ul>\
			<ul><a href="index.html">submenu2</a></ul>\
			<ul><a href="index.html">submenu3</a></ul>\
		</li>\
	</ul>';

function loadNav() {//loads navbar
	document.getElementById("nav").innerHTML = navbar;
}
*/
var foot1 = '<footer>\
    <a href="index.html">Home</a><a href="about.html">About Us</a><a href="liscense.html">Licensing</a><br>\
   <p>\
      Ozarks Technical Community College 2021. Unless otherwise \
      indicated, all content on this web site is licensed under a \
      Creative Commons License.**\
   </p>\
</footer>';

function loadFoot() {//loads footer
	document.getElementById("foot1").innerHTML = foot1;
}

function navButton(){
	let x = document.getElementById("");
}