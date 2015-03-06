// JavaScript Document

//IMAGE SWAPPER
function swapPhoto(photoSRC,who,where,when) {			
	
	document.images.imgPhoto.src = "images/war/" + photoSRC;
	
	var displayedWho = document.getElementById("who");
	displayedWho.firstChild.nodeValue = who;
	
	var displayedWhere = document.getElementById("where");
	displayedWhere.firstChild.nodeValue = where;
	
	var displayedWhen = document.getElementById("when");
	displayedWhen.firstChild.nodeValue = when;
	
}

