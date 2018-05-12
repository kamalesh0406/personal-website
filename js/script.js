var h1 = document.querySelector("h1");
var text = "Welcome To My Website";

var i =0;
setInterval(function(){
	h1.textContent = text.slice(0,i+1);
	i++
},400)