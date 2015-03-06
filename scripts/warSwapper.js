// JavaScript Document

//IMAGE SWAPPER
function swapPhoto(photoSRC,caption) {			
	
	document.images.imgPhoto.src = "images/war/" + photoSRC;
	
	var displayedCaption = document.getElementById("caption");
	displayedCaption.firstChild.nodeValue = caption;
	
}

