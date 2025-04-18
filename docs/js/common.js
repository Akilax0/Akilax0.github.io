function startup(){
	mirrorFooter();
}

function highlight(){
	//
}


function mirrorFooter(){
	if(true){
		var footerDiv=document.getElementById("mirror-footer");
		footerDiv.innerHTML += "<br><br><hr>This content was originally posted on <a href=\"https://gihan.me\">gihan.me</a> (which is my personal website where I can post anything I want)."; 
		footerDiv.innerHTML += "<br>This website does not reflect the opinions of the universities Maryland or Peradeniya irrespective of it being mirrored on their domains.<br><br><br>"; 
	}

	if(document.referrer.includes("harshana95.github.io") & document.URL=="https://gihan.me/"){
		var hdiv=document.getElementById("harshana");
		hdiv.innerHTML += "<table><tr><td class='blinking-red'><br>You see this banner because you came to my webpage through Harshana's webpage. I suppose you are a PhD admissions committee memeber looking at Harshana's co-author list.<br><b>I want you to know Harshana is the MOST INTELLIGENT co-author I have had the pleasure of working with and he DESERVES a spot in any PhD program.</b><br><br><i>Also it goes without saying, he doesn't know this banner is online and I have NOT added such banners for anyone else.</i></td></tr></table>";
		hdiv.innerHTML += "<hr>"

	}

}
