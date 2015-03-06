// JavaScript Document

//IMAGE SWAPPER
function swapPhoto(photoSRC,shutterSpeed,apertureValue,focalLength) {			
	
	document.images.imgPhoto.src = "images/war/" + photoSRC;
	
	var displayedShutterspeed = document.getElementById("shutterSpeed");
	displayedShutterspeed.firstChild.nodeValue = shutterSpeed;
	
	var displayedApertureValue = document.getElementById("apertureValue");
	displayedApertureValue.firstChild.nodeValue = apertureValue;
	
	var displayedFocalLength = document.getElementById("focalLength");
	displayedFocalLength.firstChild.nodeValue = focalLength;
	
}

