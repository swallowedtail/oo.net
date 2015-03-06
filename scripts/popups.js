//-- open a popup window 
function popup(link, windowname)
{
if (! window.focus)return true;
var href;
if (typeof(link) == 'string')
   href=link;
else
   href=link.href;
window.open(href, windowname, 'width=440,height=400,left=20,top=20,scrollbars=yes');
return false;
}


/* open a popup centred in browser window*/
function CentreWindow(mypage, myname, w, h, scroll) {
var winl = (screen.width - w) / 2;
var wint = (screen.height - h) / 2;
winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',toolbar=no,resizable=no,status=no'
win = window.open(mypage, myname, winprops)
if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}


/* open a popup centred in browser window*/
// open new window
function openWindow(url, name, w, h) {
  popupWin = window.open(url, name, 'resizable,scrollbars,menubar,width=' + w + ',height=' + h);
}
function openWindowEx3(url, name, w, h) {
  // initialize winX and winY to default values
  // for cases where Screen object isn't supported
  var winX = 0;
  var winY = 0;

  // only set new values if 4.0 browser
  if (parseInt(navigator.appVersion) >= 4) {
    winX = (screen.availWidth - w)*.5;
    winY = (screen.availHeight - h)*.5;
  }

  popupWin = window.open(url, name, 'width=' + w + ',height=' + h + ',left=' + winX + ',top=' + winY);
}


// functions that swap images
function imageOn(i) {
	document.images['nav' + i].src = onImgArray[i].src
}

function imageOff(i) {
	document.images['nav' + i].src = offImgArray[i].src
}


// function that displays status bar messages

function dm(msgStr) {
    window.status = msgStr;
    document.MM_returnValue = true;
}

