window.onscroll = function(){
	var header = document.getElementById('main-header');
	var nav = document.getElementsByClassName('links');
	var logo = document.getElementById('logotext');
	var links = document.getElementsByClassName('links');

	if (document.documentElement.scrollTop > 40 ){
		header.className = "myheader";
		logo.className = "mylogo";
		links.className = "mylinks";
	}
	else{
		header.className = "";
		logo.className = "";
	}
}

// Counter

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;

setInterval(startcount, 0.1);

function startcount(){
	count1++;
	count2++;
	count3++;
	count4++;
	if (count1 < 6001 ) {
		document.getElementById('num1').textContent= count1;
	}
	if (count2 < 797 ) {
		document.getElementById('num2').textContent= count2;
	}
	if (count3 < 587 ) {
		document.getElementById('num3').textContent= count3;
	}
	if (count4 < 979 ) {
		document.getElementById('num4').textContent= count4;
	}
}



